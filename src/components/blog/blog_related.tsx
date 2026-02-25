import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

interface BlogRelatedProps {
  currentSlug: string
}

const BlogRelated = ({ currentSlug }: BlogRelatedProps) => {
  const relatedPosts = blogPosts.filter(post => post.slug !== currentSlug).slice(0, 3)

  return (
    <section className="section_blog-related">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-medium">
          <div className="text-align-center">
            <div className="text-tag text-color-secondary scroll-into-view"
              style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
              Blog &amp; articles
            </div>
            <div className="spacer-medium"></div>
            <h2 className="text-5xl scroll-into-view"
              style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
              Discover the latest blogs
            </h2>
            <div className="spacer-medium"></div>
            <div className="text-color-secondary scroll-into-view"
              style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
              Stay informed with the latest health and wellness insights from our experts.
            </div>
            <div className="spacer">
              <div style={{height: "3.75rem"}} className="spacer-desktop"></div>
              <div style={{height: "2.5rem"}} className="spacer-tablet"></div>
              <div style={{height: "1.5rem"}} className="spacer-mobile"></div>
            </div>
            <div className="vertical-center scroll-into-view"
              style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
              <Link data-wf--button--variant="base" data-w-id="155d177b-6ef7-24c3-3eb9-53fc06643d4d"
                href="/blog" className="button_component w-inline-block"
                style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                <div className="button-content">
                  <div className="button-text"
                    style={{transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                    Learn more
                  </div>
                  <div className="button-text is-bottom"
                    style={{transform: "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                    Learn more
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="spacer">
            <div style={{height: "5rem"}} className="spacer-desktop"></div>
            <div style={{height: "2rem"}} className="spacer-tablet"></div>
            <div style={{height: "2rem"}} className="spacer-mobile"></div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="_3column_grid w-dyn-items">
              {relatedPosts.map((post) => (
                <div key={post.slug} role="listitem" className="w-dyn-item">
                  <Link
                    data-w-id="262af962-d648-504d-a133-11b6f51785af"
                    href={`/blog/${post.slug}`}
                    className="blog_collection-item w-inline-block">
                    <div className="blog_card-img scroll-into-view"
                      style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                      <img style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}
                        loading="lazy" alt={post.title}
                        src={post.image}
                        className="img" />
                    </div>
                    <div className="blog_card-info scroll-into-view"
                      style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                      <div>{post.date}</div>
                      <h5>{post.title}</h5>
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

export default BlogRelated
