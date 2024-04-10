import React, { useState, useEffect } from 'react'
import s from './Header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const location = useLocation()
    const [activeLink, setActiveLink] = useState('')

    useEffect(() => {
        const currentUrl = location.pathname;
        if (currentUrl === '/anime') {
            setActiveLink('anime');
        } else if (currentUrl === '/manga') {
            setActiveLink('manga');
        }
    }, [location]);


    const handleInput = (e) => {
        if(e.key === 'Enter') {
            navigate(`?search=${inputValue}`)
            console.log(inputValue)
            setInputValue('')
        }
    }

    window.curUrl = location.pathname

    // const {contextContentValue, updateContextContentValue} = useContext(Context)


    return (
        <div className={s.Header}>
            <div className={s.container}>
                <Link to={'/anime'}>
                    <h1 className={s.logo}>Anime Search App</h1>
                </Link>
                <div className={s.input}>
                    <input type="text" className={s.input__input} placeholder='What are you looking for?' 
                        value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleInput}/>
                </div>
                <div className={s.choose}>
                    <Link to={'/anime'}>
                        <span className={activeLink == 'anime' ? s.optionAnime : s.option}>Anime</span>
                    </Link>
                    <span className={s.option}>/</span>
                    <Link to={'/manga'}>
                        <span className={activeLink == 'manga' ? s.optionManga : s.option}>Manga</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header