import React from 'react'
import tour1 from '../img/jpg/tours-1.jpg'
import tour2 from '../img/jpg/tours-2.jpg'

export const Ture = () => {
  return (
    <div className='tours'>
      <div className='wrapper-full'>
        <div className='tours__tour tour'>
          <div className='tour__pic'>
            <img
              src={tour1}
              alt='Prefecture in Focus: Tottori'
              className='tour__thumn'
            />
          </div>
          <div className='tour__info'>
            <h3 className='tour__title'>Prefecture in Focus: Tottori</h3>
            <p className='tour__desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </p>
            <a href='!=' className='tour__more'>
              VIEW PREFECTURE
            </a>
          </div>
        </div>
        {/* tour__two */}
        <div className='tours__tour tour'>
          <div className='tour__info'>
            <h3 className='tour__title'>
              Featured Neighborhood: Kyoto’s Arashiyama
            </h3>
            <p className='tour__desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,
            </p>
            <a href='!=' className='tour__more'>
              VIEW NEIGHBORHOOD
            </a>
          </div>
          <div className='tour__pic'>
            <img
              src={tour2}
              alt='Featured Neighborhood: Kyoto’s Arashiyama'
              className='tour__thumn'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
