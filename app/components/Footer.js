import React from 'react'
import {BiRss, BiLogoTwitter, BiLogoFacebook,BiLogoDribbble,BiLogoPinterestAlt} from 'react-icons/bi'

const socialLinks = [
    {
    title: 'rss', link: '/rss', icon: <BiRss/>
},
{
    title: 'twitter', link: '/twitter', icon: <BiLogoTwitter/>
},
{
    title: 'facebook', link: '/facebook', icon: <BiLogoFacebook/>
},
{
    title: 'dribble', link: '/rss', icon: <BiLogoDribbble/>
},
{
    title: 'pinterest', link: '/pinterest', icon: <BiLogoPinterestAlt/>
},

]

export default function Footer() {
    return (
        <footer className='bg-[#1e1f20] text-[#b9b9b9]'>
            <div className='container text-center'>
                <div className='mx-16 md:mx-28 lg:mx-56 flex flex-col gap-3 py-5'>
                    <h5 className='before:content-["-"] before:text-sky-600 before:pr-2 after:content-["-"] after:text-sky-600 after:pl-2 uppercase'>GET IN TOUCH WITH US</h5>
                    <p>Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio. Curabitur blandit tempus porttitor vollisky inceptos mollisestor.</p>
                    <div className='flex items-center justify-center gap-3'>
                        {socialLinks.map((item,index )=> {
                            return (
                                <a key={index} href={item.link} className={`${item.title === 'rss' && 'text-[#faaa5e] hover:bg-[#faaa5e] hover:text-white border-[#faaa5e]'} ${item.title === 'twitter' && 'text-[#70c2e9] hover:bg-[#70c2e9] hover:text-white border-[#70c2e9]'} ${item.title === 'facebook' && 'text-[#677fb5] hover:bg-[#677fb5] hover:text-white border-[#677fb5]'} ${item.title === 'dribble' && 'text-[#e299c2] hover:bg-[#e299c2] hover:text-white border-[#e299c2]'} ${item.title === 'pinterest' && 'text-[#d8545d] hover:bg-[#d8545d] hover:text-white border-[#d8545d]'} text-2xl border-[2px] p-1 transition-all duration-300`}>{item.icon}</a>
                            )
                        })}
                    </div>
                    <p>
                        <span>Moonshine St. 14/05 Light City</span>
                        <span className='before:content-["/"] before:px-2 after:px-2 after:content-["/"]'>+00 (123) 456 78 90</span>
                        <span><a className='text-[#eaeaea] hover:text-yellow-300 no-underline' href='mailto:["first.last@email.com"]'>first.last@email.com</a></span></p>
                </div>
            </div>
            <div className='bg-[#1a1a1b] text-center py-10'>© 2014 Finch. All rights reserved.</div>
        </footer>
    )
}
