import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import { BrowserRouter } from "react-router-dom";



function App() {

    return (

        <div className='App'>
            <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
