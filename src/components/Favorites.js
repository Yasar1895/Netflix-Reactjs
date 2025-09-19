import React from 'react'
import MovieCard from './MovieCard'

export default function Favorites({ movies, favorites, onToggleFav, onOpenTrailer }) {
  const favMovies = movies.filter(m => favorites.includes(m.id))
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Your Favorites</h2>
      {favMovies.length === 0 ? (
        <div className="text-sm opacity-80">No favorites yet. Click the heart icon on any movie to add it here.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favMovies.map(m => (
            <MovieCard
              key={m.id}
              movie={m}
              isFavorite={true}
              onToggleFav={() => onToggleFav(m.id)}
              onOpenTrailer={() => onOpenTrailer(m)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
