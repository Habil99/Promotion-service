import React from 'react'

const Card = ({ img, info, date }) => {
    return (
        <div className="news-card">
            <div className="news-card-img">
                <img src={img} alt="Promotion Service News" />
            </div>
            <p className="news-card-info">{info}</p>
            <p className="news-card-date">{date}</p>
        </div>
    )
}

export default Card;
