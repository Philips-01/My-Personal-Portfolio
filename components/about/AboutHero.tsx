export default function AboutHero(){
    return(
        <section className="about-hero ">
            <div className="about-hero-grid"></div>

            <div className="container position-relative">
                <div className="about-hero-content reveal">

                    <span className="about-eyebrow">
                        <span className="eyebrow-line"></span>
                        GET TO KNOW ME
                    </span>

                    <h1>
                        More Than Code.
                        <span>A Mindset for Building.</span>
                    </h1>

                    <p>
                        I'm Philips Ajibola, an aspiring frontend developer
                        passionate about creating modern digital experiences
                        that combine thoughtful design, useful functionality,
                        and responsive development.
                    </p>

                    <div className="about-hero-actions">
                        <a href="#my-story" className="btn about-btn-primary">
                            Discover My Story
                            <i className="bi bi-arrow-down"></i>
                        </a>

                        <a href="projects.html" className="btn about-btn-outline">
                            Explore My Projects
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>

                    <div className="about-hero-meta">
                        <span><i className="bi bi-laptop"></i> Frontend Development</span>
                        <span><i className="bi bi-lightbulb"></i> Continuous Learning</span>
                    </div>

                </div>
            </div>

            <div className="hero-decoration hero-decoration-one"></div>
            <div className="hero-decoration hero-decoration-two"></div>
        </section>
    )
}