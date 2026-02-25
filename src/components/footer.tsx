import React from 'react'

const Footer = () => {
  return (
    <section className="section_footer">
                <div className="padding-section-small"></div>
                <div className="padding-global">
                    <div className="container-full">
                        <div className="w-layout-grid header-medium_grid">
                            <div className="grid_header-left"><a href="/"
                                    className="foote_img-wrap scroll-into-view w-inline-block"
                                    style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}><img
                                        src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/687ff334971f215c6e7c3f51_LogoCorevia.svg"
                                        loading="lazy" alt="" className="img" /></a>
                                <div className="spacer-medium"></div>
                                <div className="text-color-subtle scroll-into-view"
                                    style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                    Designed to support your business growth.</div>
                            </div>
                            <div>
                                <div className="text-5xl text-color-on-primary scroll-into-view"
                                    style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                    Subscribe to our news later</div>
                                <div className="spacer-medium"></div>
                                <div className="footer_form-wrap scroll-into-view w-form"
                                    style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                        className="footer-form" data-wf-page-id="687a676ef5e70f7d641d307d"
                                        data-wf-element-id="f7ba7c8a-dd28-26bf-6105-e0aead100551"
                                        aria-label="Email Form">
                                        <div className="footer_form-input-wrap"><input className="footer_form-input w-input"
                                                maxLength={256} name="name" data-name="Name"
                                                placeholder="Enter your email" type="text" id="name" /><input
                                                type="submit" data-wait="Please wait..." className="button is-form w-button"
                                                value="Suscribe" /></div>
                                    </form>
                                    <div className="w-form-done" tabIndex={-1} role="region"
                                        aria-label="Email Form success">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail" tabIndex={-1} role="region"
                                        aria-label="Email Form failure">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                <div className="spacer">
                                    <div style={{height: "4.5rem"}} className="spacer-desktop"></div>
                                    <div style={{height: "3rem"}} className="spacer-tablet"></div>
                                    <div style={{height: "2rem"}} className="spacer-mobile"></div>
                                </div>
                                <div className="footer_links-layout">
                                    <div className="footer_links scroll-into-view"
                                        style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                        <div className="text-xl">Pages</div>
                                        <a href="/" className="footer_link w-inline-block">
                                            <div>Home</div>
                                        </a>
                                        <a href="/about" className="footer_link w-inline-block">
                                            <div>About</div>
                                        </a>
                                        <a href="/features" className="footer_link w-inline-block">
                                            <div>Features</div>
                                        </a>
                                    </div>
                                    <div className="footer_links scroll-into-view"
                                        style={{opacity: 1, transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                        <div className="text-xl">Resources</div>
                                        <a href="/pricing" className="footer_link w-inline-block">
                                            <div>Pricing</div>
                                        </a>
                                        <a href="/blog" className="footer_link w-inline-block">
                                            <div>Blog</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer">
                            <div style={{height: "3.25rem"}} className="spacer-desktop"></div>
                            <div style={{height: "3rem"}} className="spacer-tablet"></div>
                            <div style={{height: "2rem"}} className="spacer-mobile"></div>
                        </div>
                        <div className="footer_bottom">
                            <div className="text-color-subtle">© 2025 Temlis. All rights reserved.</div>
                            <div className="footer_bottom-links">
                                <a href="/about" className="footer_bottom-link w-inline-block">
                                    <div>About</div>
                                </a>
                                <a href="/blog" className="footer_bottom-link w-inline-block">
                                    <div>Blog</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-section-small"></div>
            </section>
  )
}

export default Footer