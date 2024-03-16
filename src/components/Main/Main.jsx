import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'
// import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'

const Main = () => {

    const [items, setItems] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [item, setItem] = useState({})

    useEffect(
        () => axios.get('https://api.jikan.moe/v4/top/anime')
            .then(response => {
                setItems(response.data.data)
            })
    , [])

    window.items = items
    window.item = item
            

    let clickItem = (imageUrl, title, genres, synopsis) => { // обработчик для клика на айтем

        setCardOpen(true)

        setItem({})

        let itemInfo = {
            imageUrl,
            title,
            genres,
            synopsis
        }

        console.log('yoyoyo')

        setItem(itemInfo)
    }
    let setCardOpen = (value) => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }


    return (
        <div className={s.Main}>
            <div className={s.container}>
                <h2 className={s.title}>Trending yo</h2>
                <div className={s.items}>
                    {items.map(item => <div key={item.mal_id} onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis)}>
                        <Item imageUrl={item.images.webp.image_url}/>
                    </div>)}                    
                </div>
            </div>
            {isCardOpen && <ItemCard setCardOpen={setCardOpen} imageUrl={item.imageUrl} title={item.title}
                                                                    genres={item.genres} synopsis={item.synopsis}/>}
        </div>
    )
}

export default Main