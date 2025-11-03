"use client"

import type React from "react"

import { useState } from "react"
import { Clock } from "lucide-react"

export default function UnavailablePage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="relative bg-slate-800/50 p-6 rounded-full border border-slate-700">
              <Clock className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">We'll Be Back Soon</h1>

        {/* Subheading */}
        <p className="text-xl text-slate-400 mb-8 max-w-lg mx-auto">
          Our site is currently unavailable. We're working hard to bring everything back online as quickly as possible.
        </p>

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">Maintenance in progress</span>
        </div>

        {/* Newsletter Form */}
        <div className="mt-12 mb-8">
          <p className="text-slate-400 text-sm mb-4">Get notified when we're back online</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
          {submitted && <p className="text-green-400 text-sm mt-3">Thanks! We'll notify you soon.</p>}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            Questions? Contact us at{" "}
            <a href="mailto:support@karolih.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@karolih.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
