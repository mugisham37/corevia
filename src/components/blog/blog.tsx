import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

const Blog = () => {
  return (
    <section className="section_latest-blog">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-medium">
          <div className="text-align-center">
            <div className="text-tag scroll-into-view"
              style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              blog &amp; articles
            </div>
            <div className="spacer-medium"></div>
            <h2 className="text-5xl scroll-into-view"
              style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              Latest blogs
            </h2>
          </div>
          <div className="spacer">
            <div style={{height: '5rem'}} className="spacer-desktop"></div>
            <div style={{height: '3rem'}} className="spacer-tablet"></div>
            <div style={{height: '2rem'}} className="spacer-mobile"></div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="_3column_grid w-dyn-items">
              {blogPosts.map((post) => (
                <div key={post.slug} role="listitem" className="w-dyn-item">
                  <Link
                    data-w-id="86b266c2-6daa-c6a8-41a9-090f9a7e33a2"
                    href={`/blog/${post.slug}`}
                    className="blog_link-block w-inline-block">
                    <div className="blog_card-img scroll-into-view"
                      style={{opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                      <img style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                        loading="lazy" alt={post.title}
                        src={post.image}
                        className="img" />
                    </div>
                    <div className="blog_card-info scroll-into-view"
                      style={{opacity: 0, transform: 'translate3d(0px, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                      <div className="text-color-secondary">{post.date}</div>
                      <h3 className="h5">{post.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>
    </section>
  )
}

export default Blog
