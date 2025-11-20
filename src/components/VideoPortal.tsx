// import React, { useEffect, useRef, useState } from "react";
// import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
// import { createPortal } from "react-dom";

// interface VideoPortalProps {
//   isOpen: boolean;
//   onClose?: () => void;
//   videoSrc: string;
//   title?: string;
// }

// /**
//  * Professional video player with complete features:
//  * - Custom controls (play/pause, volume, fullscreen, progress bar)
//  * - Smooth animations and transitions
//  * - Keyboard shortcuts (Space=play/pause, Esc=close, M=mute, F=fullscreen, Arrows=seek)
//  * - Full accessibility (ARIA labels, focus management)
//  * - Click outside to pause; click inside to interact normally
//  * - Auto-hide controls in fullscreen after 3 seconds of inactivity
//  */
// const VideoPortal: React.FC<VideoPortalProps> = ({ isOpen, onClose, videoSrc, title }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const progressRef = useRef<HTMLDivElement | null>(null);
//   const closeButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [volume, setVolume] = useState(1);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);

//   // Lock scroll when modal is open
//   useEffect(() => {
//     if (!isOpen) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [isOpen]);

//   // Focus management
//   useEffect(() => {
//     if (!isOpen) return;
//     const prevActive = document.activeElement as HTMLElement | null;
//     setTimeout(() => closeButtonRef.current?.focus(), 0);
//     return () => {
//       try {
//         prevActive?.focus();
//       } catch (err) {
//         /* ignore */
//       }
//     };
//   }, [isOpen]);

//   // Keyboard shortcuts (use videoRef directly to avoid hook dependency warnings)
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape" || e.key === "Esc") {
//         onClose?.();
//         return;
//       }
//       if ((e.key === " " || e.code === "Space") && videoRef.current) {
//         e.preventDefault();
//         if (videoRef.current.paused) videoRef.current.play(); else videoRef.current.pause();
//       }
//       if ((e.key === "m" || e.key === "M") && videoRef.current) {
//         e.preventDefault();
//         videoRef.current.muted = !videoRef.current.muted;
//         setIsMuted(videoRef.current.muted);
//       }
//       if ((e.key === "f" || e.key === "F")) {
//         e.preventDefault();
//         if (!isFullscreen && document.documentElement.requestFullscreen) {
//           document.documentElement.requestFullscreen();
//           setIsFullscreen(true);
//         } else if (isFullscreen && document.fullscreenElement) {
//           document.exitFullscreen();
//           setIsFullscreen(false);
//         }
//       }
//       if (e.key === "ArrowRight" && videoRef.current) {
//         e.preventDefault();
//         videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, duration || Infinity);
//       }
//       if (e.key === "ArrowLeft" && videoRef.current) {
//         e.preventDefault();
//         videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, onClose, isFullscreen, duration]);

//   // Update progress on video time update
//   useEffect(() => {
//     if (!videoRef.current) return;
//     const video = videoRef.current;

//     const updateProgress = () => {
//       setCurrentTime(video.currentTime);
//     };

//     const updateDuration = () => {
//       setDuration(video.duration);
//     };

//     const updatePlayState = () => {
//       setIsPlaying(!video.paused);
//     };

//     video.addEventListener("timeupdate", updateProgress);
//     video.addEventListener("loadedmetadata", updateDuration);
//     video.addEventListener("play", updatePlayState);
//     video.addEventListener("pause", updatePlayState);

//     return () => {
//       video.removeEventListener("timeupdate", updateProgress);
//       video.removeEventListener("loadedmetadata", updateDuration);
//       video.removeEventListener("play", updatePlayState);
//       video.removeEventListener("pause", updatePlayState);
//     };
//   }, []);

//   // Auto-hide controls in fullscreen
//   useEffect(() => {
//     if (!isFullscreen || !isOpen) return;

//     let hideTimer: NodeJS.Timeout;

//     const showControlsTemp = () => {
//       setShowControls(true);
//       clearTimeout(hideTimer);
//       hideTimer = setTimeout(() => {
//         if (isPlaying) setShowControls(false);
//       }, 3000);
//     };

//     window.addEventListener("mousemove", showControlsTemp);
//     return () => {
//       window.removeEventListener("mousemove", showControlsTemp);
//       clearTimeout(hideTimer);
//     };
//   }, [isFullscreen, isPlaying, isOpen]);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const setVideoVolume = (v: number) => {
//     if (videoRef.current) {
//       videoRef.current.volume = v;
//       setVolume(v);
//       if (v > 0) {
//         videoRef.current.muted = false;
//         setIsMuted(false);
//       }
//     }
//   };

//   const seek = (offset: number) => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + offset));
//     }
//   };

//   const handleProgressClick = (e: React.MouseEvent) => {
//     if (!progressRef.current || !videoRef.current) return;
//     const rect = progressRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const percent = x / rect.width;
//     videoRef.current.currentTime = percent * duration;
//   };

//   const toggleFullscreen = () => {
//     if (!isFullscreen && document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//       setIsFullscreen(true);
//     } else if (isFullscreen && document.fullscreenElement) {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   // Pause video when clicking overlay
//   const handleOverlayClick = (e: React.MouseEvent) => {
//     if (e.target === containerRef.current && videoRef.current) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const handleVideoAreaClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   if (!isOpen) return null;

//   const formatTime = (time: number) => {
//     if (!time || !isFinite(time)) return "0:00";
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

//   return createPortal(
//     <div
//       ref={containerRef}
//       role="dialog"
//       aria-modal="true"
//       aria-label={title ?? "Video Player"}
//       className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//       onClick={handleOverlayClick}
//     >
//       <div
//         className={`relative w-full transition-all duration-300 rounded-xl overflow-hidden shadow-2xl ${
//           isFullscreen ? "max-w-full max-h-full" : "max-w-4xl"
//         }`}
//         onClick={handleVideoAreaClick}
//       >
//         {/* Video Container */}
//         <div className="relative w-full bg-black aspect-video">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             autoPlay
//             muted
//             loop={false}
//             preload="metadata"
//             className="w-full h-full"
//           />

//           {/* Close Button */}
//           <button
//             ref={closeButtonRef}
//             aria-label="Close video"
//             onClick={() => onClose?.()}
//             className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Title */}
//           {title && !isFullscreen && (
//             <div className="absolute top-4 left-4 text-white font-semibold text-sm max-w-xs line-clamp-1">
//               {title}
//             </div>
//           )}

//           {/* Custom Controls */}
//           <div
//             className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 transition-opacity duration-300 ${
//               isFullscreen && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"
//             }`}
//           >
//             {/* Progress Bar */}
//             <div
//               ref={progressRef}
//               onClick={handleProgressClick}
//               className="relative w-full h-1 bg-gray-600 rounded-full cursor-pointer hover:h-2 transition-all mb-3 group"
//             >
//               <div
//                 className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
//                 style={{ width: `${progressPercent}%` }}
//               />
//               <div
//                 className="absolute w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 -translate-y-1.5"
//                 style={{ left: `${progressPercent}%` }}
//               />
//             </div>

//             {/* Controls Row */}
//             <div className="flex items-center justify-between gap-3">
//               {/* Left Controls */}
//               <div className="flex items-center gap-2">
//                 {/* Play/Pause */}
//                 <button
//                   onClick={togglePlay}
//                   aria-label={isPlaying ? "Pause" : "Play"}
//                   className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
//                 >
//                   {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
//                 </button>

//                 {/* Volume */}
//                 <div className="flex items-center gap-2 group">
//                   <button
//                     onClick={toggleMute}
//                     aria-label={isMuted ? "Unmute" : "Mute"}
//                     className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
//                   >
//                     {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//                   </button>
//                   <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.1"
//                     value={isMuted ? 0 : volume}
//                     onChange={(e) => setVideoVolume(Number(e.target.value))}
//                     className="w-0 group-hover:w-24 transition-all h-2 bg-white/30 rounded-lg cursor-pointer"
//                     aria-label="Volume"
//                   />
//                 </div>

//                 {/* Time */}
//                 <div className="text-white text-sm font-mono">
//                   {formatTime(currentTime)} / {formatTime(duration)}
//                 </div>
//               </div>

//               {/* Fullscreen */}
//               <button
//                 onClick={toggleFullscreen}
//                 aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//               </button>
//             </div>

//             {/* Shortcuts Hint */}
//             <div className="text-white/50 text-xs mt-2 flex flex-wrap gap-3">
//               <span>Space: Play/Pause</span>
//               <span>M: Mute</span>
//               <span>F: Fullscreen</span>
//               <span>Arrows: Seek</span>
//               <span>Esc: Close</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default VideoPortal;


import React, { useEffect, useRef, useState, useCallback } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import { createPortal } from "react-dom";

interface VideoPortalProps {
  isOpen: boolean;
  onClose?: () => void;
  videoSrc: string;
  title?: string;
}

const VideoPortal: React.FC<VideoPortalProps> = ({ isOpen, onClose, videoSrc, title }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [buffered, setBuffered] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;
    
    const prevActiveElement = document.activeElement as HTMLElement | null;
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 100);
    
    return () => {
      clearTimeout(timer);
      try { 
        prevActiveElement?.focus(); 
      } catch (e) {
        // Fallback if previous element is no longer in DOM
        document.body.focus();
      }
    };
  }, [isOpen]);

  // Reset state when video source changes
  useEffect(() => {
    if (!isOpen) return;
    
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setHasError(false);
    setErrorMessage("");
    setIsLoading(true);
  }, [videoSrc, isOpen]);

  // Fullscreen detection
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Global drag handlers to prevent stuck dragging state
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!videoRef.current) return;

      switch (e.key) {
        case "Escape":
          if (isFullscreen) {
            toggleFullscreen();
          } else {
            onClose?.();
          }
          break;
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
        case "M":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "ArrowRight":
          e.preventDefault();
          seek(5);
          break;
        case "ArrowLeft":
          e.preventDefault();
          seek(-5);
          break;
        case "ArrowUp":
          e.preventDefault();
          setVideoVolume(Math.min(1, volume + 0.1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setVideoVolume(Math.max(0, volume - 0.1));
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          e.preventDefault();
          const percent = parseInt(e.key) / 10;
          seekTo(percent * duration);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, duration, isFullscreen, volume]);

  // Video event listeners with proper cleanup
  useEffect(() => {
    if (!videoRef.current || !isOpen) return;
    const video = videoRef.current;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      
      switch (video.error?.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          setErrorMessage("Video playback was aborted");
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          setErrorMessage("Network error occurred");
          break;
        case MediaError.MEDIA_ERR_DECODE:
          setErrorMessage("Video format not supported");
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          setErrorMessage("Video source not supported");
          break;
        default:
          setErrorMessage("Failed to load video");
      }
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        setBuffered((bufferedEnd / duration) * 100);
      }
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const events = {
      timeupdate: handleTimeUpdate,
      loadedmetadata: handleLoadedMetadata,
      play: handlePlay,
      pause: handlePause,
      error: handleError,
      waiting: handleWaiting,
      canplay: handleCanPlay,
      progress: handleProgress,
      ended: handleEnded
    };

    Object.entries(events).forEach(([event, handler]) => {
      video.addEventListener(event, handler);
    });

    return () => {
      Object.entries(events).forEach(([event, handler]) => {
        video.removeEventListener(event, handler);
      });
    };
  }, [isOpen, duration]);

  // Auto-hide controls in fullscreen
  useEffect(() => {
    if (!isFullscreen || !isOpen) {
      setShowControls(true);
      return;
    }

    const hideControls = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };

    const resetControlsTimer = () => {
      setShowControls(true);
      clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(hideControls, 3000);
    };

    resetControlsTimer();

    window.addEventListener("mousemove", resetControlsTimer);
    window.addEventListener("mousemove", resetControlsTimer);
    window.addEventListener("touchstart", resetControlsTimer);

    return () => {
      window.removeEventListener("mousemove", resetControlsTimer);
      window.removeEventListener("mousemove", resetControlsTimer);
      window.removeEventListener("touchstart", resetControlsTimer);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, [isFullscreen, isPlaying, isOpen]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    if (video.paused) {
      video.play().catch((error) => {
        console.error("Playback failed:", error);
        setHasError(true);
        setErrorMessage("Playback failed. Please try again.");
      });
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    
    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      setVideoVolume(lastVolume);
    } else {
      setLastVolume(volume);
      video.muted = true;
      setIsMuted(true);
    }
  }, [volume, lastVolume]);

  const setVideoVolume = useCallback((v: number) => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const newVolume = Math.max(0, Math.min(1, v));
    
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume > 0) {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  const seek = useCallback((offset: number) => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + offset));
  }, [duration]);

  const seekTo = useCallback((time: number) => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.currentTime = Math.max(0, Math.min(duration, time));
  }, [duration]);

  const handleProgressClick = useCallback((e: React.MouseEvent) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seekTo(percent * duration);
  }, [duration, seekTo]);

  const handleProgressDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    seekTo(percent * duration);
  }, [duration, seekTo]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      onClose?.();
    }
  }, [onClose]);

  const formatTime = useCallback((time: number) => {
    if (!time || !isFinite(time)) return "0:00";
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Video Player"}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      {/* Screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {isPlaying ? 'Playing' : 'Paused'} at {formatTime(currentTime)}
        {hasError && `Error: ${errorMessage}`}
      </div>

      <div
        className={`relative w-full transition-all duration-300 rounded-xl overflow-hidden shadow-2xl ${
          isFullscreen ? "max-w-full max-h-full" : "max-w-4xl"
        }`}
      >
        {/* Video Container */}
        <div className="relative w-full bg-black aspect-video">
          {hasError ? (
            <div className="flex flex-col items-center justify-center text-white font-semibold h-full p-8 text-center">
              <div className="text-lg mb-2">Failed to load video</div>
              {errorMessage && (
                <div className="text-sm text-gray-300 mb-4">{errorMessage}</div>
              )}
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Reload Page
              </button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted={isMuted}
                loop={false}
                preload="metadata"
                className="w-full h-full"
                playsInline
              />
              
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </>
          )}

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            aria-label="Close video"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          {title && !isFullscreen && (
            <div className="absolute top-4 left-4 text-white font-semibold text-sm max-w-xs line-clamp-1 bg-black/60 px-3 py-1 rounded-lg">
              {title}
            </div>
          )}

          {/* Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 transition-opacity duration-300 ${
              isFullscreen && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onMouseEnter={() => clearTimeout(controlsTimeoutRef.current)}
            onMouseLeave={() => {
              if (isFullscreen && isPlaying) {
                controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2000);
              }
            }}
          >
            {/* Progress Bar */}
            <div
              ref={progressRef}
              className="relative w-full h-2 bg-gray-600 rounded-full cursor-pointer group mb-3"
              onMouseDown={(e) => {
                setIsDragging(true);
                handleProgressClick(e);
              }}
              onMouseMove={(e) => isDragging && handleProgressDrag(e)}
              onTouchStart={(e) => { 
                setIsDragging(true); 
                handleProgressDrag(e); 
              }}
              onTouchMove={handleProgressDrag}
              onClick={handleProgressClick}
              role="slider"
              aria-label="Video progress"
              aria-valuenow={currentTime}
              aria-valuemin={0}
              aria-valuemax={duration}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  seek(5);
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  seek(-5);
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  seekTo(0);
                } else if (e.key === 'End') {
                  e.preventDefault();
                  seekTo(duration);
                }
              }}
            >
              {/* Buffered progress */}
              <div
                className="absolute h-full bg-gray-400 rounded-full transition-all"
                style={{ width: `${buffered}%` }}
              />
              
              {/* Played progress */}
              <div
                className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
              
              {/* Progress thumb */}
              <div
                className="absolute w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity -translate-x-2 -translate-y-1"
                style={{ left: `${progressPercent}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 group/volume">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : 
                     volume > 0.5 ? <Volume2 className="w-5 h-5" /> : 
                     <Volume2 className="w-5 h-5" />}
                  </button>
                  <div className="w-24 opacity-0 group-hover/volume:opacity-100 focus-within:opacity-100 transition-opacity">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVideoVolume(Number(e.target.value))}
                      className="w-full h-2 bg-white/30 rounded-lg cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      aria-label="Volume"
                    />
                  </div>
                </div>

                {/* Time Display */}
                <div className="text-white text-sm font-mono min-w-[100px]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="text-white/50 text-xs mt-2 flex flex-wrap gap-3">
              <span>Space: Play/Pause</span>
              <span>M: Mute</span>
              <span>F: Fullscreen</span>
              <span>Arrows: Seek/Volume</span>
              <span>0-9: Jump to percentage</span>
              <span>Esc: Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoPortal;
