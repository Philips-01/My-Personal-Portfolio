export default function HeroContainer(){
    return(
        <section className="hero-section main-content" id="home">

            <div className="hero-grid-pattern" aria-hidden="true"></div>
            <div className="hero-glow hero-glow-one" aria-hidden="true"></div>
            <div className="hero-glow hero-glow-two" aria-hidden="true"></div>

            <div className="container hero-container">
                <div className="row align-items-center gy-5">

                    {/*  Hero Text */}
                    <div className="col-lg-7 hero-content">

                        <div className="hero-status">
                            <span className="status-dot"></span>
                            <span>FRONTEND DEVELOPMENT · CREATIVE THINKING</span>
                        </div>

                        <p className="hero-eyebrow">HELLO, I'M</p>

                        <h1 className="hero-title">
                            Philips
                            <span className="hero-title-highlight">Ajibola<span className="title-period">.</span></span>
                        </h1>

                        <h2 className="hero-subtitle">
                            Frontend Developer / Engineer
                            <span>Modern Digital Experiences.</span>
                        </h2>

                        <p className="hero-description">
                            I turn ideas into engaging digital experiences through
                            responsive web design, interactive interfaces, and
                            thoughtful frontend development. I enjoy bringing
                            designs to life with clean code and modern web technologies.
                        </p>

                        <div className="hero-actions">
                            <a href="projects.html" className="btn btn-primary-custom btn-lg">
                                Explore My Work
                                <i className="bi bi-arrow-up-right ms-2"></i>
                            </a>

                            <a href="contact.html" className="btn btn-outline-custom btn-lg">
                                Let's Work Together
                                <i className="bi bi-chat-dots ms-2"></i>
                            </a>
                        </div>

                        <div className="hero-tech-intro">
                            <span className="hero-tech-label">BUILDING WITH</span>

                            <div className="hero-tech-list">
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>JavaScript</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>

                    </div>

                     {/* Hero Visual  */}
                    <div className="col-lg-5">
                        <div className="hero-visual">

                            <div className="hero-image-glow" aria-hidden="true"></div>

                            <div className="hero-image-frame">
                                <img 
                                src="/philips.png" 
                                alt="A collaborative technology workspace" 
                                className="hero-image"
                                    fetchPriority="high"
                                    />
                            </div>

                             {/* Floating Code Card  */}
                            <div className="floating-card code-floating-card">
                                <div className="code-card-header">
                                    <span className="code-dot code-dot-red"></span>
                                    <span className="code-dot code-dot-yellow"></span>
                                    <span className="code-dot code-dot-green"></span>
                                    <span className="code-file-name">developer.js</span>
                                </div>

                                <div className="code-card-body">
                                    <p><span className="code-purple">const</span> developer = {"{"}</p>
                                    <p className="code-indent">name: <span className="code-green">'Philips'</span>,</p>
                                    <p className="code-indent">focus: <span className="code-green">'Frontend'</span>,</p>
                                    <p className="code-indent">creative: <span className="code-blue">true</span></p>
                                    <p>{"}"};</p>
                                </div>
                            </div>

                            
                            <div className="floating-card tech-floating-card">
                                <div className="tech-floating-icon">
                                    <i className="bi bi-code-slash"></i>
                                </div>

                                <div>
                                    <strong>Modern Web</strong>
                                    <span>Design · Develop · Improve</span>
                                </div>
                            </div>

                            <div className="hero-visual-caption">
                                <span className="caption-line"></span>
                                <span>CREATIVITY MEETS CODE</span>
                            </div>

                        </div>
                    </div>

                </div>

                <a href="#introduction" className="scroll-indicator" aria-label="Scroll to introduction">
                    <span>SCROLL TO EXPLORE</span>
                    <i className="bi bi-arrow-down"></i>
                </a>

            </div>
        </section>
    )
}