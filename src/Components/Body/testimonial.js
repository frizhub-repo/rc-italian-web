import React from 'react'
import Carousel from "react-multi-carousel";

function Testimonial() {

    const testimonialsArr=[
        {
            name:'Emanuele S',
            date:'October 1 2020',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'
        },
        {
            name:'Emanuele S',
            date:'October 1 2020',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'
        },
        {
            name:'Emanuele S',
            date:'October 1 2020',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
                'pulvinar facilisis justo mollis'
        }
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
                        items: 2,
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
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >

                {
                    testimonialsArr.map((item, index) => (
                        <div key={index} className="max-w-md py-4 border-1 border-gray-700  px-8 bg-white ml-2 rounded-lg my-20">
                            <div className="flex justify-center md:justify-end -mt-16">
                                <img className="w-20 h-20 object-cover rounded-full "
                                     src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                            </div>
                            <div className='border-1 border-gray-700'>
                                <h2 className="text-gray-800 text-lg font-semibold">{item.name}</h2>
                                <p className="mt-2 text-xs text-gray-600">{item.date}</p>
                                <p className="mt-2 text-xs text-gray-600">{item.text}</p>
                            </div>

                        </div>
                    ))
                }

            </Carousel>
        </div>)
}

export default Testimonial
