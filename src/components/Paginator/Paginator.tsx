import React from 'react'
import s from './Paginator.module.css'
import {Link, useLocation, useParams, useSearchParams} from 'react-router-dom'


export interface PaginatorProps {
    numberOfPages: number,
    changePage: (number: number) => void
}


const Paginator = (props: PaginatorProps) => {


    const location = useLocation()
    const currentUrl = location.pathname
    const [searchParams] = useSearchParams()
    let page: string | number | null = searchParams.get('page');

    const arr = []
    for(let i = 1; i <= props.numberOfPages; i++) {
        arr.push(i)
    }


    const getClassNameForNumber = (number: number | string) => {
        if(page == null) {
            page = 1
        }
        if(number == page) {
            return s.activeNumber
        } else {
            return s.number
        }
    }
    const addPageQueryParam = (number: number): string => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', number.toString());
    
        return `${location.pathname}?${searchParams.toString()}`;
    };  


    return (
        <div className={s.paginator}> 
            {arr.map((number) => 
                <Link to={addPageQueryParam(number)} key={number}> 
                    <div className={(s.numberDiv)}>
                        <button className={getClassNameForNumber(number)} onClick={() => props.changePage(number)} >{number } </button>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Paginator