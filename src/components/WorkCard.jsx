import React from 'react'
import "../assets/styles/workCard.css"

function WorkCard({image, title, subtitle, when}) {
  return (
    <div className='work-card' style={{backgroundImage: `url(${image})`}}>
        <div className="workDetails">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>

        <div className="whenDetails">
            <p>{when}</p>
        </div>
    </div>
  )
}

export default WorkCard