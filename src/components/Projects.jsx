import React from 'react'
import ProjectItem from './ProjectItem'
import news from '../assets/news.png'
import leetcode from '../assets/leetcode.png'
import starbucks from '../assets/starbucks.png'
export default function Projects() {
  return (
    <div id='projects'>
        <div className='sections'>
            <h1 className='section-header my-9'>Projects</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={news} title='News App' url='/'/>
                <ProjectItem img={leetcode} title='LeetCode Recommendation' url='https://drive.google.com/file/d/1UBhbx_A_I9FSX-2bWyHUpN2PK4Ghiie7/view?usp=drive_link' />
                <ProjectItem img={starbucks} title='StarBucks Ui Clone' url='https://jesmigeorge.github.io/Starbucks-Clone/'/>
            </div>
        </div>
    </div>
  )
}
