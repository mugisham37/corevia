import { notFound } from 'next/navigation'
import Article from '@/components/blog/article'
import BlogRelated from '@/components/blog/blog_related'
import Footer from '@/components/footer'
import { getBlogBySlug, getAllBlogSlugs } from '@/data/blogData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Article post={post} />
      <BlogRelated currentSlug={slug} />
      <Footer />
    </>
  )
}