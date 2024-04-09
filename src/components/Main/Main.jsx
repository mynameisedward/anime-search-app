import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css'
import Item from './Item/Item'
import ItemCard from './ItemCard/ItemCard'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Context from '../../Context'
import Content from './Content'
import {Routes, Route} from 'react-router-dom'


const Main = () => {





    return (
        <div className={s.Main}>

            <Routes> 
                <Route path='/anime' element={<Content content='anime'/>}/>    
                <Route path='/manga' element={<Content content='manga'/>}/>
                
            </Routes>
        </div>
    )
}

export default Main