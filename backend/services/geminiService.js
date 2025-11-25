import { GoogleGenerativeAI } from '@google/generative-ai'

let genAI = null

function getGeminiClient() {
  if (!genAI) {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.trim() === '') {
      throw new Error('GEMINI_API_KEY is not set in .env file')
    }
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  }
  return genAI
}

export async function getRecommendationsFromGemini(userInput) {
  const prompt = `Based on the following movie preference: "${userInput}", recommend 3-5 
movies. 

Return the response as a JSON array of movie titles only (just the movie names as strings).

Example format:
["Movie Name 1", "Movie Name 2", "Movie Name 3", "Movie Name 4", "Movie Name 5"]

Only return the JSON array with movie titles, no additional text, no explanations, no 
years, just the movie names.`

  const client = getGeminiClient()
  const model = client.getGenerativeModel({ model: "gemini-2.5-flash" })
  const result = await model.generateContent(prompt)
  const response = await result.response
  const content = response.text().trim()

  let movies
  try {
    movies = JSON.parse(content)
  } catch (parseError) {
    const jsonMatch = content.match(/\[[\s\S]*\]/)
    if (jsonMatch) {
      movies = JSON.parse(jsonMatch[0])
    } else {
      throw new Error('Failed to parse recommendations from API response')
    }
  }

  if (!Array.isArray(movies) || movies.length === 0) {
    throw new Error('Invalid recommendations format')
  }

  return movies.slice(0, 5)
}
