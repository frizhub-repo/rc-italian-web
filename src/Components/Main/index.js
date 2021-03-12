import React from "react";
import Hero from "./Hero";
import img1 from '../../images/img1.png'
import Section2 from "./section-2";
import restaurant from '../../images/restauran.png'
import './index.css'
import Form from "./Form";
import Gallery from "../Gallery";
import Footer from "../Footer";
function Main() {
return(
    <div>
        <Hero/>
        <section className="text-gray-700 body-font ">
            <div className=" mx-auto flex px-40 py-18 md:flex-row h-50 flex-col items-center">
                <div className="   w-2/3 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={img1}/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 -ml-4 pl-4 flex flex-col md:items-start md:text-left items-center max-w-1/3 text-center">
                    <h1 className="  text-6xl font-script -mb-1 font-weight-light text-gold">Discover
                    </h1>
                    <h1 className=" sm:text-4xl text-3xl font-old  -mt-3">Our History
                    </h1>
                    <p className="mb-8 leading-relaxed text-left text-xs">Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                        air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-gold border-0 py-2 px-4 focus:outline-none rounded-pill text-xs ">OUR MENU
                        </button>
                        <button
                            className="ml-4 inline-flex text-white bg-black border-0 py-2 px-4 focus:outline-none  rounded-pill text-xs">OUR STORY
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Section2/>
        <section className="text-gray-700 body-font  mt-0 " style={{background:'url(https://images.unsplash.com/photo-1594225538408-17c56b2ed3c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80) center center'}}>
            <div className="w-full flex bg-gradient-to-r from-white via-gray-50 mt-0 py-24 items-center justify-center flex-col ">
                <div className="container mx-auto flex flex-col w-1/3 h-25 px-5 py-18 justify-center items-center">
                    <img className="h-16 w-16 mb-10 object-cover object-center rounded" alt="hero"
                         src={restaurant}/>
                </div>

                <div className="text-center lg:w-2/3 w-full">
                        <h1 className="font-script text-gold sm:text-5xl text-7xl -mb-4 font-medium text-gold">Delicious menu</h1>
                    <h1 className="font-old  sm:text-4xl text-5xl mb-1 font-medium text-gray-900">Our menu</h1>

                    <p className="mb-1  leading-relaxed font-weight-bolder -mt-2">Discover our delicious menu</p>
                        <div className="flex justify-center py-3">
                            <button
                                className="inline-flex rounded-pill px-8 py-2 text-white  border-0 py-2 px-6 focus:outline-none bg-black text-black rounded text-sm">Photo gallery
                            </button>
                            <button
                                className="ml-4 inline-flex text-gray-700 rounded-pill px-8 py-2 bg-gold border-0 py-2 px-6 focus:outline-none text-white hover:bg-gray-300 rounded text-sm">Our menu
                            </button>
                        </div>
                    </div>
            </div>
        </section>
        <section className="text-gray-700 body-font  mb-2	z-index-0 bg-pattern  py-24 w-full mb-4 ">
            <div className="container px-5 py-21 mx-auto flex  flex-wrap justify-content-center">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="font-script text-gold sm:text-5xl text-6xl  font-medium text-gray-900">Reservation</h1>
                    <h1 className="font-old  sm:text-4xl text-6xl -mt-8 mb-0 font-medium text-gray-900">Book a table</h1>
                    <p className='text-center text-xs text-gray-900 mt-2 font-weight-bolder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

            </div>

        </section>
        <section className='-mt-28 z-index-7 mb-8'>
            <Form/>
        </section>
        <Gallery/>
        <Footer bg={'white'}/>



    </div>
)
}

export default Main
