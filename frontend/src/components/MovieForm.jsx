import { useState } from 'react'
import axios from 'axios'

function MovieForm({ onRecommendations, onError, onLoading }) {
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!input.trim()) {
      onError('Please enter your movie preferences')
      return
    }

    onLoading(true)
    onError(null)

    try {
      const response = await axios.post('http://localhost:5000/api/recommend', {
        userInput: input.trim()
      })

      if (response.data.movies && response.data.movies.length > 0) {
        onRecommendations(response.data.movies)
      } else {
        throw new Error('No recommendations received')
      }
    } catch (err) {
      onError(err.response?.data?.error || err.message || 'Something went wrong. Please try again.')
    } finally {
      onLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <div className="form-group">
        <label htmlFor="preference">What kind of movies do you like?</label>
        <textarea
          id="preference"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., action movies with a strong female lead, or sci-fi thrillers, or romantic comedies..."
          rows="3"
        />
      </div>
      <button type="submit" disabled={!input.trim()}>
        Get Recommendations
      </button>
    </form>
  )
}

export default MovieForm
