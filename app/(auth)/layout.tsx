import type React from "react"
import Link from "next/link"
import { Brain } from "lucide-react"
import { BrainLinkLogo } from "@/components/brainLink-logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 relative">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg shadow transition-colors z-10"
      >
        ← Back to Home
      </Link>

      {/* Centered container that accounts for the back button */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
            {/* App info */}
            <div className="mb-6 text-center">
              <BrainLinkLogo className="w-20 h-20 mx-auto mb-2" />
              <p className="text-sm text-gray-200">Connect with fellow students and conquer your coursework together.</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
