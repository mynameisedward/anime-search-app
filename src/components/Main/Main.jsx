import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css' // Для стилей заголовка при url /
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Context from '../../Context'
import Content from './Content'
import {Routes, Route} from 'react-router-dom'  
import ItemPage from '../ItemPage/ItemPage'


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