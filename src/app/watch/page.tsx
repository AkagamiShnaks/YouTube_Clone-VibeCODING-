"use client";

import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from "lucide-react";
import { mockVideos } from "@/data/mockVideos";
import Image from "next/image";

export default function WatchPage() {
  // In a real app, you'd get this from URL params
  const video = mockVideos[0];
  const suggestedVideos = mockVideos.slice(1, 6);

  return (
    <div className="flex gap-6 p-6">
      {/* Main video section */}
      <div className="flex-1 max-w-4xl">
        {/* Video player */}
        <div className="bg-black rounded-lg aspect-video mb-4">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
              <p className="text-lg">Video Player Placeholder</p>
              <p className="text-sm opacity-75">Click to play video</p>
            </div>
          </div>
        </div>

        {/* Video info */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">{video.title}</h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={video.channelAvatar}
                alt={video.channel}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{video.channel}</p>
                <p className="text-sm text-gray-600">1.2M subscribers</p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex bg-gray-100 rounded-full">
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-l-full">
                  <ThumbsUp size={20} />
                  <span className="text-sm">1.2K</span>
                </button>
                <div className="w-px bg-gray-300"></div>
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-r-full">
                  <ThumbsDown size={20} />
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Share size={20} />
                <span className="text-sm">Share</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Download size={20} />
                <span className="text-sm">Download</span>
              </button>
              
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <span>{video.views.toLocaleString()} views</span>
              <span>2 days ago</span>
            </div>
            <p className="text-sm">
              In this comprehensive tutorial, we&apos;ll build a modern web application using Next.js 14. 
              You&apos;ll learn about the new App Router, Server Components, and how to integrate with modern tools.
              
              <br /><br />
              
              📚 What you&apos;ll learn:
              <br />
              • Next.js 14 App Router
              <br />
              • Server Components vs Client Components
              <br />
              • Data fetching strategies
              <br />
              • Deployment best practices
              <br /><br />
              
              🔗 Resources:
              <br />
              GitHub Repo: https://github.com/example/nextjs-tutorial
              <br />
              Documentation: https://nextjs.org/docs
            </p>
          </div>

          {/* Comments section */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">128 Comments</h3>
            <div className="space-y-4">
              {/* Comment input */}
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  U
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                </div>
              </div>

              {/* Sample comments */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    J
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">@john_dev</span>
                      <span className="text-xs text-gray-600">2 hours ago</span>
                    </div>
                    <p className="text-sm">Great tutorial! Really helped me understand the new App Router. Thanks for sharing!</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-black">
                        <ThumbsUp size={12} />
                        <span>24</span>
                      </button>
                      <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-black">
                        <ThumbsDown size={12} />
                      </button>
                      <button className="text-xs text-gray-600 hover:text-black">Reply</button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">@sarah_codes</span>
                      <span className="text-xs text-gray-600">5 hours ago</span>
                    </div>
                    <p className="text-sm">Could you make a follow-up video about deployment strategies? Would love to see more!</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-black">
                        <ThumbsUp size={12} />
                        <span>12</span>
                      </button>
                      <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-black">
                        <ThumbsDown size={12} />
                      </button>
                      <button className="text-xs text-gray-600 hover:text-black">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar with suggested videos */}
      <div className="w-96 space-y-4">
        <h3 className="font-medium">Up next</h3>
        <div className="space-y-3">
          {suggestedVideos.map((suggestedVideo) => (
            <div key={suggestedVideo.id} className="flex space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2">
              <div className="relative flex-shrink-0">
                <Image
                  src={suggestedVideo.thumbnail}
                  alt={suggestedVideo.title}
                  width={160}
                  height={96}
                  className="w-40 h-24 object-cover rounded"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {suggestedVideo.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2 mb-1">
                  {suggestedVideo.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">{suggestedVideo.channel}</p>
                <div className="flex items-center text-xs text-gray-600 space-x-1">
                  <span>{suggestedVideo.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
