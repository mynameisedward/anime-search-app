import s from './ItemCard_MoreInfo.module.css';
import closeButton from '../../assets/Item More Info Card/closeButtonIcon.svg';
import { Link } from 'react-router-dom';
import { Genre } from '../../types/types';

export interface ItemCardProps {
  imageUrl: string;
  title: string;
  genres: Genre[];
  synopsis: string;
  id: number;
  setCardOpen: (trueFalse: boolean) => void;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <div className={s.item_card}>
      <img src={props.imageUrl} alt="" className={s.image} />
      <h2 className={s.title}>{props.title}</h2>
      <h2 className={s.genres}>
        {props.genres.map((genre) => (
          <span className={s.genre} key={genre.mal_id}>
            <span className={s.genreName}>{genre.name}</span>
            <span className={s.genrePoint}>,</span>
          </span>
        ))}
      </h2>
      <p className={s.synopsys}>{props.synopsis}</p>
      <Link to={`${props.id}`}>
        <span className={s.moreInfo}>More Info...</span>
      </Link>
      <button
        className={s.closeButton}
        onClick={() => props.setCardOpen(false)}
      >
        <img src={closeButton} alt="" className={s.closeButtonIcon} />
      </button>
    </div>
  );
};

export default ItemCard;
