import React, { useEffect } from 'react'
import { useParams } from 'react-router';

const Detail = () => {
    const { newsId } = useParams();

    useEffect(() => {
        
    })
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default Detail;
