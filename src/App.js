import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Context from './Context'
import React, { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


function App() {

    const [contextContentValue, setContextContentValue] = useState('anime') // Состояние для контекста

    const updateContextContentValue = (newValue) => { // Функция для обновления значения контекста
        setContextContentValue(newValue);
    };
    
    
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
        },
      ]);

    return (

        <div className="App">
            <Context.Provider value={{contextContentValue, updateContextContentValue}}>
                <RouterProvider router={router} >
                    <Header />
                    <Main />
                    <Footer />  
                </RouterProvider>
            </Context.Provider>
        </div>
    );
}

export default App;
