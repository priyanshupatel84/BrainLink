"use client"
import { Users, Share, Newspaper, Video, Hash, Volume2, Settings, UserPlus, Upload, FileText, Bell, Calendar, Phone, ScreenShare, Mic, MicOff, VideoOff, VideoIcon } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    icon: Users,
    title: "Create or Join Rooms",
    description: "Set up study groups for your courses or join existing communities of like-minded students.",
  },
  {
    icon: Share,
    title: "Share Resources Instantly",
    description: "Upload and share study materials, code repositories, and helpful links with your study group.",
  },
  {
    icon: Newspaper,
    title: "Stay Updated with Tech News",
    description: "Get real-time tech news integrated directly into your study environment.",
  },
  {
    icon: Video,
    title: "Collaborate in Real-time",
    description: "Voice and video calls, screen sharing, and collaborative coding sessions.",
  },
]

// Step 1: Create or Join Rooms UI
function CreateJoinRoomsUI() {
  // const [activeTab, setActiveTab] = useState("servers")
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="flex h-96">
        {/* Server List */}
        <div className="w-16 bg-gray-900 flex flex-col items-center py-3 space-y-2">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold hover:rounded-xl transition-all cursor-pointer">
            SH
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:rounded-xl transition-all cursor-pointer">
            <Users className="w-6 h-6 text-gray-300" />
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:rounded-xl transition-all cursor-pointer">
            <span className="text-white font-bold text-xs">CS</span>
          </div>
          <div className="w-12 h-12 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center hover:border-green-500 transition-all cursor-pointer">
            <UserPlus className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Channel List */}
        <div className="w-60 bg-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-600">
            <h3 className="font-semibold text-white">BrainLink Server</h3>
            <p className="text-xs text-gray-400">Computer Science Hub</p>
          </div>
          
          <div className="flex-1 p-2">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Study Channels</span>
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                  <Hash className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-200 text-sm">general</span>
                </div>
                <div className="flex items-center px-2 py-1 rounded bg-gray-600">
                  <Hash className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-white text-sm">algorithms</span>
                </div>
                <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                  <Hash className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-200 text-sm">data-structures</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Voice Channels</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                  <Volume2 className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-200 text-sm">Study Room 1</span>
                  <span className="ml-auto text-xs text-gray-400">3</span>
                </div>
                <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                  <Volume2 className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-200 text-sm">Code Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center">
              <Hash className="w-5 h-5 text-gray-400 mr-2" />
              <span className="font-semibold text-white">algorithms</span>
              <span className="ml-4 text-sm text-gray-400">Discuss algorithm problems and solutions</span>
            </div>
          </div>
          
          <div className="flex-1 p-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hash className="w-8 h-8 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Welcome to #algorithms!</h4>
              <p className="text-gray-400">This is the start of the #algorithms channel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 2: Share Resources UI
function ShareResourcesUI() {
  const [dragOver, setDragOver] = useState(false)
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="h-96 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center">
            <Hash className="w-5 h-5 text-gray-400 mr-2" />
            <span className="font-semibold text-white">resources</span>
            <span className="ml-4 text-sm text-gray-400">Share study materials and code</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* File Share Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-white">Alex</span>
                <span className="text-xs text-gray-400">Today at 2:30 PM</span>
              </div>
              <p className="text-gray-300 mb-2">Here&apos;s the data structures cheat sheet I mentioned!</p>
              <div className="bg-gray-700 rounded-lg p-3 border border-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">DataStructures_CheatSheet.pdf</p>
                    <p className="text-xs text-gray-400">2.4 MB</p>
                  </div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Link Share Message */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-white">Sarah</span>
                <span className="text-xs text-gray-400">Today at 2:35 PM</span>
              </div>
              <p className="text-gray-300 mb-2">Found this amazing visualization tool for algorithms!</p>
              <div className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-3">
                  <h4 className="text-white font-medium">Algorithm Visualizer</h4>
                  <p className="text-gray-400 text-sm">Interactive tool for visualizing algorithms and data structures</p>
                  <p className="text-indigo-400 text-sm">visualgo.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className="p-4 border-t border-gray-700">
          <div 
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
              dragOver ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-600'
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false) }}
          >
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-300 font-medium">Drop files to share</p>
            <p className="text-gray-400 text-sm">or click to browse</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 3: Tech News UI
function TechNewsUI() {
  const newsItems = [
    {
      title: "New JavaScript Framework Released",
      summary: "A new lightweight framework promises better performance...",
      time: "2h ago",
      source: "TechCrunch"
    },
    {
      title: "AI Breakthrough in Code Generation",
      summary: "Researchers develop AI that can write complex algorithms...",
      time: "4h ago",
      source: "MIT News"
    },
    {
      title: "Python 3.12 Performance Improvements",
      summary: "Latest Python release shows significant speed gains...",
      time: "6h ago",  
      source: "Python.org"
    }
  ]

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="h-96 flex">
        {/* Channel Sidebar */}
        <div className="w-60 bg-gray-700 border-r border-gray-600">
          <div className="p-4 border-b border-gray-600">
            <h3 className="font-semibold text-white flex items-center">
              <Newspaper className="w-5 h-5 mr-2" />
              Tech News
            </h3>
          </div>
          <div className="p-2">
            <div className="space-y-1">
              <div className="flex items-center px-2 py-1 rounded bg-gray-600">
                <Hash className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-white text-sm">latest-news</span>
                <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                <Hash className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-200 text-sm">frontend</span>
              </div>
              <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                <Hash className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-200 text-sm">backend</span>
              </div>
              <div className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">
                <Hash className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-200 text-sm">ai-ml</span>
              </div>
            </div>
          </div>
        </div>

        {/* News Content */}
        <div className="flex-1 bg-gray-800">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Hash className="w-5 h-5 text-gray-400 mr-2" />
                <span className="font-semibold text-white">latest-news</span>
              </div>
              <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto h-full">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-medium text-sm">{item.title}</h4>
                  <span className="text-xs text-gray-400 ml-2">{item.time}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{item.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-400">{item.source}</span>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Auto-refresh indicator */}
            <div className="text-center py-2">
              <span className="text-xs text-gray-400">🔄 Auto-refreshing every 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 4: Real-time Collaboration UI
function CollaborationUI() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="h-96 flex flex-col">
        {/* Voice Channel Header */}
        <div className="p-4 border-b border-gray-700 bg-green-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Volume2 className="w-5 h-5 text-white mr-2" />
              <span className="font-semibold text-white">Study Room 1</span>
              <span className="ml-2 text-green-100 text-sm">• 4 connected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-white cursor-pointer" />
              <Settings className="w-4 h-4 text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* User 1 - Screen Share */}
            <div className="bg-gray-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <ScreenShare className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Alex&apos;s Screen</p>
                  <p className="text-xs text-gray-300">VS Code - algorithm.py</p>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">Alex (You)</span>
              </div>
            </div>

            {/* User 2 */}
            <div className="bg-gray-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">Sarah</span>
              </div>
              <div className="absolute top-2 right-2">
                <Mic className="w-4 h-4 text-green-400" />
              </div>
            </div>

            {/* User 3 */}
            <div className="bg-gray-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">Mike</span>
              </div>
              <div className="absolute top-2 right-2">
                <MicOff className="w-4 h-4 text-red-400" />
              </div>
            </div>

            {/* User 4 */}
            <div className="bg-gray-900 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">Jordan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="p-4 border-t border-gray-700 bg-gray-700">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full ${
                isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-500'
              } transition-colors`}
            >
              {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
            </button>

            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-3 rounded-full ${
                isVideoOff ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-500'
              } transition-colors`}
            >
              {isVideoOff ? <VideoOff className="w-5 h-5 text-white" /> : <VideoIcon className="w-5 h-5 text-white" />}
            </button>

            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className={`p-3 rounded-full ${
                isScreenSharing ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-500'
              } transition-colors`}
            >
              <ScreenShare className="w-5 h-5 text-white" />
            </button>

            <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DemoSection() {
  const uiComponents = [
    <CreateJoinRoomsUI key={0} />,
    <ShareResourcesUI key={1} />,
    <TechNewsUI key={2} />,
    <CollaborationUI key={3} />
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See It{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From setup to collaboration, here&apos;s how BrainLink transforms your academic workflow.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-purple-400 font-semibold text-lg">Step {index + 1}</div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{step.title}</h3>

                <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 border border-gray-700">
                    {uiComponents[index]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}