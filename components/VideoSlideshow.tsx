'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, AlertCircle } from 'lucide-react';

interface Video {
  id: string;
  type: 'youtube' | 'vimeo' | 'mp4' | 'webm' | 'image';
  url: string;
  title: string;
  thumbnailUrl?: string;
}

export function VideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos: Video[] = [
    {
      id: 'video-1',
      type: 'mp4',
      url: '/videos/merged_video.mp4',
      title: 'Bella Healthcare Premium Services',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPlaying, videos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const renderVideo = () => {
    const video = videos[currentIndex];

    switch (video.type) {
      case 'youtube':
        return (
          <iframe
            src={`https://www.youtube.com/embed/${video.url}?autoplay=1&mute=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
            className="w-full h-full border-0"
          />
        );
      case 'vimeo':
        return (
          <iframe
            src={`https://player.vimeo.com/video/${video.url}?autoplay=1&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.title}
            className="w-full h-full border-0"
          />
        );
      case 'mp4':
      case 'webm':
        return (
          <video
            autoPlay
            loop
            controls
            className="w-full h-full object-cover"
          >
            <source src={video.url} type={`video/${video.type}`} />
            Your browser does not support the video tag.
          </video>
        );
      case 'image':
      default:
        return (
          <img
            src={video.url}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        );
    }
  };

  return (
    <div className="relative w-full h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-gray-900 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {renderVideo()}
        </motion.div>
      </AnimatePresence>

      {/* Video Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <p className="text-white font-bold text-lg">{videos[currentIndex].title}</p>
        <p className="text-white/60 text-sm">Media {currentIndex + 1} of {videos.length}</p>
      </div>

      {/* Info Banner - Guide for Adding Videos */}
      <div className="absolute top-4 left-4 bg-bella-sky/20 backdrop-blur-md border border-bella-sky/30 p-3 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity max-w-xs">
        <div className="flex gap-2">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <p>
            To add videos: <br/>
            • YouTube: Set type to 'youtube' and use video ID<br/>
            • Vimeo: Set type to 'vimeo' and use video ID<br/>
            • MP4/WebM: Upload to /public/videos/
          </p>
        </div>
      </div>

      {/* Controls */}
      {videos.length > 1 && (
        <>
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} className="text-white" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next video"
          >
            <ChevronRight size={24} className="text-white" />
          </motion.button>

          {/* Play/Pause Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={20} className="text-white" />
            ) : (
              <Play size={20} className="text-white" />
            )}
          </motion.button>

          {/* Dot Indicators */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            {videos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                  backgroundColor: index === currentIndex ? '#FF8C42' : 'rgba(255, 255, 255, 0.4)',
                }}
                className="w-2 h-2 rounded-full transition-all"
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
