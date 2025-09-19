import React from 'react'

export default function SearchBar({ query, onChange }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies, genres, years..."
        className="w-full rounded-md py-2 px-3 bg-white/5 placeholder:text-white/60 focus:outline-none"
      />
    </div>
  )
}
