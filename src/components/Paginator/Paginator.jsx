import React from 'react'
import s from './Paginator.module.css'
import {Link, useLocation, useParams} from 'react-router-dom'


const Paginator = (props) => {


    const location = useLocation()
    const currentUrl = location.pathname
    const {search} = useParams()

    window.curURL = currentUrl
    window.loc = location

    const arr = []
    for(let i = 1; i <= props.numberOfPages; i++) {
        arr.push(i)
    }

    const addPageQueryParam = (number) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', number);
    
        return `${location.pathname}?${searchParams.toString()}`;
    };  

    return (
        <div className={s.paginator}> 
            {arr.map((number) => 
                <Link to={addPageQueryParam(number)} key={number}> 
                    <span onClick={() => props.changePage(number)} >{number } </span>
                </Link>
            )}
        </div>
    )
}

export default Paginator