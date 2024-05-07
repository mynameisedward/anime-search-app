import React, { useState, useEffect } from 'react'
import s from './Header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import chooseArrow from '../../assets/chooseArrow.png'


const Header: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const navigate = useNavigate()

    const location = useLocation()
    const [activeLink, setActiveLink] = useState<string>('')

    const [inputOpen, setInputOpen] = useState<boolean>(false)


    const setLink = (): void => {
        const currentUrl: string = location.pathname;
        if (currentUrl.includes('anime-search-app/anime')) {
            setActiveLink('anime');
        } else if (currentUrl.includes('anime-search-app/manga')) {
            setActiveLink('manga');
        } else {
            setActiveLink('')
        }
    }
    const inputOpenOrNot = (): void => {
        if (location.pathname == '/anime') {
            setInputOpen(true)
        } else if(location.pathname == '/manga') {
            setInputOpen(true)
        } 
        else {
            setInputOpen(false)
        }
    }
    const getLinkForURL = (content: string): string => {
        if(window.location.pathname == '/') {
            return `${content}`
        } else {
            return `${window.location.pathname}/${content}`
        }
    }


    useEffect(() => {
        setLink()
        inputOpenOrNot()
    }, [location]);


    let window1 = window as any

    window1.activeLink = activeLink
    window1.pname = window.location.pathname

    const handleInput = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            navigate(`?search=${inputValue}`)
            console.log(inputValue)
            setInputValue('')
        }
    }



    return (
        <header className={s.Header}>
            <div className={s.container}>
                <Link to={'/anime-search-app'}>
                    <h1 className={s.logo}>Anime Search App</h1>
                </Link>
                {inputOpen &&
                    <div className={s.input}>
                        <input type="text" className={s.input__input} placeholder='What are you looking for?'
                            value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleInput} />
                    </div>
                }

                <div className={s.choose}>
                    <Link to={'anime-search-app/anime'}>
                        <span className={activeLink == 'anime' ? s.optionAnime : s.option}>Anime</span>
                    </Link>
                    <span className={s.option}>/</span>
                    <Link to={'anime-search-app/manga'}>
                        <span className={activeLink == 'manga' ? s.optionManga : s.option}>Manga</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header