import React, { useContext, useState } from 'react'
import s from './Header.module.css'
import Context from '../../Context'
import { Link } from 'react-router-dom'

const Header = () => {


    const {contextContentValue, updateContextContentValue} = useContext(Context)


    return (
        <div className={s.Header}>
            <div className={s.container}>
                <h1 className={s.logo}>Anime Search App</h1>
                <div className={s.input}>
                    <input type="text" className={s.input__input} placeholder='What are you looking for?' />
                </div>
                <div className={s.choose}>
                    <Link to={'/anime'}>
                        <span className={contextContentValue == 'anime' ? s.optionAnime : s.option} onClick={() => updateContextContentValue('anime')}>Anime</span>
                    </Link>
                    <span className={s.option}>/</span>
                    <Link to={'/manga'}>
                        <span className={contextContentValue == 'manga' ? s.optionManga : s.option} onClick={() => updateContextContentValue('manga')}>Manga</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header