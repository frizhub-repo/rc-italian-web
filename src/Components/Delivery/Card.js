import React from "react";

function Card({img}) {
    return(
        <div className={`   w-full mb-2 mr-4 h-72	 px-0 py-4 ${img}`} >
            <div className="container ml-0 flex   py-0 px-0 md:flex-row flex-col ">

                <div className="  -ml-2 lg:min-h-80 max-h-80	mt-2 flex flex-col md:items-start md:text-left  ">
                    <span className="text-sm mb-2 py-1 px-2 text-y text-white font-weight-bold rounded-pill bg-red-500  ">20%</span>

                </div>
                <div className='ml-2 mt-2 pl-4'>
                    <h2 className=" text-sm font-weight-bold mb-2 flex-grow -1 text-white text-left  ">Greenport Brewery otherside IPA</h2>
                    <p className='text-white font-weight-light text-xs text-left max-w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                        pulvinar facilisis justo mollis,</p>
                </div>
            </div>
        </div>
    )
}

export default Card
