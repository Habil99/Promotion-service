import Image from '../../shared/Image'

const Banner = ({ img, title, info, date }) => {

    return (
        <div className="news-banner">
            <div className="news-banner-inner">
                <div className="news-banner-img">
                    <Image source={img} />
                </div>
                <div className="news-banner-content">
                    <p className="news-banner-content-title">
                        {title}
                    </p>
                    <p className="news-banner-content-info">
                        {info}
                    </p>
                    <p className="news-banner-content-date">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
