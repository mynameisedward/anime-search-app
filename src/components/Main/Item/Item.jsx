import React from 'react'
import s from './Item.module.css'


const Item = (props) => {
  return (
    <div className={s.item}>
        <img src="https://cdn.myanimelist.net/images/anime/13/17405.jpg" alt="" className={s.image} />
    </div>
  )
}

export default Item