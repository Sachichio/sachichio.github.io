import React, { useRef } from 'react';

export default function VideoSlider({ videos }) {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (!videos || videos.length === 0) return null;

    return (
        <div className="mt-12 w-full max-w-4xl mx-auto text-left pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 drop-shadow-md bg-black/30 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm border border-white/10 ml-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.762-1.766C18.265 4 12 4 12 4s-6.264 0-7.818.42a2.506 2.506 0 0 0-1.766 1.766C2 7.74 2 12 2 12s0 4.262.418 5.814a2.506 2.506 0 0 0 1.766 1.766C5.735 20 12 20 12 20s6.265 0 7.822-.42a2.506 2.506 0 0 0 1.762-1.766C22 16.262 22 12 22 12s0-4.26-.418-5.814zM9.995 15.348V8.65L15.65 12l-5.655 3.348z"/></svg>
                    Video Terbaru
                </h3>
                
                <div className="flex items-center gap-2 mr-2">
                    <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white backdrop-blur-sm shadow-md transition-all outline-none focus:ring-2 focus:ring-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white backdrop-blur-sm shadow-md transition-all outline-none focus:ring-2 focus:ring-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            
            <div className="relative w-full overflow-hidden group">
                <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-2 hide-scrollbar scroll-smooth">
                    {videos.map((video, index) => (
                        <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="snap-start shrink-0 w-64 md:w-[260px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300 block border-2 border-transparent hover:border-red-500">
                            <div className="relative w-full aspect-video bg-gray-200">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-90 hover:scale-100 transition-transform">
                                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-800 text-[15px] leading-tight line-clamp-2" title={video.title}>{video.title}</h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
            <div className="mt-6 text-center">
                <a href="https://www.youtube.com/@ParadigmaKehidupan/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full shadow-lg transition-colors hover:shadow-xl">
                    Lihat video lainnya di YouTube
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            </div>
        </div>
    );
}
