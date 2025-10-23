import Image from 'next/image'
import Profile from '../../assets/marci-profile.png'
import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <section className='h-screen max-w-screen flex flex-col lg:flex-row bg-background font-inter'>
      <div className='w-3/4 lg:w-1/2 h-full flex items-center justify-center'>
        <Image
          src={Profile}
          alt='Marci Metzger'
          className='w-3/4'
        />
      </div>
      <div className='lg:w-1/2 h-full flex flex-col gap-8 items-center justify-center'>
      <div className='flex flex-col items-center gap-2 justify-center'>
        <h2 className='text-lg font-light'>REALTOR FOR NEARLY 3 DECADES!</h2>
        <h1 className='text-4xl font-sans'>MEET <span className=''>MARCI METZGER</span></h1>
      </div>
        <p className='w-3/4 text-center italic text-muted-foreground'>
          &quot;I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there&apos;s a place for you here!
          I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me.&quot;
        </p>
        <p className='w-3/4 text-center'>
          Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.
        </p>
        <Button
          variant='outline'
          className='font-inter rounded-none'
        >LEARN MORE</Button>
      </div>
    </section>
  )
}

export default About