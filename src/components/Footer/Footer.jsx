import React from 'react'
import s from './Footer.module.css'
import githubIcon from '../../assets/GitHub.png'


const Footer = () => {
  return (
    <footer className={s.Footer}>
        <div className={s.container}>
            <div className={s.contact}>
                <h3 className={s.firstWord}>Created by:</h3>
                <h3 className={s.secondWord}>Edward Eeee</h3>
            </div>
            <span className={s.point}>•</span>
            <div className={s.contact}>
                <h3 className={s.firstWord}>Github:</h3>
                <h3 className={s.secondWord}>
                    <a href="https://github.com/mynameisedward" target='_blank' className={s.secondWordLink}>mynameisedward</a>
                </h3>
            </div>
            <span className={s.point}>•</span>
            <div className={s.contact}>
                <h3 className={s.firstWord}>Telegram:</h3>
                <h3 className={s.secondWord}>
                    <a href="https://t.me/mynameisedward" target='_blank' className={s.secondWordLink}>@mynameisedward</a>
                </h3>
            </div>
            <span className={s.point}>•</span>
            <div className={s.contact}>
                <h3 className={s.firstWord}>E-mail:</h3>
                <h3 className={s.secondWord}>
                    <a href="mailto:satori.tendo.00@mail.ru" target='_blank' className={s.secondWordLink}>satori.tendo.00@mail.ru</a>
                </h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer