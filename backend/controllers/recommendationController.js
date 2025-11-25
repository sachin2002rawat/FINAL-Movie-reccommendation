import { generateAndSaveRecommendations, fetchRecommendationsFromDB } from '../services/recommendationService.js'

let dbReady = false

export function setDBReady(status) {
  dbReady = status
}

export async function recommendMovies(req, res) {
  if (!dbReady) {
    return res.status(503).json({ error: 'Database not ready' })
  }

  try {
    const { userInput } = req.body
    if (!userInput || typeof userInput !== 'string' || !userInput.trim()) {
      return res.status(400).json({ error: 'Please provide a valid user input' })
    }

    const movies = await generateAndSaveRecommendations(userInput.trim())
    res.json({ movies })
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
}

export async function getRecommendations(req, res) {
  if (!dbReady) {
    return res.status(503).json({ error: 'Database not ready' })
  }

  try {
    const movies = await fetchRecommendationsFromDB()
    res.json({ recommendations: movies })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
