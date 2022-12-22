import React, { useState } from 'react'
import Avatar from "react-avatar"

const AvatarFixed = ({ name }) => {
    let nameDisplay = "Unknown"
    let str = name;
    // let nameArray = str.trim().split(" ")

    // if (nameArray[0].length <= 6) {
    //     let str2 = nameArray[0] + " " + nameArray[1][0]
    //     nameDisplay = str2
    // }
    // else {
    //     let str3 = nameArray[0].slice(0, 8)
    //     nameDisplay = str3
      
    // }
    
    return (
        <>
            <div className='flex flex-col items-center cursor-default select-none '>
                <Avatar name={name} size={40} round={true} />
                <p className='text-sm '>{name}</p>
            </div>
        </>
    )
}

export default AvatarFixed