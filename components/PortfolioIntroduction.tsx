export default function PortfolioIntroduction(){
    return(
        <section className="section-padding introduction-section" id="introduction">
            <div className="container">

                <div className="row align-items-center gy-4">

                    <div className="col-lg-5">
                        <p className="section-eyebrow">
                            <span className="eyebrow-line"></span>
                            A LITTLE ABOUT ME
                        </p>

                        <h2 className="section-title">
                            More Than Code.
                            <span className="text-blue">A Better Experience.</span>
                        </h2>
                    </div>

                    <div className="col-lg-7">
                        <p className="introduction-text">
                            I'm a frontend developer interested in creating websites
                            that look great, feel intuitive, and work smoothly across
                            different devices. From structuring clean HTML to adding
                            JavaScript interactions and polishing responsive layouts,
                            I enjoy the process of turning ideas into functional
                            digital experiences.
                        </p>

                        <p className="introduction-text">
                            My approach combines creativity, practical problem-solving,
                            continuous learning, and attention to detail.
                        </p>

                        <a href="about.html" className="text-link">
                            Discover My Journey
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>

                </div>

                <div className="intro-divider"></div>

                <div className="row g-4 introduction-highlights">

                    <div className="col-md-4">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="bi bi-phone"></i>
                            </div>
                            <div>
                                <h3>Responsive Design</h3>
                                <p>Interfaces built to adapt across screen sizes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="bi bi-braces"></i>
                            </div>
                            <div>
                                <h3>Clean Development</h3>
                                <p>Structured code and maintainable components.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="bi bi-lightning-charge"></i>
                            </div>
                            <div>
                                <h3>Interactive Experiences</h3>
                                <p>Useful interactions that improve usability.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}