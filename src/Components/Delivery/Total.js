import React, {useState} from 'react'

function Total({items}) {

    const [total,setTotal]=useState(0)

    return(
        <div className='p-2 divide-y divide-gray-300'>
            <div className='py-2 my-0'>
                <p className='text-gray-300 text-xs'>Total cost</p>
                <span className='text-3xl text-gold'>{total} $</span>
            </div>
        </div>
    )

}
