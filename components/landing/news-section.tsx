"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { RefreshCw, Newspaper, ExternalLink, Calendar, User } from "lucide-react"

interface NewsArticle {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

// News Card Component
function NewsCard({ article }: { article: NewsArticle }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
      {article.urlToImage && (
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
            // priority={false}
          />
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
          {article.source.name}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
        {article.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {article.description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        {article.author && (
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span className="truncate max-w-20">{article.author}</span>
          </div>
        )}
      </div>
      
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:gap-3 transition-all"
      >
        Read More
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  )
}

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 animate-pulse">
      <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  )
}

// Main News Section Component
export function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastRefresh, setLastRefresh] = useState<string>("")

  // Fixed to US and English
  const country = "us"
  const language = "en"

  // Fallback data matching your provided response structure
  const fallbackArticles: NewsArticle[] = useMemo(() => [
    {
      source: { id: null, name: "MacRumors" },
      author: "Hartley Charlton",
      title: "New MacBook With A18 Pro Chip Spotted in Apple Code - MacRumors",
      description: "Apple is developing a MacBook with the A18 Pro chip, according to findings in backend code uncovered by MacRumors.",
      url: "https://www.macrumors.com/2025/06/30/new-macbook-with-a18-chip-spotted/",
      urlToImage: "https://images.macrumors.com/t/zGNmiiqRcFDiX80_YNpZGFhYMhY=/1600x/article-new/2024/09/A18-Pro-Chip.jpg",
      publishedAt: "2025-06-30T15:05:12Z",
      content: "Apple is developing a MacBook with the A18 Pro chip, according to findings in backend code uncovered by MacRumors."
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Emma Roth",
      title: "Apple is reportedly working on a bunch of new XR devices - The Verge",
      description: "Apple is working on several new XR devices that could launch in the coming years, according to a report from supply chain analyst Ming-Chi Kuo.",
      url: "https://www.theverge.com/news/694953/apple-xr-devices-vision-pro-smart-glasses",
      urlToImage: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/246965_vision_pro_VPavic_0034.webp?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      publishedAt: "2025-06-30T13:49:47Z",
      content: "Smart glasses and a Vision Air headset are planned for 2027, according to supply chain analyst Ming-Chi Kuo."
    }
  ], [])

  const fetchTechNews = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        country: country,
        language: language,
        category: "technology",
        apiKey: "65c4076bd40f454199267ea95e550d63"
      })

      const response = await fetch(`https://newsapi.org/v2/top-headlines?${params}`)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()

      if (data.status === "error") {
        throw new Error(data.message || "API returned an error")
      }

      setArticles(data.articles || [])
      setLastRefresh(new Date().toLocaleTimeString())
    } catch (err) {
      console.error("Failed to fetch tech news:", err)
      setError("Failed to load news articles. Showing fallback content.")
      setArticles(fallbackArticles)
      setLastRefresh(new Date().toLocaleTimeString())
    } finally {
      setLoading(false)
    }
  }, [country, language, fallbackArticles])

  useEffect(() => {
    fetchTechNews()
  }, [fetchTechNews])

  // Auto-refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(fetchTechNews, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [fetchTechNews])

  const handleRefresh = () => {
    fetchTechNews()
  }

  const displayedArticles = articles.slice(0, 12)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              Live Tech News - US Edition
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tech News</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get real-time updates from the most trusted tech news sources in the United States, curated specifically for students and developers.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors disabled:opacity-50 font-medium"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Loading..." : "Refresh News"}
              </button>
            </div>

            {error && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-yellow-300 text-sm">{error}</p>
              </div>
            )}

            <div className="text-sm text-gray-400 mb-8">
              Last updated: {lastRefresh} | Showing {displayedArticles.length} articles
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <LoadingSpinner key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedArticles.map((article, index) => (
                <NewsCard key={`${article.url}-${index}`} article={article} />
              ))}
            </div>
          )}

          {!loading && displayedArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No news articles found</div>
              <p className="text-gray-500">Please try refreshing the page</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}