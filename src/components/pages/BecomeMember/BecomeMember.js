import React from 'react';
import './BecomeMember.css';
import become from '../../../assets/img/become.jpeg';

function BecomeMember() {
    const becomeMember = [
        {
            title: "Certificates and Recognitions",
            desc: "Earn certificates and badges to showcase your expertise and accomplishments",
        },
        {
            title: "Access to Premium Tools and Resources",
            desc: "Gain access to premium tools, templates, and resources to accelerate your learning and productivity",
        },
        {
            title: "Special Discounts and Offers",
            desc: "Receive exclusive discounts on our courses, events, and partner products.",
        },
    ];

    return (
        <div className='container'>
            <div className='become-member-title'>
                <h2 className='section_title'>Why Become a Member</h2>
            </div>

            <div className='member-wrapper'>
                <div className='image-wrapper'>
                    <img src={become} alt='Become a Member' className='member-image' />
                </div>

                <div className='member-content'>
                    {becomeMember.map((member, index) => (
                        <div className='member-item' key={index}>
                            <h4>{member.title}</h4>
                            <p>{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='join-btn'>
            <button >Join</button>
            </div>
            
        </div>
        
    );
}

export default BecomeMember;
