import React from 'react'
import './Elucational.css'
export const Elucational = (props) => {
    const { state } = props
    return (
        <div className={state === 3 ? "elucational active-c" : "elucational"}>
            <div className='box'>
                <h3>Suan Sunandha Rajabhat University</h3>
                <p><span>Faculty:</span>Faculty of Science and Technology</p>
                <p><span>Major:</span>Information Technology</p>
                <p><span>GPA:</span>3.34</p>
            </div>
        </div>
    )
}
