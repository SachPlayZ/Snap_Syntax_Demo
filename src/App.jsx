import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <div className='nav'>
    <a className='nav-link nav-br' href='/'>Angelina Jolie</a>
    <a className='nav-link' href='/'>About</a>
    <a className='nav-link' href='/'>Work</a>
    <a className='nav-link con' href='/'>Connect</a>
    <a className='emal' href='/'>info@yahoo.com</a>
  </div>
  <div className='main'>
    <div className='main-text'>
      <h1>HOLLYWOOD<br/>ACTRESS</h1>
    <div className="side-text">
      <p className='begi'>California MovieWorks<br/>Hollywood</p>
      <p className='endi'>2012-Present</p>
    </div>
    </div>
    <div className='main-img'>
      <img className='img1' src='https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_FMjpg_UX1000_.jpg' alt='Angelina Jolie' />
    </div>
    <div className="p2">
      <p className="greytex rob-med">
        "Experiencing life through lorem ipsum and also through lorem ipsum"
      </p>
      <p className="boldtex rob-med">
        "Working in this industry, I gained something that i probably didn't
        know i wanted"
      </p>
      </div>
      <img
        className="img1"
        src="https://hips.hearstapps.com/hmg-prod/images/angelina-jolie-9356782-2-raw.jpg"
        alt="Angelina Jolie"
      />
    </div>
</>

  )
}

export default App
