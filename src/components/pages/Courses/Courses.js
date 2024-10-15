import React from 'react'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'
import './Courses.css'


function Courses() {

    const courseData = [{
        title:"AI DEVELOPMENT",
        desc:"Master AI Development",
        image: ai,
    },
    {
        title:"DIGITAL MARKETING",
        desc:"Master Digital Marketing",
        image: dg,
    },
    {
        title:"CYBER SECURITY",
        desc:"Master Cyber Security",
        image: hacker,
    },
    {
        title:"SOFTWARE DEVELOPMENT",
        desc:"Master Software Development",
        image: sd
    }
];
  return (
    <div className='container course-container'>
        <div className='course-top'>
            <h2 className='section_title'>Our Free Courses</h2>
            <p>The Top Trending Free Courses With Free Certificate</p>
            <div className='course-wrapper'>
                {
                    courseData.map((course,index)=>(
                        <div className='course-item' key={index}>

                    <span className='course-icon'>
                        <img src={course.image} alt=''/>
                    </span>
                    <div className='course-content'>
                        <h4>{course.title}</h4>
                        <p>{course.desc}</p>
                    </div>

                </div>

                    ))
                }
                
            </div>
        </div>
      
    </div>
  )
}

export default Courses
