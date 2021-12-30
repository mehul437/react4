import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='main'>
            <ul>
                <Link to='/home' ><li>Home</li></Link>
                <Link to='/student'><li>Student</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            
        </div>
    )
}
