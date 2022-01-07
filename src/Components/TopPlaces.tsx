import React from 'react'
import top_card1 from '../img/category/1.jpg'
import top_card2 from '../img/category/2.jpg'
import top_card3 from '../img/category/3.jpg'
import top_card4 from '../img/category/4.jpg'
import top_card5 from '../img/category/5.jpg'
import top_card6 from '../img/category/6.jpg'

export const TopPlaces = () => {
  return (
    <section className='top'>
      <div className='wrapper-full'>
        <h2 className='top__title section__title '>
          Today top places to visit
        </h2>
        
        <div className='top__cards'>

          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card1} alt='NAGOYA' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>NAGOYA</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>
          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card2} alt='NIIGATA' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>NIIGATA</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>
          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card3} alt='OSAKA' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>OSAKA</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>
          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card4} alt='SAITAMA' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>SAITAMA</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
           
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>
          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card5} alt='UENO' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>UENO</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>
          <div className='top__card'>
            <div className='top__card-pic'>
              <img src={top_card6} alt='SHIBUYA' className='top__card-thump' />
              <div className='top__card-stats'>
                <h3 className='top__card-title'>SHIBUYA</h3>
                <div className='top__card-likes'>
                  <span className='top__card-likes-value'>221</span>
                </div>
                <div className='top__card-coments'>
                  <span className='top__card-coments-value'>50</span>
                </div>
              </div>
            </div>
            <p className='top__card-desc'>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href='#!' className='top--card-more'>
              SEE MORE
            </a>
          </div>



        </div>
      </div>
    </section>
  )
}
