'use client'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const testimonialData = [
    {
        comments: 'Cras justo odio, dapibus facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient.', user: 'Coriss Ambady',
    },
    {
        comments: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis id vestibulum. Donec sed odio dui. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget.', user: 'Barclay Widerski',
    },
    {
        comments: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Donec id elit non mi porta gravida at eget metus.', user: 'Elsie Spear'
    },
    {
        comments: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Nullam dolor nibh ultricies vehicula elit vulputate tristique egestas. Praesent commodo cursus magna, vel scelerisque.', user: 'Nikolas Brooten'
    },
]

export default function Testimonials() {
    return (
        <div className='static bg-fixed bg-[url("/bgTestimonial/parallax1.jpeg")] bg-no-repeat my-10 bg-cover text-[#eaeaea]'>
            <div className='container text-center py-20'>
                <h5 className='before:content-["-"] before:text-sky-600 before:pr-2 after:content-["-"] after:text-sky-600 after:pl-2 uppercase mb-16'>What Do Our Customers Think</h5>
                <Carousel className=' bg-black/30' indicators={false} touch={true}>
                    {testimonialData.map((item,index)=> {
                        return (
                         <Carousel.Item className='' key={index}>
                            <blockquote className='before:content-[open-quote] text-8xl before:left-10 before:absolute  after:content-[close-quote] after:absolute after:right-10 after:top-0 before:md:px-10 after:md:px-10'>
                            <p className='text-xl py-10 px-20 lg:px-32'>{item.comments}
                            <small className='text-sm uppercase block mt-3'>{item.user}</small>
                            </p>
                            </blockquote>
                         </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}
