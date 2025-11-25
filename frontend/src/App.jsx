import { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import cinema from './assets/cinema.webp'
function App() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleRecommendations = (movies) => {
    setRecommendations(movies)
    setError(null)
  }

  const handleError = (err) => {
    setError(err)
    setRecommendations([])
  }

  const handleLoading = (isLoading) => {
    setLoading(isLoading)
  }

  return (
    <div className="app">
      <header>
        <div className='demo1'>
        <h1>AI Powered Movie Recommendation App</h1>
            <img src={cinema} alt="" width={200} height={100} />
            </div>
        <p>Tell us what kind of movies you like, and we'll recommend some great films for you!</p>
      </header>
    
      
      <main>
        <MovieForm 
          onRecommendations={handleRecommendations}
          onError={handleError}
          onLoading={handleLoading}
        />
        
        {loading && <div className="loading">Getting recommendations...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {recommendations.length > 0 && (
          <MovieList movies={recommendations} />
        )}
      </main>
    </div>
  )
}

export default App
