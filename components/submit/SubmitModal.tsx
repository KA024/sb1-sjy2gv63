import { useState, FormEvent } from 'react';
import { X, Upload } from 'lucide-react';
import { useSubmitPost } from '../../hooks/useSubmitPost';
import { MediaUpload } from './MediaUpload';
import { MediaPreview } from './MediaPreview';

export function SubmitModal() {
  const { isOpen, closeSubmitPost } = useSubmitPost();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleImageSelect = (files: File[]) => {
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    setImages(prev => [...prev, ...files]);
  };

  const handleVideoSelect = (file: File) => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };
  const removeImage = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);
    setImages(prev => prev.filter((_: File, i: number) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const removeVideo = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
    }
  };

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      // Use the images state in your submission logic
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });
      // TODO: Add your API call here
    }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeSubmitPost}
      />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl rounded-xl shadow-xl">
          <button
            onClick={closeSubmitPost}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create Post</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 transition-colors"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 transition-colors"
                  placeholder="Enter post description"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Media
                </label>
                <MediaUpload
                  onImageSelect={handleImageSelect}
                  onVideoSelect={handleVideoSelect}
                />
                <div className="mt-4">
                  <MediaPreview
                    images={previewUrls}
                    video={videoUrl}
                    onRemoveImage={removeImage}
                    onRemoveVideo={removeVideo}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeSubmitPost}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Submit Post</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
