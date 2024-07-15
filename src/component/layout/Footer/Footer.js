import React from "react";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import logo from "../../../images/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div class="footer-nav">
                <div class="footer-container">
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Popular Categories</h2>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Fashion</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Electronic</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Cosmetic</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Health</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Watches</a>
                        </li>
                    </ul>
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Products</h2>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Prices drop</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">New products</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Best sales</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Contact us</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Sitemap</a>
                        </li>
                    </ul>
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Our Company</h2>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Delivery</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Legal Notice</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Terms and conditions</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">About us</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Secure payment</a>
                        </li>
                    </ul>
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Services</h2>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Prices drop</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">New products</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Best sales</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Contact us</a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="#" class="footer-nav-link">Sitemap</a>
                        </li>
                    </ul>
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Contact</h2>
                        </li>
                        <li class="footer-nav-item flex">
                            <div class="icon-box">
                            <IoLocationOutline />
                            </div>
                            <address class="content">
                                Faridabad, Haryana, Pin Code - 121003
                            </address>
                        </li>
                        <li class="footer-nav-item flex">
                            <div class="icon-box">
                            <IoMailOutline />
                            </div>
                            <a href="mailto:itxnargiskhatun@gmail.com" title="My gmail account"
                                aria-label="Gmail-icon" className="footer-nav-link link">itxnargiskhatun@gmail.com
                            </a>
                        </li>
                    </ul>
                    <ul class="footer-nav-list">
                        <li class="footer-nav-item">
                            <h2 class="nav-title">Follow Me</h2>
                        </li>
                        <li>
                            <ul class="social-link">
                                <li class="footer-nav-item">
                                    <a href="https://github.com/itxnargis" title="Connect to github"
                                        aria-label="Github-icon" className="footer-nav-link">
                                        <AiFillGithub/>
                                    </a>
                                </li>
                                <li class="footer-nav-item">
                                    <a href="https://x.com/81283nargis?s=09" title="My personal twitter account"
                                        aria-label="Twitter-icon" className="footer-nav-link">
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li class="footer-nav-item">
                                    <a href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/"
                                        title="My linkedin account" aria-label="Linkedin-icon" className="footer-nav-link">
                                        <AiFillLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-container">
                    <img src={logo} alt="payment method" className="payment-img" />
                    <p class="copyright">
                        Copyright &copy; <a href="#">Ecommerce</a> all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;