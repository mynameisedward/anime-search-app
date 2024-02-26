import React, { useState } from 'react'
import s from './Header.module.css'

const Header = () => {

  const [choose, setChoose] = useState('anime') // Выбор между аниме или мангой



  return (
    <div className={s.Header}>
        <div className={s.container}>
            <h1 className={s.logo}>Anime Search App</h1>
            <div className={s.input}>
              <input type="text" className={s.input__input} placeholder='What are you looking for?'/>
            </div>
            <div className={s.choose}>
              <span className={choose == 'anime' ? s.optionAnime : s.option} onClick={() => setChoose('anime')}>Anime</span>
              <span className={s.option}>/</span>
              <span className={choose == 'manga' ? s.optionManga : s.option} onClick={() => setChoose('manga')}>Manga</span>
            </div>
        </div>
    </div>
  )
}

export default Header