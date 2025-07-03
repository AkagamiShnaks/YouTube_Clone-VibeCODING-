import { formatDistanceToNow } from "date-fns";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    channelAvatar: string;
    views: number;
    uploadedAt: Date;
    duration: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    } else {
      return `${views} views`;
    }
  };

  return (
    <Link href={`/watch?v=${video.id}`} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer block">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex space-x-3">
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-2 mb-1">
              {video.title}
            </h3>
            <p className="text-gray-600 text-xs mb-1">{video.channel}</p>
            <div className="flex items-center text-gray-600 text-xs space-x-1">
              <span>{formatViews(video.views)}</span>
              <span>•</span>
              <span>{formatDistanceToNow(video.uploadedAt, { addSuffix: true })}</span>
            </div>
          </div>
          <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
}
