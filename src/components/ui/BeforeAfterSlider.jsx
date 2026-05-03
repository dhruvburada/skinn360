import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

/**
 * BeforeAfterSlider - Interactive before/after comparison slider
 * @param {boolean} [loadImages=true] — when false, skips image requests until visible (carousel perf).
 * @param {'high'|'low'|'auto'} [fetchPriority='auto'] — hint for the first paint of this slide.
 */
const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  title,
  sessions,
  description,
  loadImages = true,
  fetchPriority = 'auto',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesCommitted, setImagesCommitted] = useState(loadImages);
  const containerRef = useRef(null);

  useEffect(() => {
    if (loadImages) setImagesCommitted(true);
  }, [loadImages]);

  const showImages = imagesCommitted;

  const handleMove = (event) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    const relativeX = clientX - containerRect.left;
    const containerWidth = containerRect.width;

    const position = Math.min(Math.max((relativeX / containerWidth) * 100, 0), 100);
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMove(e);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden cursor-ew-resize select-none shadow-xl"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onClick={handleMove}
      >
        {/* Before Image (Background) */}
        {showImages ? (
          <img
            src={beforeImage}
            alt={`${title} — before`}
            decoding="async"
            fetchPriority={fetchPriority}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" aria-hidden />
        )}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </div>

        {/* After Image (Foreground - Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          {showImages ? (
            <img
              src={afterImage}
              alt={`${title} — after`}
              decoding="async"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-gray-100" aria-hidden />
          )}
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            After
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-3 bg-gray-400" />
              <div className="w-0.5 h-3 bg-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-serif text-gray-800">{title}</h3>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-light">
          <Clock size={14} className="text-gray-300" />
          <span>{sessions}</span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

