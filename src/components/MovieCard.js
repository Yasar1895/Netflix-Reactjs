import React, { useState } from 'react'
import { ratingToStars } from '../utils/format'
import { FaHeart, FaRegHeart, FaPlay } from 'react-icons/fa'

export default function MovieCard({ movie, isFavorite, onToggleFav, onOpenTrailer }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="min-w-[200px] max-w-[200px] shrink-0 relative rounded overflow-hidden bg-gradient-to-b from-cardGradientA to-cardGradientB shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.poster} alt={movie.title} className="w-full h-56 object-cover" />
      {/* hover overlay */}
      <div className={`absolute inset-0 p-3 transition-opacity duration-200 ${hover ? 'bg-black/60 opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-start">
          <button onClick={onToggleFav} aria-label="Toggle favorite">
            {isFavorite ? <FaHeart className="text-netflixRed text-xl" /> : <FaRegHeart className="text-white/90 text-xl" />}
          </button>
          <div className="text-sm text-white/80">{movie.year}</div>
        </div>

        <div className="mt-20">
          <h3 className="text-sm font-bold">{movie.title}</h3>
          <p className="text-xs opacity-80">{ratingToStars(movie.rating)} • {movie.genre}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={onOpenTrailer}
              className="bg-white/90 text-black px-2 py-1 rounded flex items-center gap-2 text-sm"
            >
              <FaPlay /> Play
            </button>
            <a href={movie.imdb} target="_blank" rel="noreferrer" className="bg-white/5 px-2 py-1 rounded text-sm border border-white/10">
              IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
