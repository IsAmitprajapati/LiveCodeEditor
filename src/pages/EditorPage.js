import React from 'react'
import Logo from '../component/Logo'

import AvatarFixed from '../component/AvatarFixed'
import Editor from '../component/Editor'




const EditorPage = () => {



  const users = [
    { name : "Amit Prajapati"  ,id : "1"},
    { name : "Raj Prajapati"  ,id : "1"},
    { name : "Amit Prajapati"  ,id : "1"},
    { name : "Amit Prajapati"  ,id : "1"},
    { name : "Hemlata Prajapati"  ,id : "1"},
  ]


  return (
    <div className='bg-zinc h-screen w-screen grid grid-cols-[160px_minmax(200px,_1fr)]'>
      <div className='bg-gray-900 px-2 py-3'>
        <div className=' border-b-2 pb-3'>
          <Logo />
        </div>
        <p className='text-gray-100 text-sm pt-1 pb-2 cursor-default select-none'>Connected</p>
        <div className='flex flex-wrap justify-around gap-2 text-white'>

          {
            users.map((el =>{
              return (
                <AvatarFixed name={el.name} key={el.id}/>
              )
            }))
          }  
        </div>
      </div>


      <div className='bg-gray-800'>
          <Editor/>
      </div>
    </div>
  )
}

export default EditorPage