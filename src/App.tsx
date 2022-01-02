import React from 'react'
import logo from './img/odigo-logo.svg'

function App() {
  return (
    <header className='header'>
      <div className='wrapper'>
        {/* logo */}
        <div className='header__wrapper'>
          <div className='header__logo'>
            <a href='/' className='header__logo-link'>
              <img src={logo} alt='Discover Amazing places in Japan' />
            </a>
          </div>
          {/* nav */}
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'>
                <a href='=!' className='header__link'>
                  Articles
                </a>
              </li>
              <li className='header__item'>
                <a href='=!' className='header__link'>
                  Locations
                </a>
              </li>
              <li className='header__item'>
                <a href='=!' className='header__link'>
                  Videos
                </a>
              </li>
              <li className='header__item'>
                <a href='=!' className='header__link'>
                  Sign in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default App
