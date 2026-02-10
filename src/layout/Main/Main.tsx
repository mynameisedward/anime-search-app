import s from './Main.module.css';
import Content from '../../components/Main/Content/Content';
import { Route, Routes } from 'react-router-dom';
import ItemPage from '../../components/ItemPage/ItemPage';

const Main = () => {
  return (
    <main className={s.Main}>
      <Routes>
        <Route
          path="/"
          element={
            <div className={s.container}>
              <h1 className={s.title}>Выберите аниме или мангу!</h1>
            </div>
          }
        />
        <Route path="/anime" element={<Content content="anime" />} />
        <Route path="/anime/:id" element={<ItemPage />} />
        <Route path="/manga" element={<Content content="manga" />} />
        <Route path="/manga/:id" element={<ItemPage />} />
      </Routes>
    </main>
  );
};

export default Main;
