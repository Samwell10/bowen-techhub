import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../images/logo.png';
import './Footer.css'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo}></img>
                </div>
                <div className="footer-top-right">
                    <div className="footer-element">
                        <p className='footerhead'>About us</p>
                    </div>
                    <div className="footer-element">
                        <p className='footerhead'>Event</p>
                    </div>
                    <div className="footer-element">
                        <p className='footerhead'>Courses</p>
                        <p className='footerbody'>Product Design</p>
                        <p className='footerbody'>Front-end Development</p>
                        <p className='footerbody'>Back-end Development</p>
                        <p className='footerbody'>Software Development</p>
                        <p className='footerbody'>Cyber Security</p>
                        <p className='footerbody'>Game Development</p>
                        <p className='footerbody'>Project Management</p>
                    </div>
                    <div className="footer-element">
                        <p className='footerhead'>Blog</p>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <p>Products may vary by country or market.</p>
            </div>
            <div className="footer-contact">
                <div className="contactss">
                    <p className='footerhead'>Contact</p>
                    <p className='footerbody'>Bowentechhub@gmail.com</p>
                    <div className="contact-icons">
                        <div className="con-socials">
                            <FaInstagram/>
                        </div>
                        <div className="con-socials">
                            <FaTwitter/>
                        </div>
                        <div className="con-socials">
                            <FaYoutube/>
                        </div>
                    </div>
                </div>
                <div className="location">
                    <p className='locationtext'>Bowen University,</p>
                    <p className='locationtext'>Iwo, Osun State.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='footerbody'>© 2023 Bowentechhub  (Company No.11472232). All rights reserved.</p>
            </div>
        </div>
    );
}
 
export default Footer;