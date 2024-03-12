import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'


const Main = () => {

    const [items, setItems] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)


    // const itemsNumb = 24
    // if(items.length != itemsNumb) { // Проверка, чтобы не закидывать числа в массив ещё раз
    //     for(let i = 1; i <= itemsNumb; i++) {
    //         items.push(i)
    //     }
    // }

    useEffect(
        () => axios.get('https://api.jikan.moe/v4/top/anime')
            .then(response => {
                setItems(response.data.data)
            })
        , [])

    window.itemmm = items


    let setCardOpen = (value) => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }


    return (
        <div className={s.Main}>
            <div className={s.container}>
                <h2 className={s.title}>Trending</h2>
                <div className={s.items}>
                    {items && items.map(item => <div key={item} onClick={() => setIsCardOpen(true)}>
                        <Item imageUrl={item.images.jpg.image_url}/>
                    </div>)}
                </div>
            </div>
            {isCardOpen && <ItemCard setCardOpen={setCardOpen}/>}
        </div>
    )
}

export default Main