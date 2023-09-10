'use client'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export default function Slideshow() {
  return (
    <div className='container py-5'>
    <Carousel className=''>
    <Carousel.Item>
        <Image className='zoomout d-block w-100 aspect-video' src='/images/slider-bg1.jpeg' alt=''/>
    </Carousel.Item>
    <Carousel.Item className='relative'>
        {/* <Image className='d-block w-100 aspect-video z-0' src='/images/slider-bg2.jpeg' alt=''/> */}
        <video loop autoPlay={true} muted className='d-block w-100 aspect-video' poster='images/slider-bg2.jpeg'>
            <source src='images/joris_schaap--dragonfly_in_ultra_slow_motion.mp4' type='video/mp4'/>
            <source src='images/joris_schaap--dragonfly_in_ultra_slow_motion.webm' type='video/webm'/>
        </video>
    </Carousel.Item>
    <Carousel.Item>
        <Image className='d-block w-100 aspect-video' src='/images/slider-bg3.jpeg' alt=''/>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}
