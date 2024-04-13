import React, { useEffect, useState } from 'react'
import s from './ItemPage.module.css'
import { useLocation, useParams } from 'react-router-dom'
import animeImg from '../../assets/animeImage.webp'
import axios from 'axios'


const ItemPage = () => {


    const [item, setItem] = useState()
    
    const {id} = useParams()

    const location = useLocation()
    const currentUrl = location.pathname

    useEffect(() => {
        // const fetchData = async () => {
        //     if(currentUrl.includes('anime')) {
        //         let response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
        //         setItem(response.data.data);
        //     } else if(currentUrl.includes('manga')) {
        //         let response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`);
        //         setItem(response.data.data);
        //     }
        // }
        // fetchData()
    }, [])
    
    // includes
    window.id = id
    window.stateItem = item

    return (
        <div>
            <div className={s.container}>
                <div className={s.firstRow}>
                    <div className={s.animeImageDiv}>
                        {/* <img src={item.images.webp.large_image_url} alt="" className={s.animeImage} /> */}
                        <img src={animeImg} alt="" className={s.animeImage} />
                    </div>
                    <div className={s.animeInfo}>
                        <h1 className={s.animeEnglishTitle}>Hunter x Hunter</h1>
                        <h2 className={s.animeJapaneseTitle}>HUNTER×HUNTER（ハンター×ハンター）</h2>
                        <ul className={s.animeInfoList}>
                            <li className={s.animeInfoItem}>Episodes: <span>{12}</span></li>
                            <li className={s.animeInfoItem}>Source: <span>Manga</span></li>
                            <li className={s.animeInfoItem}>Rating: <span>PG-13 - Teens 13 or older</span></li>
                            <li className={s.animeInfoItem}>Score: <span>9.04</span></li>
                            <li className={s.animeInfoItem}>Year: <span>2011</span></li>
                            <li className={s.animeInfoItem}>Status: <span>Finished Airing</span></li>
                            <li className={s.animeInfoItem}>Duration: <span>23 min per ep</span></li>
                            <li className={s.animeInfoItem}>Type: <span>TV</span></li>
                            
                        </ul>
                    </div>
                </div>
                <div className={s.synopsisDiv}>
                    <h3 className={s.synopsisTitle}>Synopsis</h3>
                    <p className={s.synopsisText}>Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]</p>
                </div>
            </div>
        </div>

    )
}

export default ItemPage