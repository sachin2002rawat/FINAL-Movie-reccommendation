import express from 'express'
import { recommendMovies, getRecommendations } from '../controllers/recommendationController.js'

const router = express.Router()

router.post('/recommend', recommendMovies)
router.get('/recommendations', getRecommendations)

export default router
