import React from 'react'
import s from './Preloader.module.css'
import PreloaderGif from '../../assets/Preloader.gif'


const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={PreloaderGif} alt="" className={s.preloaderGif} />
            <h3 className={s.loadingTitle}>Loading...</h3>
        </div>
    )
}

export default Preloader