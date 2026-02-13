import React, { useState } from 'react';
import { Star, Play, CheckCircle2 } from 'lucide-react';
import VideoModal from '../ui/VideoModal';
import { TESTIMONIALS } from '../../constants/data';
import {motion} from 'framer-motion';
/**
 * Testimonials - Reviews and testimonials carousel
 */
const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS];

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section id="reviews" className="py-24 px-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-center text-4xl font-serif">
          Real Stories,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-500">
            Real Glow
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden group">
        <motion.div
          className="flex gap-6 md:gap-8 px-6 items-stretch"
          animate={{ x: "-50%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "max-content" }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[85vw] md:w-[350px] shrink-0 flex"
            >
              {item.type === "video" ? (
                <div
                  className="relative aspect-[9/16] bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer w-full"
                  onClick={() => setSelectedVideo(item.videoUrl)}
                >
                  <img
                    src={item.image}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt="Review"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <Play className="text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-serif text-lg">
                      {item.quote}
                    </p>
                    <p className="text-yellow-300 text-sm">
                      – {item.author}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-xl flex flex-col justify-between w-full aspect-auto md:aspect-auto relative">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            size={18}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm opacity-90">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-gray-700 font-medium leading-loose text-lg font-serif">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 border border-gray-200">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-bold text-gray-600 font-serif">
                          {getInitials(item.author)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 font-serif">
                        {item.author}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2
                          size={12}
                          className="text-green-500/80"
                        />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <VideoModal
        videoId={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

export default Testimonials;

