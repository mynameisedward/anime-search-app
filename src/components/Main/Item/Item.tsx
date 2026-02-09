import React from 'react';
import s from './Item.module.css';

interface ItemProps {
    imageUrl?: string;
    score: number;
}

const Item = (props: ItemProps) => {
    return (
        <div className={s.item}>
            {/* TODO: ЕСЛИ Оценки нету, то ставим серый 0, иначе если 6 и ниже то красная */}
            {props.score && (
                <span className={s.score}>{props.score.toFixed(1)}</span>
            )}
            <img src={props.imageUrl} alt="" className={s.image} />
        </div>
    );
};

export default Item;
