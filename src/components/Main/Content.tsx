import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios, { AxiosError } from 'axios'
import Preloader from '../Preloader/Preloader'
import { useSearchParams, useLocation } from 'react-router-dom'
import Paginator from '../Paginator/Paginator'
import { Genre } from './ItemCard/ItemCard'



export interface ContentProps {
    content: string,
}
export interface Item {
    imageUrl: string;
    title: string;
    genres: Genre[];
    synopsis: string;
    loadingInsideCard: boolean;
    id: number;
    setCardOpen?: (trueFalse: boolean) => void;
    images?: {
        webp: {
            image_url: string,
            large_image_url: string
        }
    }
}

interface ItemArrInterface {
    mal_id: number,
    images: {
        webp: {
            large_image_url: string,
            image_url: string
        }
    },
    title: string,
    genres: Genre[],
    synopsis: string,
}
interface PaginationData {
    last_visible_page: number,
    current_page: number,
}


const Content: React.FC<ContentProps> = (props) => {


    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    const location = useLocation()
    const page = searchParams.get('page');


    const [items, setItems] = useState<ItemArrInterface[]>([])
    const [isCardOpen, setIsCardOpen] = useState<boolean>(false)
    const [item, setItem] = useState<Item | null>(null)
    const [loading, setLoading] = useState<boolean>(true) // Глобальный loading для всей страницы
    const [loadingInsideCard, setLoadingInsideCard] = useState<boolean>(false) // Loading для карточки
    const [paginationData, setPaginationData] = useState<PaginationData>({ last_visible_page: 1, current_page: 1 })

    const fetchData = async () => {
            setItems([])
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

    useEffect(() => {


        fetchData();
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [location]);


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

    return (
        <>
            <div className={s.container}>
                <h2 className={s.title}>{getTitle()}</h2>
                {loading ?
                    <Preloader />
                    :
                    <>
                        <div className={s.items}>
                            {items.map(item => <div key={item.mal_id} onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis, item.mal_id)}>
                                <Item imageUrl={item.images.webp.image_url} />
                            </div>)}
                        </div>
                        {/* {items.length !== 0 && <Paginator numberOfPages={paginationData.last_visible_page} changePage={changePage} />} */}
                    </>
                }
                <Paginator numberOfPages={paginationData.last_visible_page} changePage={changePage} />
            </div>
            {isCardOpen && item != null && <ItemCard id={item.id} setCardOpen={setCardOpen} imageUrl={item.imageUrl} title={item.title}
                genres={item.genres} synopsis={item.synopsis} />}
        </>
    )
}

export default Content