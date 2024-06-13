import React, { useEffect, useState } from 'react'
import s from './ItemPage.module.css'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import YouTube from 'react-youtube'


export type ItemPageType = {
    images: {
        webp: {
            large_image_url: string,
        }
    };
    title: string;
    title_japanese: string;
    episodes: number;
    source: string;
    rating: string;
    trailer: {youtube_id: string | null}
    genres: {mal_id: number, type: string, name: string,}[];
    score: number;
    year: number;
    status: string;
    duration: string;
    type: string;
    chapters: number;
    rank: number;
    members: number;
    synopsis: string
} | null

const ItemPage: React.FC = () => {



    const [item, setItem] = useState<ItemPageType>(null)
    const [loading, setLoading] = useState(true)


    const { id } = useParams()

    const location = useLocation()
    const currentUrl = location.pathname

    useEffect(() => {
        const fetchData = async () => {
            if (currentUrl.includes('/anime')) {
                let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
                setItem(response.data.data);
            } else if (currentUrl.includes('/manga')) {
                let response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`);
                setItem(response.data.data);
            }
        }



        fetchData()
        setTimeout(() => { // Добавляем времени чтобы люди успели рассмотреть этого чудесного Preloader-кота
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>
            <div className={s.container}>
                {
                    loading ? 
                    <Preloader />
                    :
                    <>
                        { item != null ?  
                            <> 
                                <div className={s.firstRow}>
                                    <div className={s.animeImageDiv}>
                                        <img src={item.images.webp.large_image_url} alt="" className={s.animeImage} />
                                        {/* <img src={animeImg} alt="" className={s.animeImage} /> */}
                                    </div>
                                    <div className={s.animeInfo}>
                                        <h1 className={s.animeEnglishTitle}>{item.title}</h1>
                                        <h2 className={s.animeJapaneseTitle}>{item.title_japanese}</h2>
                                        <ul className={s.animeInfoList}>
                                            {
                                                currentUrl.includes('anime') 
                                                &&
                                                <>
                                                    {item.episodes && <li className={s.animeInfoItem}>Episodes: <span>{item.episodes}</span></li>}
                                                    {item.source && <li className={s.animeInfoItem}>Source: <span>{item.source}</span></li>}
                                                    {item.rating && <li className={s.animeInfoItem}>Rating: <span>{item.rating}</span></li>}
                                                    {item.genres && <li className={s.animeInfoItem}>Genres: <span>{item.genres.map((genre) => <span key={genre.mal_id} className={s.genreName}>{genre.name}</span>)}</span></li>}
                                                    {item.score && <li className={s.animeInfoItem}>Score: <span>{item.score}</span></li>}
                                                    {item.year && <li className={s.animeInfoItem}>Year: <span>{item.year}</span></li>}
                                                    {item.status && <li className={s.animeInfoItem}>Status: <span>{item.status}</span></li>}
                                                    {item.duration && <li className={s.animeInfoItem}>Duration: <span>{item.duration}</span></li>}
                                                    {item.type && <li className={s.animeInfoItem}>Type: <span>{item.type}</span></li>}
                                                </>
                                            }
                                            {
                                                currentUrl.includes('manga') &&
                                                <>
                                                    { item.chapters && <li className={s.animeInfoItem}>Chapters: <span>{item.chapters}</span></li>  }
                                                    {item.score && <li className={s.animeInfoItem}>Score: <span>{item.score}</span></li>}
                                                    {item.genres && <li className={s.animeInfoItem}>Genres: <span>{item.genres.map((genre) => <span key={genre.mal_id} className={s.genreName}>{genre.name}</span>)}</span></li>}
                                                    {item.rank && <li className={s.animeInfoItem}>Rank: <span>{item.rank}</span></li>}
                                                    {item.type && <li className={s.animeInfoItem}>Type: <span>{item.type}</span></li>}
                                                    {item.status && <li className={s.animeInfoItem}>Status: <span>{item.status}</span></li>}
                                                    {item.members && <li className={s.animeInfoItem}>Members: <span>{item.members}</span></li>}
                                                </>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className={s.synopsisDiv}>
                                    <h3 className={s.synopsisTitle}>Synopsis</h3>
                                    <p className={s.synopsisText}>{item.synopsis}</p>
                                </div>
                                {currentUrl.includes('anime') && item.trailer.youtube_id !== null &&  // проверка: аниме и есть трейлер — показываем
                                    <article className={s.youtubeTrailer}>
                                        <h1>Trailer</h1>
                                        {item.trailer.youtube_id !== null && <div className={s.trailerDiv}><YouTube videoId={item.trailer.youtube_id}/></div>}
                                    </article>
                                }  
                            </> : <></>
                        }
                    </>
                }
            </div>
        </div>

    )
}

export default ItemPage