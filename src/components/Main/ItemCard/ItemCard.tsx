import React, { useState } from 'react'
import s from './ItemCard.module.css'
import closeButton from './closeButtonIcon.svg'
import { Link } from 'react-router-dom'



export interface Genre {
    mal_id: number, 
    name: string,
}
export interface ItemCardProps {
    imageUrl: string,
    title: string,
    genres: Genre[],
    synopsis: string,
    id: number,
    setCardOpen: (trueFalse: boolean) => void
}


const ItemCard = (props: ItemCardProps) => {


    
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