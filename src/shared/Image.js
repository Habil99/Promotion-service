import React, { useEffect, useState } from 'react'

const Image = ({ source }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [loading])

    return (
        <>
            {!loading ? <img src={source} alt="Promotion Service" /> : 
                <img src={'/assets/image/background-image.png'} alt="Promotion Service" />}
        </>
    )
}

export default Image
