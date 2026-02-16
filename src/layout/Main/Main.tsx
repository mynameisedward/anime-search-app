import s from './Main.module.scss';
import Content from '../../pages/Content/Content';
import { Route, Routes } from 'react-router-dom';
import ItemPage from '../../pages/ItemPage/ItemPage';
import { WelcomePage } from '../../pages/WelcomePage/WelcomePage';

const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/anime" element={<Content content="anime" />} />
        <Route path="/anime/:id" element={<ItemPage />} />
        <Route path="/manga" element={<Content content="manga" />} />
        <Route path="/manga/:id" element={<ItemPage />} />
      </Routes>
    </main>
  );
};

export default Main;
