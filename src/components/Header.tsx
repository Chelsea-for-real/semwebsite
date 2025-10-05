import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/study', label: 'STUDY WITH US' },
    { path: '/research', label: 'RESEARCH' },
    { path: '/people', label: 'PEOPLE' },
    { path: '/news', label: 'NEWS & EVENTS' },
    { path: '/contact', label: 'CONTACT' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-neo-pink border-3 border-black flex items-center justify-center font-mono font-bold text-xl">
              SEM
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-lg leading-tight">XMUM</div>
              <div className="font-mono text-xs">ECONOMICS & MANAGEMENT</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-mono text-sm font-semibold border-3 border-black transition-all hover-lift ${
                  isActive(item.path)
                    ? 'bg-neo-cyan text-black'
                    : 'bg-white text-black hover:bg-neo-yellow'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="ml-4 p-2 border-3 border-black bg-neo-green hover-lift">
              <Globe size={20} />
            </button>
          </nav>

          <button
            className="lg:hidden p-2 border-3 border-black bg-neo-pink hover-lift"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 font-mono text-sm font-semibold border-3 border-black ${
                    isActive(item.path)
                      ? 'bg-neo-cyan text-black'
                      : 'bg-white text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
