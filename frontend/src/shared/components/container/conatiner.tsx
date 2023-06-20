import React from 'react'

const Conatiner = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <div 
    className='w-[100%]
     md:w-[95%]
        lg:w-[80%]
        xl:w-[70%]
        2xl:w-[60%]
        mx-auto
        my-5
        px-5
        py-5
        rounded-md
        '
    >
        {children}
    </div>
  )
}

export default Conatiner