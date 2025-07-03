"use client";

import { Search, Menu, Video, Bell, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <Video size={18} className="text-white" />
            </div>
            <span className="text-xl font-semibold">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 flex">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
