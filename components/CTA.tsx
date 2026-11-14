export default function CTA(){
    return(
        <section className="contact-cta-section" id="contact-cta">
            <div className="cta-grid-pattern" aria-hidden="true"></div>
            <div className="cta-glow" aria-hidden="true"></div>

            <div className="container">
                <div className="contact-cta-content">

                    <p className="section-eyebrow cta-eyebrow">
                        <span className="eyebrow-line"></span>
                        LET'S CONNECT
                    </p>

                    <h2>
                        Have an Idea?
                        <span>Let's Build Something Great.</span>
                    </h2>

                    <p>
                        Whether you're exploring a website idea, working on a
                        frontend project, or looking to collaborate, let's start
                        a conversation.
                    </p>

                    <a href="contact.html" className="btn btn-light-custom btn-lg">
                        Get in Touch
                        <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>

                </div>
            </div>
        </section>
    )
}