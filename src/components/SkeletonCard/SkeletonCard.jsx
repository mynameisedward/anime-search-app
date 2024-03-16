import React from 'react'
import s from './SkeletonCard.module.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const SkeletonCard = () => {
  return (
    <div className={s.skeletonCard}>
        <SkeletonTheme duration={4}>

            <Skeleton/>
        </SkeletonTheme>
    </div>
  )
}

export default SkeletonCard