import React from 'react'
import logo from '../img/footer-logo.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer__item'>
          <div className='footer__logo'>
            <img src={logo} alt='footer-logo' className='footer__logo-pic' />
          </div>

          <nav className='footer__nav'>

            <ul className='footer__menu'>
              <li className='footer__menu-item'>
                <h3 className='footer_menu-title'>Company</h3>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  About
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Team
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Careers
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className='footer__menu'>
              <li className='footer__menu-item'>
                <h3 className='footer_menu-title'>Locations</h3>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  About
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Team
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Careers
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className='footer__menu'>
              <li className='footer__menu-item'>
                <h3 className='footer_menu-title'>Social Media</h3>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                Facebook
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                Twitter
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                Instagram
                </a>
              </li>
              <li className='footer__menu-item'>
                <a href='#!' className='footer__menu-link'>
                Youtube
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
    </footer>
  )
}
