import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout
