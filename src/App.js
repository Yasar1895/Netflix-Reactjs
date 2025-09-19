import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import MovieRow from './components/MovieRow'
import Favorites from './components/Favorites'
import ModalTrailer from './components/ModalTrailer'
import Footer from './components/Footer'
import { movies as allMovies } from './data/movies'

export default function App() {
  const [favorites, setFavorites] = useState([])
  const [query, setQuery] = useState('')
  const [activeTrailer, setActiveTrailer] = useState(null)
  const [openFavSection, setOpenFavSection] = useState(false)

  const toggleFav = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  // derive genres
  const genres = useMemo(() => {
    const s = new Set(allMovies.map(m => m.genre))
    return ['All', ...Array.from(s)]
  }, [])

  // filtered list according to query
  const filtered = allMovies.filter(m => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q) || String(m.year).includes(q)
  })

  // split by genre sets for rows
  const rows = useMemo(() => {
    const byGenre = {}
    filtered.forEach(m => {
      byGenre[m.genre] = byGenre[m.genre] || []
      byGenre[m.genre].push(m)
    })
    return byGenre
  }, [filtered])

  // pick a featured movie for banner (first filtered or first movie)
  const featured = filtered[0] || allMovies[0]

  return (
    <div className="min-h-screen pb-12">
      <Header onOpenFavorites={() => setOpenFavSection(s => !s)} />

      <main className="pt-20">
        <Banner movie={featured} />

        <SearchBar query={query} onChange={setQuery} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex gap-3 items-center overflow-x-auto pb-2">
            {genres.map(g => (
              <span key={g} className="px-3 py-1 rounded bg-white/5 text-sm">{g}</span>
            ))}
            <span className="ml-auto text-xs text-white/60">Matching: {filtered.length}</span>
          </div>
        </div>

        {/* rows per genre */}
        {Object.keys(rows).map(genre => (
          <MovieRow
            key={genre}
            title={genre}
            movies={rows[genre]}
            onToggleFav={toggleFav}
            favorites={favorites}
            onOpenTrailer={(m) => setActiveTrailer(m)}
          />
        ))}

        {/* favorites */}
        {openFavSection && (
          <Favorites
            movies={allMovies}
            favorites={favorites}
            onToggleFav={toggleFav}
            onOpenTrailer={(m) => setActiveTrailer(m)}
          />
        )}

        <Footer />
      </main>

      <ModalTrailer movie={activeTrailer} onClose={() => setActiveTrailer(null)} />
    </div>
  )
}
