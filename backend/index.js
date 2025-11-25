import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import recommendationRoutes from './routes/recommendationRoutes.js'
import { initDatabase } from './config/db.js'
import { setDBReady } from './controllers/recommendationController.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin:"https://final-movie-reccommendation-1.onrender.com",
  credentials:true
}))
app.use(express.json())
app.use('/api', recommendationRoutes)

initDatabase()
  .then(() => {
    setDBReady(true)
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error)
    process.exit(1)
  })
