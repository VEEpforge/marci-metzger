'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { background_images } from '@/assets'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const Underlay = () => {
  return (
    <div className='min-h-screen min-w-screen fixed inset-0 z-0'>
      <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
      <Carousel
        // plugins={[plugin.current]}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          Fade(),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          { background_images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
              <Image
                src={image}
                alt='Description of image'
                // layout='fill'
                fill={true}
                objectFit='cover'
              />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Underlay