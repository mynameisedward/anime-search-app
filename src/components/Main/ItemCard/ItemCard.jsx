import React, { useState } from 'react'
import s from './ItemCard.module.css'
import NarutoImg from './NarutoImg.jpg'
import closeButton from './closeButtonIcon.svg'


const ItemCard = (props) => {

  

  
  return (

    <div className={s.ItemCard}>
        <img src={NarutoImg} alt="" className={s.image} />
        <h2 className={s.title}>Naruto </h2>
        <h2 className={s.genre}>Action, Adventure, Fantasy</h2>
        <p className={s.synopsys}>Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.</p>
        <span className={s.moreInfo}>More Info...</span>
        <button className={s.closeButton} >
            <img src={closeButton} onClick={() => props.setCardOpen(false)} alt="" className={s.closeButtonIcon} />
        </button>
    </div>
  )
}

export default ItemCard