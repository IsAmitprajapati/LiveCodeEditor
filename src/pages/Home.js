import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import {v4 as uuid4 } from 'uuid'
import Logo from '../component/Logo'

const Home = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        roomID: "",
        userName: "",
    })

    const handleOnChange = (e) => {
        // const {name,value} = e.target
        setUser((preve) => {
            return {
                ...preve,
                [e.target.name]: e.target.value
            }
        })
    }
    console.log(user)

    const handleJoin = (e) => {
        e.preventDefault()
        if (user.roomID && user.userName) {
            toast.success("Room ID Created Successfully!!")
            navigate(`Editor/${user.roomID}`,{
                state : user
            })
        }
        else {
            toast.error("Room Id & Username are required!!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const handleCreateRoomID = ()=>{
        setUser((preve)=>{
            return{
                ...preve,
                roomID : uuid4()
            }
        })
    }
    return (
        <div className='flex justify-center items-center h-screen  bg-slate-900'>
            <div className='bg-slate-800 px-4 py-5 rounded'>
                <Logo/>
                <p className='text-gray-200 mt-4 select-none'>Paste Invitation ROOM ID</p>
                <form onSubmit={handleJoin} className="flex flex-col  max-w-96">
                    <input
                        type="text"
                        placeholder="Room ID"
                        aria-label='Room ID'
                        className='my-2 px-2 py-1 w-full outline-none border-none rounded text-sm'
                        onChange={handleOnChange}
                        name="roomID"
                        value={user.roomID}

                    />
                    <input
                        type="text"
                        placeholder="Username"
                        aria-label='Username'
                        className='my-2 px-2 py-1 w-full outline-none border-none rounded text-sm'
                        onChange={handleOnChange}
                        name="userName"
                        value={user.userName}
                    />
                    <button
                        className='self-end px-3 py-1 my-1 select-none bg-green-500 drop-shadow text-white rounded hover:bg-green-600'
                        onClick={handleJoin}
                    >Join</button>
                </form>
                <div className='mt-3 whitespace-normal'>
                    <p className='text-gray-300 text-sm select-none'>if you don't have an invite then create
                        <span 
                            className=' text-green-500 p-1 text-sm  hover:underline cursor-pointer '
                            onClick={handleCreateRoomID}
                            
                            >new room</span></p>
                </div>
            </div>
        </div>
    )
}

export default Home