import { X } from 'lucide-react';
import { VideoPlayer } from '../video/VideoPlayer';

interface MediaPreviewProps {
  images: string[];
  video: string | null;
  onRemoveImage: (index: number) => void;
  onRemoveVideo: () => void;
}

export function MediaPreview({ images, video, onRemoveImage, onRemoveVideo }: MediaPreviewProps) {
  return (
    <div className="space-y-4">
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((url, index) => (
            <div key={url} className="relative group">
              <img
                src={url}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => onRemoveImage(index)}
                className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {video && (
        <div className="relative">
          <VideoPlayer src={video} />
          <button
            onClick={onRemoveVideo}
            title="Remove video"
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}