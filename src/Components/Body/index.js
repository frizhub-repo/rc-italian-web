import React from 'react'
import Carousel from "./Carousel";
import Menu from "./Menu";
import Promotions from "./Promotions";
import Gallery from "./Gallery";
import Testimonial from "./testimonial";
import './index.css'

function Body() {

    var scrollTo = function(ele){
        let offsetTop  = document.getElementById(ele).offsetTop;
        window.scrollTo({
            top: offsetTop-100,
            behavior: "smooth"
        });
    }
    return(
        <div className='container w-full px-5 mt-5   '>
            <div className=' w-full d-flex justify-content-center'>
                <Carousel/>
            </div>
            <div className='container d-flex  w-75'>
                <div className=' w-1/6 mt-3'>
                        <p className='mb-4 text-xs text-left font-weight-bold cursor-pointer' onClick={()=>scrollTo('menu')}>Menu</p>
                        <p className='mb-4 text-xs text-left font-weight-bold cursor-pointer' onClick={()=>scrollTo('promotions')}>Promotions</p>
                        <p className='mb-4 text-xs text-left font-weight-bold cursor-pointer' onClick={()=>scrollTo('gallery')}>User photos</p>
                        <p className='mb-4 text-xs text-left font-weight-bold cursor-pointer' onClick={()=>scrollTo('testimonial')}>Reviews</p>
                        <p className='mb-2 text-xs text-left font-weight-bold cursor-pointer' onClick={()=>scrollTo('info')}>Info</p>

                </div>
                <div className=' w-5/6'>
                    <div id='menu'>
                        <Menu />
                    </div>
                    <div id='promotions'>
                        <Promotions />

                    </div>

                    <div id='gallery'><Gallery /></div>
                    <section id='info' className="text-gray-700 body-font w-full">
                        <div className="container  py-4 mx-auto w-full">
                            <div className="flex flex-col text-left w-full mb-4">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Other informations</h1>
                                <div className='bg-gray-700 w-full p-3 '>
                                    <div className='mb-3'>
                                        <h6 className='text-gold font-weight-bold text-xs'>Info</h6>
                                        <p className='text-white'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gold font-weight-bold text-xs'>Info</h6>
                                        <p className='text-white'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gold font-weight-bold text-xs'>Info</h6>
                                        <p className='text-white'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gold font-weight-bold text-xs'>Info</h6>
                                        <p className='text-white'>info about the restaurant</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                    <div id='testimonial'>
                        <Testimonial />
                    </div>

                </div>

            </div>
        </div>
        )

}

export default Body
