import { getDB } from '../config/db.js'

export async function saveRecommendation(userInput, recommendedMovies) {
  const db = getDB()
  const collection = db.collection('recommendations')
  await collection.insertOne({
    user_input: userInput,
    recommended_movies: recommendedMovies,
    timestamp: new Date()
  })
}

export async function getRecommendations(limit = 50) {
  const db = getDB()
  const collection = db.collection('recommendations')
  const results = await collection
    .find({})
    .sort({ timestamp: -1 })
    .limit(limit)
    .toArray()
  return results
}
