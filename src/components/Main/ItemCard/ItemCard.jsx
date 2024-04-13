import React, { useState } from 'react'
import s from './ItemCard.module.css'
import closeButton from './closeButtonIcon.svg'
import { Link } from 'react-router-dom'
import Preloader from '../../Preloader/Preloader'


const ItemCard = (props) => {


    
    return (

        <div className={s.ItemCard}>

            <img src={props.imageUrl} alt="" className={s.image} />
            <h2 className={s.title}>{props.title}</h2>
            <h2 className={s.genres}>
                {props.genres.map(genre => <span className={s.genre} key={genre.mal_id}>
                    <span className={s.genreName}>{genre.name}</span>
                    <span className={s.genrePoint}>,</span>
                </span>)}</h2>
            <p className={s.synopsys}>{props.synopsis}</p>
            <Link to={`${props.id}`}>
                <span className={s.moreInfo}>More Info...</span>
            </Link>
            <button className={s.closeButton} >
                <img src={closeButton} onClick={() => props.setCardOpen(false)} alt="" className={s.closeButtonIcon} />
            </button>

        </div>
    )
}

export default ItemCard