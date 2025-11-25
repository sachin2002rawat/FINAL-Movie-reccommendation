import { saveRecommendation, getRecommendations } from '../models/recommendationModel.js'
import { getRecommendationsFromGemini } from './geminiService.js'

export async function generateAndSaveRecommendations(userInput) {
  const recommendations = await getRecommendationsFromGemini(userInput)
  await saveRecommendation(userInput, JSON.stringify(recommendations))
  return recommendations
}

export async function fetchRecommendationsFromDB(limit) {
  return await getRecommendations(limit)
}
