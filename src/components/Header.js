import React from 'react'
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'

export default function Header({ onOpenFavorites }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-black/60 border-b border-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-netflixRed font-extrabold text-2xl select-none">Nflix</div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a className="hover:text-netflixRed transition">Home</a>
            <a className="hover:text-netflixRed transition">TV Shows</a>
            <a className="hover:text-netflixRed transition">Movies</a>
            <a className="hover:text-netflixRed transition">New & Popular</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-white/5 hover:bg-white/10">
            <FaSearch /> <span className="text-xs">Search</span>
          </button>

          <button
            className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-sm"
            onClick={onOpenFavorites}
            aria-label="Open favorites"
          >
            Favorites
          </button>

          <FaBell className="hidden md:block" />
          <FaUserCircle className="text-3xl" />
        </div>
      </div>
    </header>
  )
}
