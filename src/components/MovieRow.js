import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function MovieRow({ title, movies, onToggleFav, favorites, onOpenTrailer }) {
  const rowRef = useRef(null)

  const scroll = (dir) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="p-2 rounded bg-white/5 hover:bg-white/10">
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll(1)} className="p-2 rounded bg-white/5 hover:bg-white/10">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
      >
        {movies.map(m => (
          <MovieCard
            key={m.id}
            movie={m}
            isFavorite={favorites.includes(m.id)}
            onToggleFav={() => onToggleFav(m.id)}
            onOpenTrailer={() => onOpenTrailer(m)}
          />
        ))}
      </div>
    </div>
  )
}
