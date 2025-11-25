function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2>Recommended Movies</h2>
      <div className="movies">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{typeof movie === 'string' ? movie : movie.title || movie}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
