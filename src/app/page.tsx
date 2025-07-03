import CategoryTabs from "@/components/CategoryTabs";
import VideoGrid from "@/components/VideoGrid";
import { mockVideos } from "@/data/mockVideos";

export default function Home() {
  return (
    <div className="p-6">
      <CategoryTabs />
      <VideoGrid videos={mockVideos} />
    </div>
  );
}
