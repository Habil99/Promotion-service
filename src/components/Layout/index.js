import React, { useRef, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { scrollToTop } from '../../assets/utils'
import { useScrollTop } from '../../hooks/useScrollTop'

const Layout = (props) => {
    const scrollToButton = useRef();
    const [scrollAmount, setScrollAmount] = useState(0);
    const [visible, setVisible] = useState(false);

    useScrollTop({
        setVisible,
        scrollAmount,
        setScrollAmount
    });

    return (
        <div className="layout" id='backto-top'>
            <Navbar />
            <div className="main-wrapper">
                <div className="base-container">
                    {props.children}
                </div>
            </div>
            {visible && (
                <div className="fixed-button" ref={scrollToButton} onClick={() => scrollToTop(scrollAmount)}>
                    <button type="button">
                        <img src={'/assets/images/to-up.svg'} alt="" />
                    </button>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Layout;
