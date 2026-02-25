import React from 'react'

const navbar = () => {
    return (
        <div data-animation="default" className="navbar w-nav" data-easing2="ease-in-back" data-easing="ease-out"
            data-collapse="medium" data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184" role="banner" data-no-scroll="1"
            data-duration="500">
            <div className="padding-global is-navbar">
                <div className="container-medium">
                    <div className="navbar_content"><a href="/" className="navbar_logo-link w-nav-brand" aria-label="home"><img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/687ff334971f215c6e7c3f51_LogoCorevia.svg"
                        alt="" className="navbar_logo" /></a>
                        <div className="nav_wrap bg-transparent">
                            <nav role="navigation" className="nav_mobile w-nav-menu">
                                <div className="navbar_list">
                                    <a href="/" className="nav_links w-nav-link">Home</a>
                                    <a href="/about" className="nav_links w-nav-link">About</a>
                                    <a href="/features" className="nav_links w-nav-link">Features</a>
                                    <a href="/pricing" className="nav_links w-nav-link">Pricing</a>
                                    <a href="/blog" className="nav_links w-nav-link">Blog</a>
                                    <a href="/contact" className="nav_links w-nav-link">Contact</a>
                                </div>
                            </nav>
                        </div>
                        <div className="nav_buttons-wrap">
                            <div className="login-wrap hide-mobile-landscape"><a data-wf--button--variant="secondary"
                                data-w-id="155d177b-6ef7-24c3-3eb9-53fc06643d4d" href="/contact"
                                className="button_component w-variant-4054ea76-d9bc-6095-58ab-2d153e0e0fc3 w-inline-block"
                                style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                <div className="button-content">
                                    <div className="button-text"
                                        style={{transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                        Get Started</div>
                                    <div className="button-text is-bottom w-variant-4054ea76-d9bc-6095-58ab-2d153e0e0fc3"
                                        style={{transform: "translate3d(0px, 120%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                        Get Started</div>
                                </div>
                            </a></div>
                            <div className="menu-button w-nav-button" style={{WebkitUserSelect: "text"}} aria-label="menu"
                                role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                aria-expanded="false">
                                <div className="nav-button_component">
                                    <div className="nav-button_line is-first"
                                        style={{transform: "translate3d(0px, -350%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                    </div>
                                    <div className="nav-button_line is-second"></div>
                                    <div className="nav-button_line is-third"
                                        style={{transform: "translate3d(0px, 350%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
    )
}

export default navbar