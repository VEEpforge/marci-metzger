'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { headlines, stats } from '@/assets/constants'

const HeadlinesSection = () => {
  return (
    <section className="max-w-screen h-auto flex flex-col items-center justify-center bg-background pt-16 px-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true }}
        className='w-full pb-16'
      >
        <CarouselContent>
          { headlines.map((item, index) => (
            <CarouselItem key={index} >
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl md:text-4xl uppercase font-sans mb-4">{item.heading}</h2>
                <p className="text-muted-foreground font-inter max-w-2xl">{item.subheading}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='grid grid-cols-3 gap-4 lg:gap-20 w-full max-w-5xl'>
        { stats.map((item, index) => (
          <div key={index} className='flex flex-col items-center lg:border-t lg:border-b lg:py-8'>
            <h3 className='text-xl lg:text-2xl font-sans font-medium'>{item.stat}</h3>
            <p className='text-muted-foreground font-inter'>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeadlinesSection