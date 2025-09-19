import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 text-sm text-white/70">
        <div className="mb-4">© {new Date().getFullYear()} Nflix clone • Front-end only • No API</div>
        <div className="flex gap-4">
          <a className="hover:text-white">Privacy</a>
          <a className="hover:text-white">Terms</a>
          <a className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
