
const CardSkeletion = () => {
    return (
        <div className="task-list-card skeleton">
            <div className="skeleton-top">
                <div className="skeleton-avatar"></div>
                <div className="skeleton-info">
                    <div className="skeleton-info-inner"></div>
                    <div className="skeleton-info-inner"></div>
                </div>
            </div>
            <div className="skeleton-img">
                <img src={'/assets/images/skeleton-img.svg'} alt="" />
            </div>
            <div className="skeleton-btn">
                <div className="skeleton-btn-inner"></div>
            </div>
        </div>
    )
};

export default CardSkeletion;