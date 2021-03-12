import React from 'react'

function Carousel() {
    return(
        <div className="text-gray-900   w-75 mb-2 	bg-gray-100 px-0 py-0">
            <div className="container ml-0 flex   py-0 px-0 md:flex-row flex-col ">
                <div className="lg:max-w-lg px-0 w-75 lg:w-full ml-0 md:w-1/2 w-5/6 md:mb-0">
                    <img className="object-cover px-0 object-center ml-0 max-h-80 w-full " alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
                <div className="lg:flex-grow leading-relaxed divide-y divide-gray-300  md:w-1/2  ml-0 lg:min-h-80 max-h-80	px-4 py-4 flex flex-col md:items-start md:text-left  ">
                    <div className=' d-flex justify-content-around w-full px-0 ml-0  '>
                        <h2 className=" sm:text-3xl  text-3xl mb-2 flex-grow -1   ">Arcane</h2>
                        <h2 className="sm:text-3xl  text-3xl mb-2  ">8.3<span className='text-xs '>/10</span></h2>
                    </div>
                    <div className=' d-flex justify-content-around w-full  py-1'>

                            <p className='w-50 text-xs flex-grow-1 leading-relaxed'>Viale san Michele del carso 7 Milan 20144</p>


                            <span className=' text-xs text-gold	  '>See on map</span>


                    </div>
                    <div className='w-full'>
                        <p className=" leading-relaxed text-xs w-full py-1">Average price 38 accepts returns</p>
                        <p className=" leading-relaxed text-s w-full text-gold py-1 px-1 border-l-4 border-yellow-400   font-weight-bold">-50% at checkout</p>

                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-gray-900 font-weight-light hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-sm">Book nup to 50%
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Carousel
