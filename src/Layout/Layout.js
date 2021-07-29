import React from 'react'
import Navbar from '../Components/header/Navbar'

function Layout({children}) {
    return (
        <div>
            <Navbar />
        <main>{children}</main>
            
        </div>
    )
}

export default Layout
