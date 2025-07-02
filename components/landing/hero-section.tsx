"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { BrainLinkLogo } from "@/components/brainLink-logo"

export function HeroSection() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/setup")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20" />
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-8">
            <BrainLinkLogo 
              className="text-white mx-auto" 
              size="large"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Built by students, for students
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connect. Collaborate.{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Conquer
            </span>{" "}
            your coursework.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Real-time chat rooms, live study servers, and a pulse on the latest in tech—
            <span className="text-purple-400 font-semibold"> all in one platform</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

            {/* Mock Chat Interface */}
            <div className="relative p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-gray-400 text-sm">BrainLink - CS 101 Study Group</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="text-purple-400 text-sm font-semibold">Rohan Singh</div>
                    <div className="text-gray-300 text-sm">Just shared the latest React 18 news! 🚀</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-400 text-sm font-semibold">Saurav Sanu</div>
                    <div className="text-gray-300 text-sm">
                      Perfect timing! We&apos;re covering hooks in tomorrow&apos;s project
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                  <div className="text-cyan-400 text-xs font-semibold mb-1">📰 TECH NEWS</div>
                  <div className="text-white text-sm font-medium">React 18 Introduces Concurrent Features</div>
                  <div className="text-gray-400 text-xs">TechCrunch • 2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}