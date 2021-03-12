import React from 'react'
import Header from "../Navbar";
import Body from "../Body";
import Footer from "../Footer";

function Home() {
    return(
        <div >
            <Header name={'Table reservation'} bg={'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'} />
            <Body/>
            <Footer bg={'gray-300'}/>
        </div>
    )
}

export default Home
