import React from 'react'
import Hero from '@/components/landing/hero'
import About from '@/components/landing/about'
import Benefits from '@/components/landing/benefits'
import Feature from '@/components/landing/feature'
import Core from '@/components/landing/core'
import Pricing from '@/components/landing/pricing'
import Testimonial from '@/components/landing/testimonial'
import Blog from '@/components/landing/blog'
import Cta from '@/components/landing/cta'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <Feature />
      <Core />
      <Pricing />
      <Testimonial />
      <Blog />
      <Cta />
      <Footer />
    </div>
  )
}

export default Page