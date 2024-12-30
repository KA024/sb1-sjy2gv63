import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  url: string;
  onRemove: () => void;
}

export function ImagePreview({ url, onRemove }: ImagePreviewProps) {
  return (
    <div className="relative group">
      <img
        src={url}
        alt="Preview"
        className="w-full h-32 object-cover rounded-lg"
      />
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}