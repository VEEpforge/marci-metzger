import Image from 'next/image'
import background from '../../assets/background.jpg'
import React from 'react'

const Underlay = () => {
  return (
    <div className='min-h-screen min-w-screen fixed inset-0 z-0'>
      <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
      <Image
        src={background}
        alt='Description of image'
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default Underlay