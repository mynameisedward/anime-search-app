import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css' // Для стилей заголовка при url /
import Item from './Item/Item.tsx'
import ItemCard from './ItemCard/ItemCard.tsx'
import axios from 'axios'
import Preloader from '../Preloader/Preloader.tsx'
import Context from '../../Context.js'
import Content from './Content.tsx'
import {Routes, Route} from 'react-router-dom'  
import ItemPage from '../ItemPage/ItemPage.jsx'


const Main = () => {





    return (
        <main className={s.Main}>

            <Routes>
                <Route path='/' element={
                    <div className={s.container}>
                        <h1 className={s.title}>Выберите аниме или мангу!</h1>
                    </div>
                }/> 
                <Route path='/anime' element={<Content content='anime'/>}/>    
                <Route path='/anime/:id' element={<ItemPage/>}/>    
                <Route path='/manga' element={<Content content='manga'/>}/>
                <Route path='/manga/:id' element={<ItemPage/>}/>

            </Routes>
        </main>
    )
}

export default Main