import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/Header/magnifier.svg';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const [inputOpen, setInputOpen] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  const setLink = (): void => {
    const currentUrl: string = location.pathname;
    if (currentUrl.includes('/anime')) {
      setActiveLink('anime');
    } else if (currentUrl.includes('/manga')) {
      setActiveLink('manga');
    } else {
      setActiveLink('');
    }
  };

  const inputOpenOrNot = (): void => {
    // Если не выбрано аниме или манга, то не показываем  input
    if (location.pathname == '/anime') {
      setInputOpen(true);
    } else if (location.pathname == '/manga') {
      setInputOpen(true);
    } else {
      setInputOpen(false);
    }
  };

  const handleInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      navigate(`?search=${inputValue}`);
    }
  };

  useEffect(() => {
    setLink();
    inputOpenOrNot();
  }, [location]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={'/'}>
          <h1 className={s.logo}>Anime Search App</h1>
        </Link>
        {inputOpen && ( // Если не  выбрано аниме или манга, то не показываем input
          <div className={s.input}>
            {inputFocus && (
              <img src={searchIcon} alt="" className={s.searchIcon} />
            )}
            <input
              type="text"
              className={`${s.input__input} ${inputFocus && s.input_focus}`}
              placeholder="What are you looking for?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInput}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
          </div>
        )}

        <div className={s.choose}>
          <Link to={'/anime'}>
            <span className={activeLink == 'anime' ? s.optionAnime : s.option}>
              Anime
            </span>
          </Link>
          <span className={s.option}>/</span>
          <Link to={'/manga'}>
            <span className={activeLink == 'manga' ? s.optionManga : s.option}>
              Manga
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
