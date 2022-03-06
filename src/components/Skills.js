import React from 'react'
import './Skills.css'
import { skills } from '../components/skillsData'
export const Skills = (props) => {
    const {state} = props
  return (
    <div className={state === 2 ? "skills active-c" : "skills"}>
            
                <div className='box'>
                    <div className='box-content'>
                        {skills.map(skill => <div key={skill.id} className='box-item'>
                            <i className={skill.icon}></i>
                            <div className='skillName'>{skill.title}</div>
                        </div>
                        )}
                    </div>
                </div>
        </div>
  )
}
