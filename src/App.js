import s from "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import { BrowserRouter } from "react-router-dom";



function App() {

    return (

        <div className={s.App}>
            <BrowserRouter>
                <div className={s.wrapper}>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
