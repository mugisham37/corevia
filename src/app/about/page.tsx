import React from 'react'
import Hero from '@/components/about/hero'
import About from '@/components/about/about'
import Benefits from '@/components/about/benefits'
import Teams from '@/components/about/teams'
import Testimonials from '@/components/about/testimonials'
import Blog from '@/components/about/blog'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <Teams />
      <Testimonials />
      <Blog />
      <Cta />
      <Footer />
    </div>
  )
}

export default page