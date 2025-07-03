import { Github, Linkedin } from "lucide-react"

export function CTAFooterSection() {
  return (
    <footer className="relative">
      {/* Footer */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">BrainLink</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The future of student collaboration. Connect, collaborate, and conquer your coursework with integrated
                tech news and powerful study tools.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/priyanshupatel84/BrainLink" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/priyanshupatel007" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 BrainLink. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-2 sm:mt-0">Built with ❤️ by students, for students</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
