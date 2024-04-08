import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Context from '../../Context'


const Main = () => {

    const [items, setItems] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true) // Глобальный loading для всей страницы
    const [loadingInsideCard, setLoadingInsideCard] = useState(false) // Loading для карточки

    const {contextContentValue, updateContextContentValue} = useContext(Context) // Значение контекста(Аниме или Манга)


    window.items = items // Вспомогательные штуки, полезны при отладке
    window.item = item



    useEffect(() => {
        const fetchData = async () => {
            if(contextContentValue == 'anime') {
                setLoading(true)
                let response = await axios.get('https://api.jikan.moe/v4/top/anime');
                setItems(response.data.data);
            } else if(contextContentValue == 'manga') {
                setLoading(true)
                let response = await axios.get('https://api.jikan.moe/v4/top/manga');
                setItems(response.data.data);
            }
        };

        fetchData();
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [contextContentValue]);



    // Функции всякие
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

        console.log(item)

        setItem(itemInfo)

        setLoadingInsideCard(false)

        setItem(itemInfo)
    }

    let setCardOpen = (value) => { // Пробрасывание состояние вниз и вверх по компонентам
        setIsCardOpen(value)
    }


    // Сейчас у нас при клике на картинку открывается карточка и картинка(большая) в карточке медленно загружается,
    // Скорее всего будем делать Preloader на картинку
    // Сделаем второй Preloader и второе состояние
    // Надо решать как быть с пробрасыванием состояние loadingInsideCard внутрь компонента ItemCard





    return (
        <div className={s.Main}>
            <div className={s.container}>
                <h2 className={s.title}>Trending {contextContentValue == 'anime' ? 'anime' : 'manga'} yo</h2>
                {loading ?
                    <Preloader />
                    :
                    <div className={s.items}>
                        {items.map(item => <div key={item.mal_id} onClick={() => clickItem(item.images.webp.large_image_url, item.title, item.genres, item.synopsis)}>
                            <Item imageUrl={item.images.webp.image_url} />
                        </div>)}
                    </div>
                }
            </div>
            {isCardOpen && <ItemCard loading={loadingInsideCard} setCardOpen={setCardOpen} imageUrl={item.imageUrl} title={item.title}
                genres={item.genres} synopsis={item.synopsis} />}
        </div>
    )
}

export default Main