"use client"

import { ExternalLink, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsSource {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

interface NewsCardProps {
  source: NewsSource
}

const countryFlags: { [key: string]: string } = {
  us: "🇺🇸",
  gb: "🇬🇧",
  in: "🇮🇳",
  ca: "🇨🇦",
  au: "🇦🇺",
  de: "🇩🇪",
  fr: "🇫🇷",
  jp: "🇯🇵",
  kr: "🇰🇷",
  cn: "🇨🇳",
}

export function NewsCard({ source }: NewsCardProps) {
  const countryFlag = countryFlags[source.country] || "🌍"

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div className="text-2xl">{countryFlag}</div>
        </div>

        <div className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">Technology</div>
      </div>

      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">{source.name}</h3>

      <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{source.description}</p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500 uppercase tracking-wide">
          {source.language.toUpperCase()} • {source.country.toUpperCase()}
        </div>

        <Button
          size="sm"
          variant="outline"
          className="border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent"
          onClick={() => window.open(source.url, "_blank")}
        >
          <ExternalLink className="w-3 h-3 mr-1" />
          Visit
        </Button>
      </div>
    </div>
  )
}
