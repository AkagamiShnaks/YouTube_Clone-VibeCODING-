"use client";

import { 
  Home, 
  Compass, 
  PlaySquare, 
  Clock, 
  ThumbsUp, 
  Download, 
  User,
  Music,
  GamepadIcon,
  Newspaper,
  Trophy,
  Settings,
  HelpCircle,
  Flag
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore" },
  { icon: PlaySquare, label: "Subscriptions" },
];

const libraryItems = [
  { icon: PlaySquare, label: "Your videos" },
  { icon: Clock, label: "Watch later" },
  { icon: ThumbsUp, label: "Liked videos" },
  { icon: Download, label: "Downloads" },
];

const exploreItems = [
  { icon: Music, label: "Music" },
  { icon: GamepadIcon, label: "Gaming" },
  { icon: Newspaper, label: "News" },
  { icon: Trophy, label: "Sports" },
];

const subscriptions = [
  { name: "Tech Channel", avatar: "TC" },
  { name: "Music World", avatar: "MW" },
  { name: "Gaming Hub", avatar: "GH" },
  { name: "News Today", avatar: "NT" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-full overflow-y-auto border-r border-gray-200">
      <div className="p-4 space-y-6">
        {/* Main navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${
                item.active ? "bg-gray-100" : ""
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <hr className="border-gray-200" />

        {/* Library */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Library</h3>
          <nav className="space-y-2">
            {libraryItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <hr className="border-gray-200" />

        {/* Explore */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Explore</h3>
          <nav className="space-y-2">
            {exploreItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <hr className="border-gray-200" />

        {/* Subscriptions */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Subscriptions</h3>
          <nav className="space-y-2">
            {subscriptions.map((subscription) => (
              <button
                key={subscription.name}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {subscription.avatar}
                </div>
                <span className="text-sm">{subscription.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <hr className="border-gray-200" />

        {/* Settings */}
        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Settings size={20} />
            <span className="text-sm">Settings</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            <HelpCircle size={20} />
            <span className="text-sm">Help</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            <Flag size={20} />
            <span className="text-sm">Send feedback</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
