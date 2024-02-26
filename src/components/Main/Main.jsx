import React, { useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'


const Main = () => {

    const [items, setItems] = useState([])

    for(let i = 1; i <= 24; i++) {
        items.push(i)
    }

    window.itemmm = items


    return (
        <div className={s.Main}>
            <div className={s.container}>
                <h2 className={s.title}>Trending</h2>
                <div className={s.items}>
                    {items.map(item => <Item key={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Main