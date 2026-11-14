export default function HowIWork(){
    return(
        <section className="section-padding process-section" id="process">
            <div className="container">

                <div className="text-center process-heading">
                    <p className="section-eyebrow justify-content-center">
                        <span className="eyebrow-line"></span>
                        HOW I WORK
                        <span className="eyebrow-line"></span>
                    </p>

                    <h2 className="section-title">
                        From First Idea to
                        <span className="text-blue">Finished Interface.</span>
                    </h2>

                    <p className="section-description mx-auto">
                        A thoughtful development process helps turn ideas into
                        usable, attractive, and responsive digital experiences.
                    </p>
                </div>

                <div className="row g-4 process-grid">

                    <div className="col-6 col-lg-3">
                        <article className="process-card">
                            <div className="process-number">01</div>
                            <div className="process-icon">
                                <i className="bi bi-lightbulb"></i>
                            </div>
                            <h3>Understand</h3>
                            <p>Understand the purpose, audience, and design goals.</p>
                        </article>
                    </div>

                    <div className="col-6 col-lg-3">
                        <article className="process-card">
                            <div className="process-number">02</div>
                            <div className="process-icon">
                                <i className="bi bi-layout-text-window"></i>
                            </div>
                            <h3>Build</h3>
                            <p>Create the structure and style the responsive interface.</p>
                        </article>
                    </div>

                    <div className="col-6 col-lg-3">
                        <article className="process-card">
                            <div className="process-number">03</div>
                            <div className="process-icon">
                                <i className="bi bi-braces-asterisk"></i>
                            </div>
                            <h3>Implement</h3>
                            <p>Add useful interactions and dynamic functionality.</p>
                        </article>
                    </div>

                    <div className="col-6 col-lg-3">
                        <article className="process-card">
                            <div className="process-number">04</div>
                            <div className="process-icon">
                                <i className="bi bi-check2-circle"></i>
                            </div>
                            <h3>Refine</h3>
                            <p>Test, debug, and improve the overall user experience.</p>
                        </article>
                    </div>

                </div>

            </div>
        </section>
    )
}