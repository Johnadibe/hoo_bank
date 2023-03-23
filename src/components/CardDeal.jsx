import React from 'react';
import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      {/* First Dive Box */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We compare all the cards in the market and show you the best one for you. We also help you to apply for the card and get it delivered to your door. 
        </p>

       <Button styles="mt-10" />
      </div>

    {/* Second Div Box Image */}
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal;