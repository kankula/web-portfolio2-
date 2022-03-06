import React from 'react'
import './Skills.css'
import { skills } from '../components/skillsData'
export const Skills = (state) => {
  return (
    <div id='skills' className={state === 1 ? "skills active-c" : "skills"}>
            <div className='max-width'>
                <div className='box'>
                    <h1>My Skill</h1>
                    <div className='box-content'>
                        {skills.map(skill => <div key={skill.id} className='box-item'>
                            <i className={skill.icon}></i>
                            <div className='skillName'>{skill.title}</div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
  )
}
