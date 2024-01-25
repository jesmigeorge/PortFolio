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
          <img src={react} className='w-20 h-20 rounded-lg mb-2' />
          <img src={tailwind} className='w-20 h-20 rounded-lg mb-2' />
          <img src={bootstrap} className='w-20 h-20 rounded-lg mb-2' />
          <img src={html} className='w-20 h-20 rounded-lg mb-2' />
          <img src={css} className='w-20 h-20 rounded-lg mb-2' />
        </div>
        <h2 className='text-2xl font-bold pt-3 m-3 text-black text-center'>Backend</h2>
        <div className='w-full max-w-[650px] flex flex-row flex-wrap mt-3 justify-between m-auto'>
          <img src={python} className='w-20 h-20 rounded-lg mb-2' />
          <img src={node} className='w-20 h-20 rounded-lg mb-2' />
          <img src={ts} className='w-20 h-20 rounded-lg mb-2' />
          <img src={sql} className='w-20 h-20 rounded-lg mb-2' />
          <img src={js} className='w-20 h-20 rounded-lg mb-2' />
          <img src={flask} className='w-20 h-20 rounded-lg mb-2' />
        </div>
      </div>
    </div>
    
  )
}

