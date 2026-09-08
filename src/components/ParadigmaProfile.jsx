import React from 'react';

export default function ParadigmaProfile() {
    return (
        <div className="container-card">
            <div className="mt-2">
                <div className="relative w-36 h-36 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full opacity-30 shadow-[0_0_30px_rgba(96,165,250,0.5)]"></div>
                    <img src="/images/paradigma-favicon.png" width="144" height="144" fetchPriority="high" loading="eager" decoding="async" className="relative w-36 h-36 object-contain object-center bg-white rounded-full border-[4px] border-white shadow-xl hover:scale-105 transition-transform duration-300" alt="Paradigma Kehidupan" />
                </div>
                <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.2] mt-4 mb-6 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-sm">PARADIGMA KEHIDUPAN</h1>

                <div className="flex flex-col gap-4 mb-8">
                    <a className="btn btn-paradigma" href="https://sacchio.com/paradigma-kehidupan" rel="noopener" role="button">Paradigma Kehidupan</a>
                    <a className="btn btn-youtube" href="https://www.youtube.com/@ParadigmaKehidupan/videos" target="_blank" rel="nofollow" role="button">Youtube</a>
                    <a className="btn btn-instagram" href="https://www.instagram.com/sacchio_a/" target="_blank" rel="nofollow" role="button">Instagram</a>
                </div>
            </div>

            <strong>
                <h2 className="inline-block text-lg font-bold px-4 py-3 border-[3px] border-white/80 rounded-xl bg-headbg text-white mb-8 shadow-md hover:scale-105 transition-transform duration-300">
                    Paradigma Kehidupan Official Website
                </h2>
            </strong>
            
            <p className="badan-question">
                Paradigma Kehidupan adalah sebuah channel yang bertujuan untuk memberikan pelajaran hidup dan sharing pengalaman.<br/><br/>
                Created by <a href="https://sacchio.com/" className="text-blue-400 hover:text-blue-300"><strong>Sacchio</strong></a>
            </p>
        </div>
    );
}
