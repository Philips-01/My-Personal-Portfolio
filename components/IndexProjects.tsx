export default function Projects(){
    return(
        <section className="section-padding projects-preview-section" id="projects">
            <div className="container">

                <div className="section-heading-row">
                    <div>
                        <p className="section-eyebrow">
                            <span className="eyebrow-line"></span>
                            SELECTED WORK
                        </p>

                        <h2 className="section-title">
                            Ideas Turned Into
                            <span className="text-blue">Digital Experiences.</span>
                        </h2>

                        <p className="section-description">
                            A selection of frontend projects exploring responsive
                            design, user interfaces, and interactive web experiences.
                        </p>
                    </div>

                    <a href="projects.html" className="btn btn-outline-custom desktop-section-link">
                        View All Projects
                        <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                </div>

                <div className="row g-4">

                    {/* <!-- Project 1: TaskRem --> */}
                    <div className="col-md-6 col-lg-4">
                        <article className="project-card">

                            <div className="project-image-wrapper taskrem-preview">
                                <div className="project-browser-bar">
                                    <div className="browser-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span>taskrem</span>
                                </div>

                                <div className="taskrem-mockup">
                                    <div className="mockup-sidebar">
                                        <i className="bi bi-house-door-fill"></i>
                                        <i className="bi bi-play-btn"></i>
                                        <i className="bi bi-clock-history"></i>
                                        <i className="bi bi-heart"></i>
                                    </div>

                                    <div className="mockup-video-grid">
                                        
                                        <div className="mockup-video">
                                            <img src="images/taskrem/taskrem4.png"
                                                alt="Collaborative technology workspace thumbnail" loading="lazy" />
                                            <span></span>
                                        </div>
                                    </div>
                                </div>

                                <span className="project-type-label">TaskRem PLATFORM UI/UX</span>
                            </div>

                            <div className="project-card-content">
                                <div className="project-meta">
                                    <span>01 / FRONTEND PROJECT</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                                <h3>TaskRem</h3>

                                <p>
                                    TaskFlow is a simple task management web application built with HTML, CSS,
                                    Bootstrap, and JavaScript. It allows users to add, edit, delete, complete, and
                                    filter tasks, while tracking total, completed, and pending tasks using session
                                    storage.
                                </p>

                                <div className="project-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>Bootstrap</span>
                                </div>

                                <div className="project-card-footer">
                                    <span className="project-status">
                                        <span className="status-dot"></span>
                                        Personal Project
                                    </span>

                                    <a href="projects.html" className="project-link" aria-label="Learn more about HomeTube">
                                        Explore Project
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </article>
                    </div>


                    {/* <!-- Project 2: Authentication UI --> */}
                    <div className="col-md-6 col-lg-4">
                        <article className="project-card">

                            <div className="project-image-wrapper auth-preview">
                                <div className="auth-orb auth-orb-one"></div>
                                <div className="auth-orb auth-orb-two"></div>

                                <div className="auth-mockup">
                                    <div className="auth-mockup-brand">
                                        <span className="auth-brand-icon">
                                            <i className="bi bi-shield-lock"></i>
                                        </span>
                                        <span>SecureSpace</span>
                                    </div>

                                    <div className="auth-mockup-heading">
                                        <span>WELCOME BACK</span>
                                        <strong>Sign in to continue.</strong>
                                        <small>Your next chapter starts here.</small>
                                    </div>

                                    <div className="mockup-input">
                                        <i className="bi bi-envelope"></i>
                                        <span>Email address</span>
                                    </div>

                                    <div className="mockup-input">
                                        <i className="bi bi-lock"></i>
                                        <span>Password</span>
                                    </div>

                                    <div className="mockup-auth-button">Sign In <i className="bi bi-arrow-right"></i></div>

                                    <div className="mockup-auth-footer">New here? Create an account</div>
                                </div>

                                <span className="project-type-label">AUTHENTICATION UI</span>
                            </div>

                            <div className="project-card-content">
                                <div className="project-meta">
                                    <span>02 / UI DEVELOPMENT</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                                <h3>Sign In / Sign Up Interface</h3>

                                <p>
                                    A modern authentication interface concept
                                    focused on a horizontal card layout, polished
                                    forms, visual transitions, and responsive design.
                                </p>

                                <div className="project-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>Bootstrap</span>
                                </div>

                                <div className="project-card-footer">
                                    <span className="project-status">
                                        <span className="status-dot"></span>
                                        UI Project
                                    </span>

                                    <a href="projects.html" className="project-link"
                                        aria-label="Learn more about the authentication interface">
                                        Explore Project
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </article>
                    </div>


                    {/* <!-- Project 3: Portfolio --> */}
                    <div className="col-md-6 col-lg-4">
                        <article className="project-card">

                            <div className="project-image-wrapper portfolio-preview">
                                <div className="portfolio-preview-top">
                                    <span className="portfolio-mini-logo">P.</span>
                                    <div className="portfolio-mini-nav">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div className="portfolio-preview-content">
                                    <div className="portfolio-mini-eyebrow">FRONTEND DEVELOPER</div>

                                    <div className="portfolio-mini-title">
                                        Design.
                                        <span>Develop.</span>
                                        Deliver.
                                    </div>

                                    <div className="portfolio-mini-lines">
                                        <span></span>
                                        <span></span>
                                    </div>

                                    <div className="portfolio-mini-button">Explore Work ↗</div>
                                </div>

                                <div className="portfolio-preview-decoration"></div>

                                <span className="project-type-label">PERSONAL PORTFOLIO</span>
                            </div>

                            <div className="project-card-content">
                                <div className="project-meta">
                                    <span>03 / PERSONAL BRAND</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                                <h3>Philips Ajibola Portfolio</h3>

                                <p>
                                    A multi-page developer portfolio showcasing
                                    technical skills, selected projects, development
                                    interests, and a professional contact experience.
                                </p>

                                <div className="project-tags">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JavaScript</span>
                                    <span>Bootstrap 5</span>
                                </div>

                                <div className="project-card-footer">
                                    <span className="project-status">
                                        <span className="status-dot"></span>
                                        Portfolio Project
                                    </span>

                                    <a href="projects.html" className="project-link"
                                        aria-label="Learn more about the portfolio project">
                                        Explore Project
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </article>
                    </div>

                </div>

                <div className="mobile-section-link">
                    <a href="projects.html" className="btn btn-outline-custom">
                        View All Projects
                        <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                </div>

            </div>
        </section>
    )
}