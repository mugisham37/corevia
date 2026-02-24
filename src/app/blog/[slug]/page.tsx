import React from 'react'
import Article from '@/components/blog/article'
import BlogRelated from '@/components/blog/blog_related'
import Footer from '@/components/footer'

const page = () => {
  return (
    <>
      <Article />
      <BlogRelated />
      <Footer />
    </>
  )
}

export default page