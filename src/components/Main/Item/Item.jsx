import React from 'react'
import s from './Item.module.css'


const Item = (props) => {



  return (
    <div className={s.item}>
        <img src={props.imageUrl} alt="" className={s.image} />
    </div>
  )
}

export default Item