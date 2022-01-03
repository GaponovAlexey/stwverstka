import React from 'react'
import church from '../img/svg/church.svg'
import shop from '../img/svg/shop.svg'
import person from '../img/svg/person.svg'

export const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='benefits_wrap'>
        <h2 className='benefits__title'>Benefits of Odigo</h2>
        <div className='benefits__cards'>
          <div className='benefits_card'>
            <div className='benefits__card-pic'>
              <img
                src={church}
                alt='Welcome to Odigo!'
                className='benefits__card-thumb'
              />
              <h3 className='benefits__card-title'>Welcome to Odigo!</h3>
              <p className='benefits__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <a href='!=' className='benefits__card-more'>
                LEARN MORE
              </a>
            </div>
          </div>
          <div className='benefits_card'>
            <div className='benefits__card-pic'>
              <img
                src={person}
                alt='Your Personal Japan Guide'
                className='benefits__card-thumb'
              />
              <h3 className='benefits__card-title'>
                Your Personal Japan Guide
              </h3>
              <p className='benefits__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <a href='!=' className='benefits__card-more'>
                LEARN MORE
              </a>
            </div>
          </div>
          <div className='benefits_card'>
            <div className='benefits__card-pic'>
              <img
                src={shop}
                alt='Promoting Local Businesses'
                className='benefits__card-thumb'
              />
              <h3 className='benefits__card-title'>
                Promoting Local Businesses
              </h3>
              <p className='benefits__card-desc'>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over.
              </p>
              <a href='!=' className='benefits__card-more'>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
