import React from 'react';

export default function HomeProfile() {
    return (
        <div className="container-card">
            <div className="mt-2">
                <div className="relative w-36 h-36 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 shadow-[0_0_30px_rgba(96,165,250,0.6)]"></div>
                    <img src="/images/sacchio.jpg" width="144" height="144" fetchPriority="high" loading="eager" decoding="async" className="relative w-36 h-36 object-cover object-center rounded-full border-[4px] border-white shadow-xl hover:scale-105 transition-transform duration-300" alt="SACCHIO.COM" />
                </div>
                <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.2] mt-4 mb-4 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-sm">SACCHIO.COM</h1>
                
                <p className="mb-6 text-sm md:text-base">
                    <a href="https://www.youtube.com/@Sacchio" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-400 focus:rounded-sm">Youtube</a> | 
                    <a href="https://www.instagram.com/sacchio_a/" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-400 focus:rounded-sm">Instagram</a> | 
                    <a href="https://x.com/sacchio_a" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-400 focus:rounded-sm">Twitter</a> | 
                    <a href="https://www.linkedin.com/in/sacchio/" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-400 focus:rounded-sm">Linkedin</a>
                </p>

                <div className="flex flex-col gap-4 mb-8">
                    <a className="btn btn-sacchio" href="https://sacchio.com/" rel="noopener" role="button">Sacchio</a>
                    <a className="btn btn-paradigma" href="https://sacchio.com/paradigma-kehidupan" rel="noopener" role="button">Paradigma Kehidupan</a>
                    <a className="btn btn-heylink" href="https://heylink.me/sacchio" target="_blank" rel="nofollow" role="button">Heylink</a>
                    <a className="btn btn-linktree" href="https://linktr.ee/sacchio" target="_blank" rel="nofollow" role="button">Linktree</a>
                    <a className="btn btn-carrd" href="https://sacchio.carrd.co/" target="_blank" rel="nofollow" role="button">Carrd</a>
                    <a className="btn btn-litlink" href="https://lit.link/en/sacchio" target="_blank" rel="nofollow" role="button">Lit.link</a>
                </div>
            </div>

            <strong>
                <h2 className="inline-block text-lg font-bold px-4 py-3 border-[3px] border-white/80 rounded-xl bg-headbg text-white mb-8 shadow-md hover:scale-105 transition-transform duration-300">
                    Sacchio Official Website
                </h2>
            </strong>
            
            <p className="badan-question">
                Hello,
                <br/><br/>
                My name is <b>Sacchio Alfonso Agustian</b>.
                <br/><br/>
                Welcome to my website.
                <br/><br/>
                You can call me <b>Sacchio</b> (also known as Sachio), or by other names such as Chio, Sacchi, Alfonso, or Agustian.
            </p>
        </div>
    );
}
