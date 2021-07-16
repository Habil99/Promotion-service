import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="main-wrapper">
                <div className="base-container">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
