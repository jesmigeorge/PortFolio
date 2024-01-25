import React from 'react'

export default function ProjectItem({img, title,url}) {
  return (
    <div className='relative flex items-center justify-center w-full shafow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] max-w-[30em]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='mb-5 text-2xl font-extrabold text-black tracking text-center'>
                {title}
            </h3>
            <a href={url} target='_blank'>
                <p className='text-center bg-black text-white p-3 rounded-lg'>Check It Out!</p>
            </a>
        </div>
    </div>
  )
}
