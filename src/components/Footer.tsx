import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { label: 'Admissions', path: '/study' },
    { label: 'Academics', path: '/study' },
    { label: 'Research', path: '/research' },
    { label: 'Contact', path: '/contact' },
    { label: 'ePayment', path: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, url: '#', color: 'bg-neo-cyan' },
    { icon: Twitter, url: '#', color: 'bg-neo-pink' },
    { icon: Instagram, url: '#', color: 'bg-neo-yellow' },
    { icon: Linkedin, url: '#', color: 'bg-neo-green' },
    { icon: Youtube, url: '#', color: 'bg-neo-pink' },
  ]

  return (
    <footer className="bg-black text-white border-t-4 border-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-neo-pink border-3 border-white flex items-center justify-center font-mono font-bold text-2xl">
                SEM
              </div>
              <div>
                <div className="font-bold text-lg">XMUM</div>
                <div className="font-mono text-xs text-neo-cyan">SCHOOL OF ECONOMICS</div>
                <div className="font-mono text-xs text-neo-cyan">& MANAGEMENT</div>
              </div>
            </div>
            <p className="font-mono text-sm text-gray-300">
              Inspiring analytical thinkers for a global future
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-neo-yellow">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-mono text-sm hover:text-neo-cyan transition-colors inline-block hover:translate-x-1 transform"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-neo-yellow">CONTACT INFO</h3>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-neo-green flex-shrink-0" />
                <span>Jalan Sunsuria, Bandar Sunsuria, 43900 Sepang, Selangor</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-neo-green flex-shrink-0" />
                <span>+60 3-8705 8605</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-neo-green flex-shrink-0" />
                <span>sem@xmu.edu.my</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-neo-yellow">FOLLOW US</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`p-3 ${social.color} border-3 border-white hover-lift`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} className="text-black" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-3 border-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-mono text-sm text-gray-400">
              © 2024 Xiamen University Malaysia. All rights reserved.
            </p>
            <div className="flex space-x-6 font-mono text-sm">
              <a href="#" className="hover:text-neo-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neo-cyan transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-neo-cyan transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
