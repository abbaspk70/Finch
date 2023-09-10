import Image from 'next/image'
import NavBar from './components/NavBar'
import Slideshow from './Slideshow'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FeaturePosts from './components/FeaturePosts'
import Footer from './components/Footer'

export default function Home() {
  return (
<div>
<NavBar/>
<Slideshow/>
<Intro/>
<Gallery/>
<Services/>
<Testimonials/>
<FeaturePosts/>
<Footer/>
</div>
  )
}
