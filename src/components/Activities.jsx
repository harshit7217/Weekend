import React from 'react';
import ResortImage from './../assets/resort.jpg';
import ShipImage from './../assets/boat.jpg';
import DiveImage from './../assets/diver.jpg'

function Gallery() {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4 '>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x[-50] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img
                className='w-[100vw] h-[30vh] object-cover relative border-4 border-white shadow-lg'
                src={ResortImage} alt="/" />
            </div>
            <div className='relative p-4 '>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x[-50] translate-y-[-50%] text-white text-2xl font-bold'>Boats</h3>
                <img
                className='w-[100vw] h-[30vh] object-cover relative border-4 border-white shadow-lg' 
                src={ShipImage} alt="/" />
            </div>
            <div className='relative p-4 '>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x[-50] translate-y-[-50%] text-white text-2xl font-bold'>Diving</h3>
                <img
                className='w-[100vw] h-[30vh] object-cover relative border-4 border-white shadow-lg'
                src={DiveImage} alt="/" />
            </div>
            
        </div>
    )
}

export default Gallery;