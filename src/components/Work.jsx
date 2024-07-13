import React from 'react'
import WorkCard from './WorkCard';
import "../assets/fonts/fonts.css";
import "../assets/styles/work.css";
import gdscImg from "../assets/images/gdsc-bg.jpg"
import gssocImg from "../assets/images/gssoc.png"

const myWork = [
    {
        image: gdscImg,
        title: "Google Developer Student Club",
        subtitle: "• Web Development Co-Lead",
        when: "Aug 2023 - April 2024"
    },
    {
        image: gssocImg,
        title: "GirlScript Summer of Code '24",
        subtitle: "• Contributor",
        when: "2024"
    }
]

function Work() {
  return (
    <div className='work-main'>
        <div className='workCardContainer' id='work-cards'>
            <h1 className='myWorkHeading'>My Work</h1>

            <div className="workCardsSection">
                {
                    myWork.map((work, index) => (
                        <WorkCard
                            key={index}
                            image={work.image}
                            title={work.title}
                            subtitle={work.subtitle}
                            when={work.when}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Work