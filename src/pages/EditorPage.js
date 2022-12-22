import React ,{useRef,useState}from 'react'
import Logo from '../component/Logo'

import AvatarFixed from '../component/AvatarFixed'
import Editor from '../component/Editor'
import { useParams } from 'react-router-dom'
import { useLocation,useNavigate,Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { initSocket } from '../socket'
import ACTIONS from '../Action'
import { toast } from 'react-toastify'



const EditorPage = () => {
  //toggle 
  const mobileMenuRef = useRef()
  const toggleRef1 = useRef()
  const toggleRef2 = useRef()
  const toggleRef3 = useRef()
  const handleToggle = ()=>{
      toggleRef1.current.classList.toggle("rotate-45")
      toggleRef2.current.classList.toggle("hidden")
      toggleRef3.current.classList.toggle("-rotate-45")
      toggleRef3.current.classList.toggle("-translate-y-2")

      mobileMenuRef.current.classList.toggle("hidden")
  }

  const [clientsRun,setClients] = useState([])
  // const users = [
  //   { name : "Amit Prajapati"  ,id : "1"},
  //   { name : "Raj Prajapati"  ,id : "2"},
  //   { name : "Amit Prajapati"  ,id : "3"},
  //   { name : "Amit Prajapati"  ,id : "4"},
  //   { name : "Hemlata Prajapati"  ,id : "5"},
  // ]

  const location = useLocation()
  console.log(location)
  const reactNavigator = useNavigate()
  const {roomId} = useParams();
  
    
  const socketRef = useRef(null)
  useEffect(()=>{
      const init = async ()=>{
      socketRef.current = await initSocket();
      socketRef.current.on('connect_error',(err)=>handleErrors(err))
      socketRef.current.on('connect_failed',(err)=>handleErrors(err))

      function handleErrors(e){
          console.log('Socket error',e);
          toast.error('Socket Connection failed, try again later')
          reactNavigator("/")
      }

      socketRef.current.emit(ACTIONS.JOIN,{
       roomId,
       username : location.state?.userName
      })

      //listening for joined event
      socketRef.current.on(ACTIONS.JOINED,
        ({clients,username,socketId})=>{
            if(username !== location.state?.userName){
              toast.success(`${username} joined the room`)
              console.log(`${username} joined`)
            }
            setClients(clients)
      })

      //listening for disconnected
      socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
          toast.success(`${username} left the room`)
          setClients((preve)=>{
            return preve.filter((client) => client.socketId !== socketId)
          })
      })

      
    }
      init();

    return ()=>{
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED)
      socketRef.current.off(ACTIONS.DISCONNECTED)
    }
  },[])

  console.log(clientsRun)

  if(!location.state){
     return <Navigate to="/"/>
  }

  

    

  return (
    <div className='bg-zinc h-screen w-screen grid md:grid-cols-[160px_minmax(200px,_1fr)] min-w-[180px]'>
      <div className='bg-gray-900 md:px-2 md:py-3 p-3'>
        <div className=' md:border-b-2 pb-3 flex items-center justify-between'>
          <Logo />

          <div onClick={handleToggle} className="md:hidden">
              <div className='w-8 h-1 bg-white mt-1 rounded transition-all' ref={toggleRef1}></div>
              <div className='w-8 h-1 bg-white mt-1 rounded transition-all' ref={toggleRef2}></div>
              <div className='w-8 h-1 bg-white mt-1 rounded transition-all' ref={toggleRef3}></div>
          </div>

        </div>

        <div className='w-full max-w-sm absolute bottom-0 top-20 bg-slate-800 rounded z-50 right-0 p-3 min-w-[180px] hidden md:block transition-all md:relative md:w-auto md:bg-transparent md:p-0 md:top-0 md:min-w-fit' ref={mobileMenuRef}>
        <p className='text-gray-100 text-sm pt-1 pb-2 cursor-default select-none'>Connected</p>
        <div className=' h-[calc(100vh-210px)] md:h-[calc(100vh-200px)] overflow-y-auto'>
         
        <div className='flex flex-wrap  items-start gap-2 md:justify-around text-white '>

          {
            clientsRun?.map((el =>{
              return (
                <AvatarFixed name={el.username} key={el.socketId+el.username}/>
              )
            }))
          }  
        </div>
           
        </div>
        <div className='text-white h-20 flex flex-col justify-between'>
            <button className='bg-white text-black text-sm w-full rounded py-1 h-8'>Copy Room Id</button>
            <button className='bg-red-800 w-full rounded py-1 h-8'>Leave</button>
        </div>
        </div>
      </div>


      <div className='bg-gray-800'>
          <Editor/>
      </div>
    </div>
  )
}

export default EditorPage