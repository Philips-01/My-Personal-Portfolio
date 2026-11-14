"use client";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="main-footer">
        <div className="container">

            <div className="row g-4 footer-main">

                <div className="col-lg-5">
                    <a href="index.html" className="navbar-brand brand-logo footer-brand">
                        <span className="brand-mark">P<span>.</span></span>
                        <span className="brand-name">PHILIPS<span>AJIBOLA</span></span>
                    </a>

                    <p className="footer-description">
                        Building thoughtful digital experiences through frontend
                        development, responsive design, and continuous learning.
                    </p>

                    <div className="footer-socials">
                        
                        <a href="#" aria-label="GitHub profile" title="Add your GitHub profile URL">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="#" aria-label="LinkedIn profile" title="Add your LinkedIn profile URL">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="#" aria-label="X profile" title="Add your X profile URL">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>
                </div>

                <div className="col-6 col-lg-2 offset-lg-1">
                    <h3 className="footer-heading">Navigation</h3>

                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Me</Link></li>
                        <li><Link href="/skills">My Skills</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-lg-3 offset-lg-1">
                    <h3 className="footer-heading">Technologies</h3>

                    <ul className="footer-links">
                        <li><a href="skills.html">HTML & CSS</a></li>
                        <li><a href="skills.html">JavaScript ES6+</a></li>
                        <li><a href="skills.html">Bootstrap & jQuery</a></li>
                        <li><a href="skills.html">React & Next.js</a></li>
                        <li><a href="skills.html">Git & GitHub</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    &copy; <span id="copyrightYear">2026</span> Philips Ajibola.
                    All rights reserved.
                </p>

                <a href="#home" className="back-to-top" aria-label="Back to top">
                    Back to top
                    <i className="bi bi-arrow-up"></i>
                </a>
            </div>

        </div>
    </footer>
    )
}