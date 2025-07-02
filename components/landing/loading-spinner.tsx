export function LoadingSpinner() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-700 rounded-lg" />
          <div className="w-8 h-8 bg-gray-700 rounded" />
        </div>
        <div className="w-20 h-6 bg-gray-700 rounded-full" />
      </div>

      <div className="w-3/4 h-6 bg-gray-700 rounded mb-2" />
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-gray-700 rounded" />
        <div className="w-5/6 h-4 bg-gray-700 rounded" />
        <div className="w-4/6 h-4 bg-gray-700 rounded" />
      </div>

      <div className="flex items-center justify-between">
        <div className="w-16 h-4 bg-gray-700 rounded" />
        <div className="w-16 h-8 bg-gray-700 rounded" />
      </div>
    </div>
  )
}
