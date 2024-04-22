import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item.tsx'
import ItemCard from './ItemCard/ItemCard.tsx'
import axios from 'axios'
import Preloader from '../Preloader/Preloader.tsx'
import Context from '../../Context.js'
import { Link, Routes, Route, useSearchParams, useLocation, useParams } from 'react-router-dom'
import Paginator from '../Paginator/Paginator.tsx'



export interface ContentProps {
    content: String,  
}   

const Content = (props: ContentProps) => {


    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    const location = useLocation()
    const page = searchParams.get('page');


    const [items, setItems] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true) // Глобальный loading для всей страницы
    const [loadingInsideCard, setLoadingInsideCard] = useState(false) // Loading для карточки
    const [paginationData, setPaginationData] = useState({})

    const { contextContentValue, updateContextContentValue } = useContext(Context) // Значение контекста(Аниме или Манга)



    window.page = page
    window.loc = location
    window.pagination = paginationData


    useEffect(() => {
        const fetchData = async () => {


            if (props.content == 'anime') {
                if (search) { // ЕСЛИ ИЩЕМ ЧТО ЛИБО
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&rating=pg13&page=${page ? page : 1}`);
                    setItems(response.data.data);
                    setPaginationData(response.data.pagination)
                } else { // TOP 
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/top/anime?rating=pg13&page=${page == undefined ? 1 : page}`);
                    setItems(response.data.data);
                    setPaginationData(response.data.pagination)
                }
            } else if (props.content == 'manga') {
                if (search) { // ЕСЛИ ИЩЕМ ЧТО ЛИБО
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}&sfw=true&page=${page ? page : 1}`);
                    setItems(response.data.data);
                    setPaginationData(response.data.pagination)
                } else { // TOP
                    setLoading(true)
                    let response = await axios.get(`https://api.jikan.moe/v4/top/manga?page=${page == undefined ? 1 : page}`);
                    setItems(response.data.data);
                    setPaginationData(response.data.pagination)
                }
            }
        };

        fetchData();
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [location]);


    window.searchParam = search
    window.items = items

    let changePage = (number) => {
        setPaginationData({ ...paginationData, current_page: number })
        console.log(number)
    }

    let clickItem = (imageUrl, title, genres, synopsis, id) => { // обработчик для клика на айтем
        setLoadingInsideCard(true)
        setCardOpen(true)

        setItem({})

        let itemInfo = {
            imageUrl,
            title,
            genres,
            synopsis,
            loadingInsideCard,
            id,
        }
        setItem(itemInfo)

        setLoadingInsideCard(false)

        setItem(itemInfo)
    }

    let setCardOpen = (value) => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }
    let getTitle = () => {
        if (search) {
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
                    <>  
                        {items.length == 0 ? <h1 className={s.notFoundTitle}>NOT FOUND</h1> : 
                            <div className={s.items}>
                                {items.map(item => <div key={item.mal_id} onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis, item.mal_id)}>
                                    <Item imageUrl={item.images.webp.image_url} />
                                </div>)}
                            </div>
                        }
                        {/* {items.length !== 0 && <Paginator numberOfPages={paginationData.last_visible_page} changePage={changePage} />} */}
                    </>

                }
                <Paginator numberOfPages={paginationData.last_visible_page} changePage={changePage} />
            </div>
            {isCardOpen && <ItemCard id={item.id} loading={loadingInsideCard} setCardOpen={setCardOpen} imageUrl={item.imageUrl} title={item.title}
                genres={item.genres} synopsis={item.synopsis} />}
        </>
    )
}

export default Content