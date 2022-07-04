import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
// import earthVideo from '../../public/assets/earth.mp4'

export default function Video() {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={"./assets/earth.mp4"} type='video/mp4' />
    </video>
    <div className='content'>
        <h1>Solar Earth</h1>
        <p>Let's save the planet while saving money.</p>
        <div>
            <Link to='article' className='btn'>Article</Link>
            <Link to='/form' className='btn btn-light'>Form</Link>
        </div>
    </div>
</div>
  )
}
