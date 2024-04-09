import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Context from './Context'
import { BrowserRouter } from "react-router-dom";



function App() {

    const [contextContentValue, setContextContentValue] = useState('anime') // Состояние для контекста

    const updateContextContentValue = (newValue) => { // Функция для обновления значения контекста
        setContextContentValue(newValue);
    };
    
    

    return (

        <div className="App">
            <Context.Provider value={{contextContentValue, updateContextContentValue}}>
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />  
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;
