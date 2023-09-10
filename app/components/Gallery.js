'use client'
import { Button, Image } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState } from 'react';
const galleryData = [
    {
        title: 'ALL', target: '/', name: 'all'
    },
    {
        title: 'WEB DESIGN', name: 'web'
    }, {
        title: 'GRAPHIC DESIGN', name: 'graphic'
    }, {
        title: 'MOTION DESIGN', name: 'motion'
    }, {
        title: 'PHOTOGRAPHY', name: 'photography'
    },
]
const imagesData = [
    {
        imgUrl: '/gallery/p1.jpeg', category: 'web', title: 'Fringilla Fermentum Sem'
    },
    {
        imgUrl: '/gallery/p2.jpeg', category: 'graphic', title: 'Vestibulum Tellus'
    }, {
        imgUrl: '/gallery/p3.jpeg', category: 'photography', title: 'Consectetur Justo'
    }, {
        imgUrl: '/gallery/p4.jpeg', category: 'motion', title: 'Vehicula Amet'
    }, {
        imgUrl: '/gallery/p5.jpeg', category: 'web', title: 'Etiam Quam'
    }, {
        imgUrl: '/gallery/p6.jpeg', category: 'photography', title: 'Fusce Ornare Lorem'
    }, {
        imgUrl: '/gallery/p7.jpeg', category: 'web', title: 'Malesuada Dolor Nibh'
    }, {
        imgUrl: '/gallery/p8.jpeg', category: 'graphic', title: 'Sit Amet Ridiculus'
    }, {
        imgUrl: '/gallery/p9.jpeg', category: 'motion', title: 'Pellentesque Etiam Egestas'
    }, {
        imgUrl: '/gallery/p10.jpeg', category: 'graphic', title: 'Bibendum Purus'
    }, {
        imgUrl: '/gallery/p11.jpeg', category: 'motion', title: 'Bibendum Purus'
    },
];

export default function Gallery() {
    const [data, setData] = useState(imagesData);
    const [itemIndex, setItemIndex] = useState(0);

    const handleActive = (i) => {
        setActive(!isActive);
    }
    const handleClick = (e, i) => {
        setItemIndex(i);
        const filter = galleryData[i].name
        const updateData = imagesData.filter((el) => {
            if (filter === 'all') return
            return el.category === filter
        });
        if (updateData.length < 1) {
            setData(imagesData);
            return
        }
        setData(updateData);
    };
    return (
        <div className='container text-[#5c5c5c]'>
            <div className='flex flex-col lg:flex-row md:justify-between gap-3 my-3'>
                <h5 className='uppercase before:content-["-"] before:pr-1 before:text-sky-600'>Our Awesome Shots</h5>
                <Breadcrumb>
                    {galleryData.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={index} onClick={(e) => handleClick(e, index)} linkAs={"button"} className={`text-center font-semibold ${itemIndex===index? 'text-[#57a4a4]': ''}`} href="#">{item.title}</Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            </div>
            <div className='md:columns-2 lg:columns-3 transition-all duration-700'>
                {data.map((item, index) => {
                    return (
                        <figure key={index}>
                            <a href='/' className='group inline-block overflow-hidden relative transition-all duration-700 bg-black w-full'>
                                <div className='absolute z-50 w-full h-full p-12 transition-all duration-300 opacity-[0] bg-black/70 border-2 group-hover:opacity-100'>
                                    <div className='text-center top-[50%] w-full left-0 absolute -mt-3'>
                                        <span className='border-2 px-3 py-2 font-bold text-white text-sm'>{item.title}</span>
                                    </div>
                                </div>
                                <Image className='group-hover:scale-125 scale-100 w-full transition duration-700 cursor-pointer object-cover' src={item.imgUrl} />
                            </a>
                        </figure>
                    )
                })}

            </div>
            <div className='text-center py-5 my-10'>
                <h3 className='before:content-["-"] before:text-sky-600 before:pr-2 after:pl-2 after:text-sky-600 after:content-["-"] mb-3'>LET'S MAKE SOMETHING GREAT TOGETHER</h3>
                <div className='flex items-center justify-center'>
                    <a className='mx-2 w-[155px] bg-[#57a4a4] px-3 py-2 text-white no-underline' href='#'>View More Work</a>
                    <a className='mx-2 w-[155px] bg-[#a0688b] px-3 py-2  text-white no-underline' href='/'>Get in Touch</a>
                </div>
            </div>
        </div>
    )
}
