import React from 'react'
import './Title.css'
import ReactTypingEffect from 'react-typing-effect'

export const Title = () => {
    return (
        <div id='title' className='title' >
                <div className='box-content'>
                    <div className='box-text'>
                        <div className='text-1'>Hell<span>o</span>,</div>
                        <div className='text-2'>I'<span>m</span> Kantapon Klinkulab</div>
                    </div>
                    <ReactTypingEffect text="Front End Developer" speed={80} className="text-3" />
                </div>
            </div>
    )
}
