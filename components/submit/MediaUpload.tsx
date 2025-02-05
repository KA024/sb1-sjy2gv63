import React from 'react';
import { Image, Video } from 'lucide-react';

interface MediaUploadProps {
  onImageSelect: (files: File[]) => void;
  onVideoSelect: (file: File) => void;
}

export function MediaUpload({ onImageSelect, onVideoSelect }: MediaUploadProps) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    onImageSelect(files);
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onVideoSelect(file);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
        <Image className="w-8 h-8 text-gray-400 mb-2" />
        <span className="text-sm text-gray-500 dark:text-gray-400">Upload images</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
        <Video className="w-8 h-8 text-gray-400 mb-2" />
        <span className="text-sm text-gray-500 dark:text-gray-400">Upload video</span>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="hidden"
        />
      </label>
    </div>
  );
}