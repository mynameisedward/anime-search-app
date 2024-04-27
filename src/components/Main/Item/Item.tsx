import React from 'react'
import s from './Item.module.css'


interface ItemProps {
    imageUrl?: string
}


const Item = (props: ItemProps) => {

    return (
        <div className={s.item}>
            <img src={props.imageUrl} alt="" className={s.image} />
        </div>
    )
}

export default Item