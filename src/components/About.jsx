import React from 'react'
import "../assets/styles/about.css"

const myTech = ["C/C++", "ReactJS", "Raspberry PI", "Arduino", "Git/GitHub", "NodeJS"]

function About() {
  return (
    <div className='about-main'>
        <div className="aboutContainer">
            <h1 className='aboutHeading'>ABOUT ME</h1>

            <div className="aboutSection">
                <p className="aboutPara">
                    Hey there, <br />
                    I am Atharv Kasar. I'm currently working on Full stack Web Development and have interests in other technologies too.
                </p>
                <p className="aboutPara">
                    I like to solve problems and develop innovative solutions for them, also i like to contribute to other Open-Source projects as well. I have participated in many events and competitions such as SIH, and various other Hackathons, Design competitions.
                </p>

                <p id='contactText'>Contact me at <a href="mailto:atharvk752@gmail.com" id='emailText'>atharvk752@gmail.com</a></p>


                <div className="educationSub-title">
                    <div className="straightLine"></div>
                    <h6>EDUCATION</h6>
                    <div className="straightLine"></div>
                </div>

                <div className="educationData">
                    <div className="eduDetail">
                        <h2><span>•</span>Higher secondary education</h2>
                        <p>- Bytco College Nashik, Maharashtra</p>
                    </div>

                    <div className="eduDetail">
                        <h2><span>•</span>BE - Artificial Intelligence & Data Science</h2>
                        <p>- MET-BKC Adgaon, Nashik</p>
                        <p>2022 - 2026</p>
                    </div>
                </div>

                <div className="technologies">
                    <h3>Technologies I've worked with</h3>
                    <div className="technologiesSection">
                        {
                            myTech.map((technology, index) => (
                                <span key={index} className='technologyItem'>•{technology}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About