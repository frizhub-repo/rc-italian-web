import React from 'react'

function Menu(){
    return(
        <div className='py-2  place-content-start w-full px-2 '>
            <h2 className=' text-black font-weight-bold text-lg-left w-full'>Reasturant menu</h2>
            <p className=' text-xs text-left font-weight-bold mb-1 w-full'>Chef Mario Rossi</p>
            <p className=' text-xs text-left font-weight-bold w-full'>Average price 38$</p>
            <div className='divide-y divide-gray-100 mr-0  w-full min-w-2/3  '>
                <div className='d-flex justify-content-around w-full mb-0'>
                    <div className='flex-grow-1 py-2 '>
                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                    </div>
                    <div>
                        <span className='text-xl  font-weight-bold text-gold text-right'>15$</span>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-full mt-0'>
                    <div className='flex-grow-1'>
                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                    </div>
                    <div>
                        <span className='text-xl font-weight-bold text-gold text-right'>15$</span>
                    </div>
                </div>
                <div className='d-flex justify-content-around w-full mt-0'>
                    <div className='flex-grow-1'>
                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                    </div>
                    <div>
                        <span className='text-xl font-weight-bold text-gold text-right'>15$</span>
                    </div>
                </div>
                <div className=' text-left w-full mt-0'>

                        <h6 className='text-left font-weight-bold w-full'>Food Options</h6>
                        <p className='text-xs text-left w-full'>vegan</p>

                        <button
                            className="  inline-flex text-white bg-gray-900 font-weight-light hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-sm">View complete menu
                        </button>



                </div>
            </div>

        </div>
    )
}

export default Menu
