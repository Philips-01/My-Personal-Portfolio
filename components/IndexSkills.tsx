export default function Skills(){
    return(
        <section className="section-padding skills-preview-section" id="skills">
            <div className="container">

                <div className="section-heading-row">
                    <div>
                        <p className="section-eyebrow">
                            <span className="eyebrow-line"></span>
                            MY TOOLKIT
                        </p>

                        <h2 className="section-title">
                            Technologies I Use to
                            <span className="text-blue">Build for the Web.</span>
                        </h2>

                        <p className="section-description">
                            A growing toolkit for creating responsive interfaces,
                            interactive experiences, and modern web applications.
                        </p>
                    </div>

                    <a href="skills.html" className="btn btn-outline-dark-custom desktop-section-link">
                        Explore All Skills
                        <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                </div>

                <div className="skill-category">
                    <div className="skill-category-heading">
                        <span className="category-number">01</span>
                        <h3>Core Frontend</h3>
                        <span className="category-description">Structure, style and interaction</span>
                    </div>

                    <div className="row g-3">

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-html">
                                    <i className="bi bi-filetype-html"></i>
                                </div>
                                <h4>HTML5</h4>
                                <p>Semantic web structure</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-css">
                                    <i className="bi bi-filetype-css"></i>
                                </div>
                                <h4>CSS3</h4>
                                <p>Layouts and visual design</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-js">
                                    <i className="bi bi-filetype-js"></i>
                                </div>
                                <h4>JavaScript ES6+</h4>
                                <p>Modern interactive features</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-bootstrap">
                                    <i className="bi bi-bootstrap"></i>
                                </div>
                                <h4>Bootstrap 5</h4>
                                <p>Responsive UI components</p>
                            </article>
                        </div>

                    </div>
                </div>

                <div className="skill-category">
                    <div className="skill-category-heading">
                        <span className="category-number">02</span>
                        <h3>Libraries & Frameworks</h3>
                        <span className="category-description">Modern frontend ecosystem</span>
                    </div>

                    <div className="row g-3">

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-jquery">
                                    <i className="bi bi-braces"></i>
                                </div>
                                <h4>jQuery</h4>
                                <p>DOM and event handling</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-react">
                                    <i className="bi bi-code-slash"></i>
                                </div>
                                <h4>React.js</h4>
                                <p>Component-based interfaces</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-next">
                                    <i className="bi bi-arrow-repeat"></i>
                                </div>
                                <h4>Next.js</h4>
                                <p>React-based applications</p>
                            </article>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <article className="skill-card">
                                <div className="skill-icon skill-ts">
                                    <i className="bi bi-filetype-tsx"></i>
                                </div>
                                <h4>TypeScript</h4>
                                <p>Typed JavaScript development</p>
                            </article>
                        </div>

                    </div>
                </div>

                <div className="skill-category">
                    <div className="skill-category-heading">
                        <span className="category-number">03</span>
                        <h3>Tools & Collaboration</h3>
                        <span className="category-description">Building and maintaining projects</span>
                    </div>

                    <div className="row g-3">

                        <div className="col-6 col-md-4">
                            <article className="skill-card skill-card-horizontal">
                                <div className="skill-icon skill-git">
                                    <i className="bi bi-git"></i>
                                </div>
                                <div>
                                    <h4>Git</h4>
                                    <p>Version control</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-6 col-md-4">
                            <article className="skill-card skill-card-horizontal">
                                <div className="skill-icon skill-github">
                                    <i className="bi bi-github"></i>
                                </div>
                                <div>
                                    <h4>GitHub</h4>
                                    <p>Repositories and collaboration</p>
                                </div>
                            </article>
                        </div>

                        <div className="col-12 col-md-4">
                            <article className="skill-card skill-card-horizontal">
                                <div className="skill-icon skill-vscode">
                                    <i className="bi bi-code-square"></i>
                                </div>
                                <div>
                                    <h4>VS Code</h4>
                                    <p>Development environment</p>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>

                <div className="mobile-section-link">
                    <a href="skills.html" className="btn btn-outline-dark-custom">
                        Explore All Skills
                        <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                </div>

            </div>
        </section>
    )
}