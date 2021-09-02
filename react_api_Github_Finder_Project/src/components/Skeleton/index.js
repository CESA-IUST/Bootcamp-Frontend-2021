import React from 'react'
import './style.css'

const Skeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton__img skeleton"></div>
            <div className="skeleton__text skeleton"></div>
            <div className="skeleton__text skeleton"></div>
            <div className="skeleton__text skeleton"></div>
        </div>
    )
}

export default Skeleton;
