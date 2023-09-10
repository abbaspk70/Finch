'use client'
import React from 'react'
import { Image } from 'react-bootstrap'
import { AiOutlineLink } from 'react-icons/ai'

const featurePostsData = [
    {
        title: 'Adipiscing Mollis Inceptos', img: '/posts/b1.jpeg', date: '13 Nov.2012', comments: '3 comments', body: 'Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.',
    },
    {
        title: 'Ridiculus Ultricies Pellentesque', img: '/posts/b2.jpeg', date: '02 Jan.2013', comments: '5 comments', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo.'
    },
    {
        title: 'Tristique Purus Pharetra', img: '/posts/b3.jpeg', date: '14 Mar.2013', comments: '2 comments', body: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.'
    },
    {
        title: 'Inceptos Porta Nibh', img: '/posts/b4.jpeg', date: '23 Dec.2013', comments: '7 comments', body: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
    },

]
export default function FeaturePosts() {
    return (
        <div className='container text-[#5c5c5c]'>
            <h5 className='before:content-["-"] before:text-sky-600 before:pr-2 uppercase mb-10'>our featured posts</h5>
            <div className='lg:columns-2 transition-all duration-300'>
                {featurePostsData.map((item, index) => {
                    return (
                        <div className='md:flex gap-10 mb-10' key={index}>
                            <figure className='md:w-[50%]'>
                                <a href='/' className='relative group overflow-hidden inline-block no-underline hover:text-black'>
                                    <span className='absolute bg-black/70 text-center w-full h-full text-2xl before:absolute before:content-[""] before:border-2 before:text-white before:font-bold before:top-[50%] before:left-[50%] before:-ml-6 before:-mt-6 before:inline-block before:text-center before:p-5 z-[500] opacity-[0] group-hover:opacity-100 overflow-hidden max-w-full transition-all duration-300'><AiOutlineLink className='absolute left-[50%] top-[50%] text-center -ml-4 -mt-4 text-white group-hover:opacity-100 z-[200]' /></span>
                                    <Image className='w-full aspect-square object-cover transition-all duration-700 group-hover:scale-125' src={item.img} />
                                </a>
                            </figure>
                            <div>
                                <h4>{item.title}</h4>
                                <p className='text-md font-light'><span>{item.date}</span> / <span>{item.comments}</span></p>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
