import React from "react";
import Navbar from "./Navbar";

function Header({name, bg}) {
    return(
        <section className="text-gray-700 body-font  " style={{background:`url(${bg}) center center `}}>
        <div className="container mx-auto flex px-3 py-12 items-center justify-center flex-col">
            <img className="lg:w-1/6 max-w-xs text-light	  md:w-1/6 w-1/6 mb-10 object-cover object-center rounded" alt="hero"
                 src="https://dummyimage.com/720x600"/>
                <div className="text-center  w-full">
                    <h1 className="title-font sm:text-4xl text-5xl font-old mb-8 font-medium text-white">{name}</h1>

                    <Navbar/>

                </div>

        </div>
    </section>
)
}


export default Header
