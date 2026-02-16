import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
};
