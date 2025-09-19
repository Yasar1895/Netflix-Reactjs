import React from 'react'

export default function Banner({ movie }) {
  return (
    <section
      className="w-full relative h-72 sm:h-96 lg:h-[420px] rounded-b-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(11,11,11,0.1) 0%, rgba(11,11,11,0.9) 60%), url(${movie ? movie.poster : '/images/banner_main.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 absolute bottom-0 left-0 right-0">
        <h1 className="text-4xl font-bold">{movie?.title ?? 'Featured'}</h1>
        <p className="mt-2 max-w-lg text-sm opacity-80">{movie?.genre} • {movie?.year}</p>
        <div className="mt-4 flex gap-3">
          <a
            href={movie?.trailer ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-4 py-2 rounded font-semibold hover:opacity-90"
          >
            Play Trailer
          </a>
          <a
            href={movie?.imdb ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 px-4 py-2 rounded border border-white/20 hover:bg-white/5"
          >
            IMDb
          </a>
        </div>
      </div>
    </section>
  )
}
