import React from 'react'

const SpinnerLoader = () => {
    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center '>
            <div className='flex  h-auto justify-between '>
                <div className='flex justify-between  items-center h-full w-full animate-pulse'>
                    <div className='rounded-full  border-green-400 border-4 border-solid m-3 w-3 h-3 animate-bounce'></div>
                    <div className='rounded-full  border-green-400 border-4 border-solid m-3 w-3 h-3 animate-bounce'></div>
                    <div className='rounded-full  border-green-400 border-4 border-solid m-3 w-3 h-3 animate-bounce '></div>
                    <div className='rounded-full  border-green-400 border-4 border-solid m-3 w-3 h-3 animate-bounce '></div>
                    <div className='rounded-full  border-green-400 border-4 border-solid m-3 w-3 h-3 animate-bounce '></div>
                </div>
            </div>
        </div>
    )
}

export default SpinnerLoader