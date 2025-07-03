# YouTube Clone - Next.js 14 🚀

A modern YouTube clone built with Next.js 14, TypeScript, and Tailwind CSS.

**🌟 Live Demo**: Deployed on Vercel - [View Live Site](https://github.com/AkagamiShnaks/YouTube_Clone-VibeCODING-)

**📅 Last Updated**: January 3, 2025 | **🔧 Status**: Production Ready

## Features

- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean and intuitive interface similar to YouTube
- 🎥 **Video Grid** - Display videos in a responsive grid layout
- 📂 **Category Filtering** - Filter videos by categories
- 👤 **Sidebar Navigation** - Complete sidebar with navigation options
- 🔍 **Search Functionality** - Search bar in the navigation
- 🎬 **Video Player Page** - Dedicated page for watching videos
- 💬 **Comments Section** - Interactive comments with likes/dislikes
- 📱 **Subscription Management** - Subscribe to channels
- 🎯 **Video Recommendations** - Suggested videos sidebar

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Development**: ESLint, PostCSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar and sidebar
│   ├── page.tsx            # Homepage with video grid
│   ├── watch/
│   │   └── page.tsx        # Video player page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Left sidebar navigation
│   ├── VideoCard.tsx       # Individual video card component
│   ├── VideoGrid.tsx       # Grid layout for videos
│   └── CategoryTabs.tsx    # Category filter tabs
└── data/
    └── mockVideos.ts       # Mock video data
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Homepage (/)** - Video grid with category filters
- **Watch Page (/watch)** - Video player with comments and suggestions

## Components Overview

### Navbar
- YouTube logo and branding
- Search functionality
- User actions (upload, notifications, profile)

### Sidebar
- Home, Explore, Subscriptions navigation
- Library section (your videos, watch later, liked videos)
- Explore categories (Music, Gaming, News, etc.)
- Subscriptions list
- Settings and help

### VideoCard
- Video thumbnail with duration overlay
- Video title, channel name, and avatar
- View count and upload date
- More options menu

## Customization

### Adding New Videos
Edit `src/data/mockVideos.ts` to add or modify video data.

### Styling
The project uses Tailwind CSS. Modify classes in components or extend the theme in `tailwind.config.js`.

## Features to Add

- [ ] User authentication
- [ ] Real video upload and streaming
- [ ] Search functionality
- [ ] Video playback with controls
- [ ] Channel pages
- [ ] Playlist creation
- [ ] Real-time comments
- [ ] Video recommendations algorithm
- [ ] Dark mode

## License

This project is for educational purposes. YouTube is a trademark of Google LLC.
