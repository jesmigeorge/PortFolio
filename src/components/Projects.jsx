import React from 'react'
import ProjectItem from './ProjectItem'
import news from '../assets/news.png'
import leetcode from '../assets/leetcode.png'
import starbucks from '../assets/starbucks.png'
import eats from '../assets/eat.png'
export default function Projects() {
  return (
    <div id='projects'>
        <div className='sections'>
            <h1 className='section-header my-9'>Projects</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={eats} title='Best Eats App' url='https://best-eats-hotel.netlify.app/'/>
                <ProjectItem img={starbucks} title='StarBucks Ui Clone' url='https://jesmigeorge.github.io/Starbucks-Clone/'/>
                <ProjectItem img={news} title='News App' url='https://github.com/jesmigeorge/News-App'/>
                <ProjectItem img={leetcode} title='LeetCode Recommendation' url='https://github.com/jesmigeorge/Leetcode-Recommendation' />
            </div>
        </div>
    </div>
  )
}
