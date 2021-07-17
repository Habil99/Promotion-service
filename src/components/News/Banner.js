import React from 'react'

const Banner = () => {
    return (
        <div className="news-banner">
            <div className="news-banner-inner">
                <div className="news-banner-img">
                    <img src={'/assets/images/news-1.svg'} alt="Promotion Service News" />
                </div>
                <div className="news-banner-content">
                    <p className="news-banner-content-title">
                        Dribbble Russia VK Community officially launched!
                    </p>
                    <p className="news-banner-content-info">
                        Send your portfolio to our manager on e-mail and get
                        a chance to be a part of our new big Dribbblers group!
                    </p>
                    <p className="news-banner-content-date">
                        Aug 14, 2020
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
