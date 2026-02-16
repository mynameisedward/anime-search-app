import s from './Preloader.module.scss';
import PreloaderGif from '../../assets/images/Preloader/Preloader.gif';

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={PreloaderGif} alt="" className={s.preloaderGif} />
      <h3 className={s.loadingTitle}>Loading...</h3>
    </div>
  );
};
