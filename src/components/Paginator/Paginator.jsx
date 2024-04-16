import React from 'react'
import s from './Paginator.module.css'
import {Link} from 'react-router-dom'


const Paginator = (props) => {

    const arr = []
    for(let i = 1; i <= props.numberOfPages; i++) {
        arr.push(i)
    }

    return (
        <div className={s.paginator}> 
            {/* {arr.map((number) => 
            <>
                <Link to={`${number}`} key={number}> 
                    <span onClick={() => props.changePage(number)} >{number } </span>
                </Link>
            </>)} */}
        </div>
    )
}

export default Paginator