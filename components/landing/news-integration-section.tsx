import {Zap, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Student-Relevant Content",
    description: "Focus on career-relevant tech trends, internship opportunities, and industry insights.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay ahead with the latest industry news, updated every 30 minutes automatically.",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export function NewsIntegrationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                News Integration
              </span>{" "}
              Matters
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay informed about the tech industry while you study. Our integrated news feed keeps you connected to the
              latest developments that matter for your career.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-gray-400 text-sm">StudyHub - Tech News Feed</div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TC</span>
                    </div>
                    <span className="text-blue-300 text-sm font-semibold">TechCrunch</span>
                    <span className="text-gray-400 text-xs">• 2h ago</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">AI Startup Raises $50M Series A</h4>
                  <p className="text-gray-400 text-xs">New opportunities in machine learning...</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">V</span>
                    </div>
                    <span className="text-purple-300 text-sm font-semibold">The Verge</span>
                    <span className="text-gray-400 text-xs">• 4h ago</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">React 19 Beta Released</h4>
                  <p className="text-gray-400 text-xs">New features for modern web development...</p>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">W</span>
                    </div>
                    <span className="text-green-300 text-sm font-semibold">Wired</span>
                    <span className="text-gray-400 text-xs">• 6h ago</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">Top Tech Internships 2024</h4>
                  <p className="text-gray-400 text-xs">Best opportunities for computer science students...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
