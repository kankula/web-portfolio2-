import React from 'react'
import ProfilePic from '../images/p1.jpg'
import './Profile.css'

export const Profile = (props) => {
    return (
        <div id='profileS' className='profile-container'>
            <div className='imageProfile'>
                <img src={ProfilePic} className="ProfilePic" />
            </div>
            <div className='profile-content'>
                <p><span>Name:</span>Kantapon Klinkulab</p>
                <p><span>Age:</span>23</p>
                <p><span>Gender:</span>Male</p>
                <p><span>Birthday:</span>November 9, 1998</p>
                <p><span>Address:</span>Bang Khun Si , Bangkok Noi , Bangkok</p>
            </div>
        </div>
    )
}
