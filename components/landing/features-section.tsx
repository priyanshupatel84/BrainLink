import { MessageSquare, Share2, Users, BookOpen } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Subject Channels",
    description:
      "Create private/public rooms per course or topic. Organize discussions by semester, subject, or project.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Resource Sharing",
    description: "Drop PDFs, slides, GitHub repos, YouTube clips. Everything in one place for easy access.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Form study groups with classmates. Share notes, collaborate on assignments, and help each other succeed.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Build a searchable library of notes, summaries, and study materials. Access past discussions instantly.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed specifically for student collaboration and academic success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}
