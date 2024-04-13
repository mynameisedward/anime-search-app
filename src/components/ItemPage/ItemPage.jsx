import React, { useEffect, useState } from 'react'
import s from './ItemPage.module.css'
import { useLocation, useParams } from 'react-router-dom'
import animeImg from '../../assets/animeImage.webp'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'


const ItemPage = () => {


    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)


    const { id } = useParams()

    const location = useLocation()
    const currentUrl = location.pathname

    useEffect(() => {
        const fetchData = async () => {
            if (currentUrl.includes('anime')) {
                let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
                setItem(response.data.data);
            } else if (currentUrl.includes('manga')) {
                let response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`);
                setItem(response.data.data);
            }
        }



        fetchData()
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [])

    // includes
    window.id = id
    window.stateItem = item

    // короче у аниме и манги разные данные и данных так же может не быть некоторых данных которые ожидаются


    return (
        <div>
            <div className={s.container}>
                {
                    loading ? 
                    <Preloader />
                    :
                    <>
                        
                        <div className={s.firstRow}>
                            <div className={s.animeImageDiv}>
                                <img src={item.images.webp.large_image_url} alt="" className={s.animeImage} />
                                {/* <img src={animeImg} alt="" className={s.animeImage} /> */}
                            </div>
                            <div className={s.animeInfo}>
                                <h1 className={s.animeEnglishTitle}>{item.title_english}</h1>
                                <h2 className={s.animeJapaneseTitle}>{item.title_japanese}</h2>
                                <ul className={s.animeInfoList}>
                                    {
                                        currentUrl.includes('anime') 
                                        &&
                                        <>
                                            <li className={s.animeInfoItem}>Episodes: <span>{item.episodes}</span></li>
                                            <li className={s.animeInfoItem}>Source: <span>{item.source}</span></li>
                                            <li className={s.animeInfoItem}>Rating: <span>{item.rating}</span></li>
                                            <li className={s.animeInfoItem}>Genres: <span>{item.genres.map((genre) => <span className={s.genreName}>{genre.name}</span>)}</span></li>
                                            <li className={s.animeInfoItem}>Score: <span>{item.score}</span></li>
                                            <li className={s.animeInfoItem}>Year: <span>{item.year}</span></li>
                                            <li className={s.animeInfoItem}>Status: <span>{item.status}</span></li>
                                            <li className={s.animeInfoItem}>Duration: <span>{item.duration}</span></li>
                                            <li className={s.animeInfoItem}>Type: <span>{item.type}</span></li>
                                        </>
                                    }
                                    {
                                        currentUrl.includes('manga') &&
                                        <>
                                            { item.chapters && <li className={s.animeInfoItem}>Chapters: <span>{item.chapters}</span></li>  }
                                            <li className={s.animeInfoItem}>Score: <span>{item.score}</span></li>
                                            <li className={s.animeInfoItem}>Genres: <span>{item.genres.map((genre) => <span className={s.genreName}>{genre.name}</span>)}</span></li>
                                            <li className={s.animeInfoItem}>Rank: <span>{item.rank}</span></li>
                                            <li className={s.animeInfoItem}>Type: <span>{item.type}</span></li>
                                            <li className={s.animeInfoItem}>Status: <span>{item.status}</span></li>
                                            <li className={s.animeInfoItem}>Members: <span>{item.members}</span></li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={s.synopsisDiv}>
                            <h3 className={s.synopsisTitle}>Synopsis</h3>
                            <p className={s.synopsisText}>{item.synopsis}</p>
                        </div>
                    </>
                }
            </div>
        </div>

    )
}

export default ItemPage