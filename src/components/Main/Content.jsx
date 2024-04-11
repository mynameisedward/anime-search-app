import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Context from '../../Context'
import { Link, Routes, Route, useSearchParams } from 'react-router-dom'


const Content = (props) => {

    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')


    const [items, setItems] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true) // Глобальный loading для всей страницы
    const [loadingInsideCard, setLoadingInsideCard] = useState(false) // Loading для карточки

    const {contextContentValue, updateContextContentValue} = useContext(Context) // Значение контекста(Аниме или Манга)



    useEffect(() => {
        const fetchData = async () => {
            if(props.content == 'anime') {
                if(search) {
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&rating=pg13`);
                    setItems(response.data.data);
                } else {
                    setLoading(true)
                    let response = await axios.get('https://api.jikan.moe/v4/top/anime?rating=pg13');
                    setItems(response.data.data);
                }
            } else if(props.content == 'manga') {
                if(search) {
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}&sfw=true`);
                    setItems(response.data.data);
                } else {
                    setLoading(true)
                    let response = await axios.get('https://api.jikan.moe/v4/top/manga');
                    setItems(response.data.data);
                }
            }
        };

        fetchData();
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [props.content, search]);


    window.searchParam = search

    let clickItem = (imageUrl, title, genres, synopsis) => { // обработчик для клика на айтем
        setLoadingInsideCard(true)
        setCardOpen(true)

        setItem({})

        let itemInfo = {
            imageUrl,
            title,
            genres,
            synopsis,
            loadingInsideCard
        }
        setItem(itemInfo)

        setLoadingInsideCard(false)

        setItem(itemInfo)
    }

    let setCardOpen = (value) => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }
    let getTitle = () => {
        if(search) {
            return `Search for: ${search}`
        } else {
            return `Trending ${props.content == 'anime' ? 'anime' : 'manga'}`
        }
    }

    // Сейчас у нас при клике на картинку открывается карточка и картинка(большая) в карточке медленно загружается,
    // Скорее всего будем делать Preloader на картинку
    // Сделаем второй Preloader и второе состояние
    // Надо решать как быть с пробрасыванием состояние loadingInsideCard внутрь компонента ItemCard

    return (
        <>
            <div className={s.container}>
                <h2 className={s.title}>{getTitle()}</h2>
                {loading ?
                    <Preloader />
                    :
                    <div className={s.items}>
                        {items.map(item => <div key={item.mal_id} onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis)}>
                            {/* <Link to={`${item.mal_id}`}> */}
                                <Item imageUrl={item.images.webp.image_url} />
                            {/* </Link> */}

                        </div>)}
                    </div>
                }

            </div>
                
                {isCardOpen && <ItemCard loading={loadingInsideCard} setCardOpen={setCardOpen} imageUrl={item.imageUrl} title={item.title}
                    genres={item.genres} synopsis={item.synopsis} />}
        </>
    )
}

export default Content