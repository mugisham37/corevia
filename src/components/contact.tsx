import React from 'react'

const contact = () => {
    return (
        <section className="section_contact">
            <div className="padding-section-medium"></div>
            <div className="padding-global">
                <div className="container-medium">
                    <div className="contact-three_grid">
                        <h1 className="text-5xl scroll-into-view"
                            style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            Get in touch</h1>
                        <div>
                            <div className="form_component w-form">
                                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"
                                    className="contact_form" data-wf-page-id="688fc4a2d965015d4e762323"
                                    data-wf-element-id="44e8f366-197d-7248-1121-ea063024f0b8"
                                    aria-label="Email Form 2">
                                    <div className="contact_form-grid">
                                        <div id="w-node-_44e8f366-197d-7248-1121-ea063024f0ba-4e762323"
                                            className="form_field-wrapper scroll-into-view"
                                            style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                            <label htmlFor="name-2" className="form_label">Your Name</label><input
                                                className="form_input w-input" maxLength={256} name="name-2"
                                                data-name="Name 2" placeholder="Your name" type="text" id="name-2" />
                                        </div>
                                        <div id="w-node-_44e8f366-197d-7248-1121-ea063024f0be-4e762323"
                                            className="form_field-wrapper scroll-into-view"
                                            style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                            <label htmlFor="email" className="form_label">Email Address</label><input
                                                className="form_input w-input" maxLength={256} name="email"
                                                data-name="Email" placeholder="Your emial address" type="email"
                                                id="email" required /></div>
                                        <div id="w-node-_44e8f366-197d-7248-1121-ea063024f0c2-4e762323"
                                            className="form_field-wrapper scroll-into-view"
                                            style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                            <label htmlFor="field-2" className="form_label">Message</label><textarea
                                                placeholder="Write something..." maxLength={5000} id="field-2"
                                                name="field-2" data-name="Field 2"
                                                className="form_input is-text-area w-input"></textarea></div>
                                    </div><input type="submit" data-wait="Please wait..."
                                        className="button is-form-submit scroll-into-view w-button"
                                        value="Send a Message"
                                        style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} />
                                </form>
                                <div className="w-form-done" tabIndex={-1} role="region"
                                    aria-label="Email Form 2 success">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail" tabIndex={-1} role="region"
                                    aria-label="Email Form 2 failure">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="padding-section-medium"></div>
        </section>
    )
}

export default contact