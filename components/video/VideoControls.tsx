import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { formatTime } from '../../utils/timeFormat';

interface VideoControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  onPlayPause: () => void;
  onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMuteToggle: () => void;
}

export function VideoControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  onPlayPause,
  onProgressChange,
  onVolumeChange,
  onMuteToggle,
}: VideoControlsProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[50px]">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={onProgressChange}
          title="Video progress slider"
          className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-500"
        />
        <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[50px]">
          {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlayPause}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Play className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onMuteToggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Volume2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <input
              type="range"
              title="Volume control slider"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={onVolumeChange}
              className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}