import React from 'react';
import { Upload } from 'lucide-react';

interface VideoUploadProps {
  onFileSelect: (file: File) => void;
}

export function VideoUpload({ onFileSelect }: VideoUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      <Upload className="w-12 h-12 text-gray-400 mb-2" />
      <span className="text-sm text-gray-500 dark:text-gray-400">Click to upload video</span>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
  );
}