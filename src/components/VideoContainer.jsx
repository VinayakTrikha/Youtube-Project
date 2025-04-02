import { useEffect, useState } from "react";
import { videosData, YOUTUBE_API_URL } from "../utils/configs";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_API_URL);
      const videos = await res.json();
      setVideos(videos.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
        >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
