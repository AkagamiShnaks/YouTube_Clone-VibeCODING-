"use client";

import { useState } from "react";

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Entertainment",
  "Education",
  "Science & Technology",
  "Cooking",
  "Travel",
  "Fashion",
  "Art",
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
