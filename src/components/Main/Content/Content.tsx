import React, { useEffect, useState } from 'react'
import s from '../Main.module.css'
import Item from '../Item/Item'
import ItemCard from '../ItemCard/ItemCard'
import axios from 'axios'
import Preloader from '../../Preloader/Preloader'
import { useSearchParams, useLocation } from 'react-router-dom'
import Paginator from '../../Paginator/Paginator'
import getUrlForRequest from './getUrlForRequest'
import { ItemArrInterface, ItemInterface, PaginationData, Genre } from '../types/types'


export interface ContentProps {
    content: string,
}
const Content: React.FC<ContentProps> = (props) => {

    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    const location = useLocation()
    const page = searchParams.get('page');


    const [items, setItems] = useState<ItemArrInterface[]>([])
    const [isCardOpen, setIsCardOpen] = useState<boolean>(false)
    const [item, setItem] = useState<ItemInterface | null>(null)
    const [loading, setLoading] = useState<boolean>(true) // Глобальный loading для всей страницы
    const [loadingInsideCard, setLoadingInsideCard] = useState<boolean>(false) // Loading для карточки
    const [paginationData, setPaginationData] = useState<PaginationData>({ last_visible_page: 1, current_page: 1 })

    const fetchData = async () => {
            setItems([])

            const url = getUrlForRequest({
                content: props.content,
                page,
                search,
            })

            setLoading(true)
            let response = await axios.get(url)
            setItems(response.data.data)
            setPaginationData(response.data.pagination)
    };

    let changePage = (number: number): void => {
        setPaginationData({ ...paginationData, current_page: number })
    }

    let clickItem = (imageUrl: string, title: string, genres: Genre[], synopsis: string, id: number): void => { // обработчик для клика на айтем
        setLoadingInsideCard(true)
        setCardOpen(true)
        setItem(null)
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

    let setCardOpen = (value: boolean): void => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }
    let getTitle = (): string => {
        if (search) {
            return `Search for: ${search}`
        } else {
            return `Trending ${props.content == 'anime' ? 'anime' : 'manga'}`
        }
    }

    useEffect(() => {
        fetchData();
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [location]);


    let window1 = window as any
    window1.urlll = new URL('https://api.jikan.moe/v4/anime?q=naruto&rating=pg13&page=1')

    return (
        <>
            <div className={s.container}>
                <h2 className={s.title}>{getTitle()}</h2>
                {loading ?
                    <Preloader />
                    :
                    <>
                        <div className={s.items}>
                            {items.map(item => 
                                <div key={item.mal_id} 
                                    onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis, item.mal_id)}>
                                    <Item imageUrl={item.images.webp.image_url} />
                                </div>)}
                        </div>
                    </>
                }
                <Paginator numberOfPages={paginationData.last_visible_page} changePage={changePage} />
            </div>
            {(isCardOpen && item != null) && <ItemCard 
                                                id={item.id} 
                                                setCardOpen={setCardOpen} 
                                                imageUrl={item.imageUrl} 
                                                title={item.title}
                                                genres={item.genres} 
                                                synopsis={item.synopsis} />}
        </>
    )
}

export default Content