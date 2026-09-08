import React from 'react';

export default function NotFound() {
    return (
        <div className="container-card !mt-[60px] !py-[50px]">
            <div className="flex flex-col items-center">
                <img src="/images/sacchio.jpg" className="w-[100px] h-[100px] object-cover object-center rounded-full mb-5 border-4 border-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]" alt="SACCHIO.COM" />
                <h1 className="text-[100px] font-extrabold leading-none text-blue-600 m-0">404</h1>
                <h2 className="mt-2.5 font-bold text-gray-800 text-[32px]">Oops! Tersesat?</h2>
                
                <p className="text-gray-600 text-[18px] mb-10 leading-[1.6]">
                    Maaf, halaman yang Anda cari tidak ada atau mungkin sudah dipindahkan.<br/>
                    Jangan khawatir, mari kita kembali ke jalan yang benar!
                </p>
                
                <a className="btn btn-sacchio !w-auto !px-10 !rounded-full !text-base tracking-wide" href="/" rel="noopener" role="button">Kembali ke Beranda</a>
            </div>
        </div>
    );
}
