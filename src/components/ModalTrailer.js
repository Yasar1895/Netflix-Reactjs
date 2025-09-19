import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function ModalTrailer({ movie, onClose }) {
  if (!movie) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-3xl bg-black rounded overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
          <h3 className="text-lg font-semibold">{movie.title} • Trailer</h3>
          <button onClick={onClose}><FaTimes /></button>
        </div>
        <div className="aspect-video">
          <iframe
            src={movie.trailer}
            title={`${movie.title} trailer`}
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
