import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.contact}>
          <h3 className={s.firstWord}>Created by:</h3>
          <h3 className={s.secondWord}>Edward Eeee</h3>
        </div>
        <span className={s.point}>•</span>
        <div className={s.contact}>
          <h3 className={s.firstWord}>Github:</h3>
          <h3 className={s.secondWord}>
            <a
              href="https://github.com/mynameisedward"
              target="_blank"
              className={s.secondWordLink}
              rel="noreferrer"
            >
              mynameisedward
            </a>
          </h3>
        </div>
        <span className={s.point}>•</span>
        <div className={s.contact}>
          <h3 className={s.firstWord}>Telegram:</h3>
          <h3 className={s.secondWord}>
            <a
              href="https://t.me/mynameisedward"
              target="_blank"
              className={s.secondWordLink}
              rel="noreferrer"
            >
              @mynameisedward
            </a>
          </h3>
        </div>
        <span className={s.point}>•</span>
        <div className={s.contact}>
          <h3 className={s.firstWord}>E-mail:</h3>
          <h3 className={s.secondWord}>
            <a
              href="mailto:satori.tendo.00@mail.ru"
              target="_blank"
              className={s.secondWordLink}
              rel="noreferrer"
            >
              satori.tendo.00@mail.ru
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
