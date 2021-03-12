import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Promotions() {

    const promotionsArr=[
        {title:'-50% at checkout ',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
            'pulvinar facilisis justo mollis'},
        {title:'-50% at checkout ',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'},
        {title:'-50% at checkout ',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'},
        {title:'-50% at checkout ',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'},
    ]



    return(
        <div className='w-full '>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="carousel-item-padding-30-px"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >

                {
                    promotionsArr.map((video, index) => (
                        <div key={index} className="p-3 mt-5 text-left  pt-3 m-2 border-1 border-gray-300 shadow-sm">
                            <h4 className=" text-xs font-weight-bold"> {video.title}</h4>
                            <p className=' text-xs font-weight-light '>{video.text}</p>
                            <button className='bg-black text-white text-xs rounded-pill text-center text-xs p-1 font-weight-light'>Book this promotion</button>
                        </div>
                    ))
                }

            </Carousel>
        </div>
    )
}
export default Promotions
