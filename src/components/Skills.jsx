import React from 'react'
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png"
import bootstrap from "../assets/bootstrap.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import python from "../assets/python.png"
import node from "../assets/NodeJs.png"
import ts from "../assets/typescript.png"
import sql from "../assets/mysql.png"
import js from "../assets/javascript.png"
import flask from "../assets/flask.png"

export default function Skills() {
  
  return (
    <div id='skills' className='bg-gray-300'>
        <div id='skills' className='sections'>
        <h1 className='section-header'>Skills</h1>
        <h2 className='text-2xl font-bold pt-3 m-3 text-black text-center'>Frontend</h2>
        <div className='w-full max-w-[650px] flex flex-row flex-wrap mt-3 justify-between m-auto'>
          <div className='flex flex-col'>
            <img src={react} className='w-20 h-20 rounded-lg mb-2' />
            <span className='flex justify-center font-semibold'>React</span>
          </div>
          <div  className='flex flex-col'>
            <img src={tailwind} className='w-20 h-20 rounded-lg mb-2' />
            <span className='flex justify-center font-semibold'>Tailwind Css</span>
          </div>
          <div className='flex flex-col'>
            <img src={bootstrap} className='w-20 h-20 rounded-lg mb-2' />
            <span className='flex justify-center font-semibold'>Bootstrap</span>
          </div>
          <div className='flex flex-col'>
              <img src={html} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>Html</span>
          </div>
          <div className='flex flex-col'>
            <img src={css} className='w-20 h-20 rounded-lg mb-2' />
            <span className='flex justify-center font-semibold'>Css</span>
          </div>
        </div>
        <h2 className='text-2xl font-bold pt-3 m-4 text-black text-center'>Backend</h2>
        <div className='w-full max-w-[650px] flex flex-row flex-wrap mt-3 justify-between m-auto'>
          <div className='flex flex-col'>
              <img src={python} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>Python</span>
          </div>
          <div className='flex flex-col'>
              <img src={node} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>NodeJs</span>
          </div>
          <div className='flex flex-col'>
              <img src={ts} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>TypeScript</span>
          </div>
          <div className='flex flex-col'>
              <img src={sql} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>MySql</span>
          </div>
          <div className='flex flex-col'>
              <img src={js} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>Javascript</span>
          </div>
          <div>
              <img src={flask} className='w-20 h-20 rounded-lg mb-2' />
              <span className='flex justify-center font-semibold'>Flask</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

