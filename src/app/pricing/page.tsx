import React from 'react'
import Pricing from '@/components/pricing/pricing'
import Plans from '@/components/pricing/plans'
import About from '@/components/pricing/about'
import Testimonial from '@/components/testimonial'
import Blog from '@/components/blog'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

const page = () => {
  return (
    <>
      <Pricing />
      <Plans />
      <About />
      <Testimonial />
      <Blog />
      <Cta />
      <Footer />
    </>
  )
}

export default page