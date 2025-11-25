import { MongoClient } from 'mongodb'

let client = null
let db = null

export async function initDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
    const dbName = process.env.MONGODB_DB_NAME || 'movie-rec'

    client = new MongoClient(mongoUri)
    await client.connect()
    db = client.db(dbName)

    const collections = await db.listCollections({ name: 'recommendations' }).toArray()
    if (collections.length === 0) {
      await db.createCollection('recommendations')
    }

    console.log('MongoDB connected successfully')
  } catch (error) {
    throw error
  }
}

export function getDB() {
  if (!db) throw new Error('Database not initialized')
  return db
}
