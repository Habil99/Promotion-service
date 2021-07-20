import React from 'react'
import Image from '../../shared/Image';

const Card = ({ img, info, date }) => {
    return (
        <div className="news-card">
            <div className="news-card-img">
                <Image source={img} />
            </div>
            <p className="news-card-info">{info}</p>
            <p className="news-card-date">{date}</p>
        </div>
    )
}

export default Card;
