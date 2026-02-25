import { BlogPost } from '@/data/blogData'

interface ArticleProps {
  post: BlogPost
}

const Article = ({ post }: ArticleProps) => {
  return (
    <section className="section_article">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-medium">
          <div className="blog_header">
            <div data-w-id="2d832348-b1ef-64c3-c08a-1404bcd3590c" className="blog_img">
              <div style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="img-wrap">
                <img
                  src={post.image}
                  loading="lazy" 
                  width="Auto"
                  style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  alt={post.title} 
                  className="img" 
                />
              </div>
            </div>
            <div>
              <div className="text-tag text-color-secondary scroll-into-view"
                style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                {post.date}
              </div>
              <h1 className="text-5xl scroll-into-view"
                style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                {post.title}
              </h1>
            </div>
          </div>
          <div className="spacer">
            <div style={{ height: '3.75rem' }} className="spacer-desktop"></div>
            <div style={{ height: '2.5rem' }} className="spacer-tablet"></div>
            <div style={{ height: '2rem' }} className="spacer-mobile"></div>
          </div>
          <div className="max-blog-content scroll-into-view"
            style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            <div className="text-rich-text w-richtext">
              {post.content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {post.content.sections.map((section, index) => (
                <div key={index}>
                  <h3>{section.heading}</h3>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
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

export default Article
