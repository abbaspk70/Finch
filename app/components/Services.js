'use client'
import React from 'react'
import {MdOutlineFastfood} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsGenderFemale, BsBagCheck} from 'react-icons/bs'
import {IoDiamondOutline} from 'react-icons/io5'
import {BiDrink} from 'react-icons/bi'

const servicesData = [
    {
    title: 'wedding photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <AiOutlineHeart/>
},
{
    title: 'birthday photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <BsGenderFemale/>
},
{
    title: 'food photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <MdOutlineFastfood/>
},
{
    title: 'fashion photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <BsBagCheck/>
},
{
    title: 'jewelery photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <IoDiamondOutline/>
},
{
    title: 'drink photography', description: 'Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non mi porta gravida metus.', icon : <BiDrink/>
},
]

export default function Services() {
  return (
    <div className='container text-[#5c5c5c]'>
        <h5 className='uppercase before:content-["-"] before:pr-2 before:text-[#57a4a4] mb-8 '>What we do</h5>
        <div className='md:columns-3'>
            {servicesData.map((item,index)=> {
                return (
                    <div key={index} className='flex gap-3 m-2'>
                        <h1 className='text-[#57a4a4]'>{item.icon}</h1>
                        <div>
                            <h5 className='capitalize'>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
