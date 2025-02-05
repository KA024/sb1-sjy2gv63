import { useVideo } from './useVideo';
import { VideoControls } from './VideoControls';

interface VideoPlayerProps {
  src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  const {
    videoRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    handleProgressChange,
    handleVolumeChange,
    toggleMute,
  } = useVideo();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full"
        />
      </div>

      <VideoControls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        isMuted={isMuted}
        onPlayPause={togglePlay}
        onProgressChange={handleProgressChange}
        onVolumeChange={handleVolumeChange}
        onMuteToggle={toggleMute}
      />
    </div>
  );
}