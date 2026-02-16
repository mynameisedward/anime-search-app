import s from './WelcomePage.module.scss';

export const WelcomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Выберите аниме или мангу!</h1>
    </div>
  );
};
