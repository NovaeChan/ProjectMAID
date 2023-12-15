import { NavLink } from "react-router-dom";
import TwitterImg from '../assets/x-twitter.svg';
import GithubImg from '../assets/github.svg';

import '../style/components/__Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-copyright">
                <span>© 2023 MyAnimeInData. All Rights Reserved.</span>
            </div>
            <div className="footer-link">
                <ul>
                    <li><NavLink to="/About">About Us</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><a href='https://twitter.com/NyanElise' target="_blank" rel="noopener noreferrer">
                        <img src={TwitterImg} alt="Twitter Logo" />Twitter</a></li>
                    <li><a href="https://github.com/Novaechan" target="_blank" rel="noopener noreferrer">
                        <img src={GithubImg} alt="Twitter Logo" />Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;