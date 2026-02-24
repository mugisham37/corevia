import React from 'react'
import Hero from '@/components/feature/hero'
import Core from '@/components/feature/core'
import Features from '@/components/feature/features'
import About from '@/components/feature/about'
import Testimonial from '@/components/feature/testimonial'
import Blog from '@/components/feature/blog'
import CTA from '@/components/feature/cta'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Core />
      <Features />
      <About />
      <Testimonial />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default page