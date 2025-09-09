import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND } from './lib/brand'

import Home from './components/Home'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Portfolio from './components/Portfolio'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt={BRAND.name} className="h-8 w-8" />
          <h1 className="text-xl font-bold">{BRAND.name}</h1>
        </div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <motion.div className="flex-grow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </motion.div>
      <footer className="bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">{BRAND.name}</h4>
            <p className="text-sm">{BRAND.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <form action="https://YOUR_MAILCHIMP_URL" method="post" className="flex gap-2">
              <input type="email" name="EMAIL" placeholder="Your email" className="p-2 border rounded w-full" required />
              <button className="btn-accent px-4 py-2 rounded" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="text-center text-xs mt-6">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
      </footer>
      <Chatbot />
    </div>
  )
}
