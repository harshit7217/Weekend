import React from 'react';
import first from './../assets/1.jpg';
import second from './../assets/2.jpg';
import third from './../assets/3.jpg';
import fourth from './../assets/4.jpg';
import fifth from './../assets/5.jpg';

function Gallery() {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover ' src={first} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover ' src={second} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover ' src={third} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover ' src={fourth} alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover ' src={fifth} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Gallery;