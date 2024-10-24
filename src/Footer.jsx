import { Link } from "react-router-dom";
import { Email, Phone, LocationOn, Facebook, Instagram, Twitter, YouTube, HelpOutline, AccountTree } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import validator from 'validator';

function Footer({ showHomefaq, showSiteMap, showFeedback, showContact }) {

    // Handle newsletter subscription with email validation
    const handleSubmit = () => {
        const emailInput = document.getElementById("newsletter-email").value;

        // Validate email using validator.js
        if (!validator.isEmail(emailInput)) {
            alert("Invalid email or contains whitespace.");
        } else {
            alert("Successfully subscribed with email: " + emailInput);
        }
    };

    return (
        <div className="footer">
            <div className="row body">

                {/* Google Maps iframe */}
                <div className="contentFooter col-12 col-lg-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241473192493!2d106.66363827578515!3d10.78646668936295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1728980866081!5m2!1svi!2s"
                        width="100%"
                        height="300px"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Navigation links for sitemap, feedback, FAQ, and contact */}
                <div className="contentFooter col-12 col-lg-4" >
                    <div className="row">
                        <Link className="col-3 link-light" onClick={showSiteMap} style={{ textDecoration: 'none' }} >
                            <AccountTree style={{ fontSize: '2em' }} /> <h6>Site Map</h6>
                        </Link>

                        <Link className="col-3 link-light" onClick={showFeedback} style={{ textDecoration: 'none' }} >
                            <ChatIcon style={{ fontSize: '2em' }} /> <h6>Feedback</h6>
                        </Link>

                        <Link className="col-3 link-light" onClick={showHomefaq} style={{ textDecoration: 'none' }} >
                            <HelpOutline style={{ fontSize: '2em' }} /> <h6>FAQ</h6>
                        </Link>
                        
                        <Link className="col-3 link-light" onClick={showContact} style={{ textDecoration: 'none' }} >
                            <ContactMailIcon style={{ fontSize: '2em' }} /> <h6>Contact</h6>
                        </Link>
                    </div>

                    {/* Newsletter subscription form */}
                    <div style={{ paddingTop: '20px' }}>
                        <h3>Newsletter Subscription</h3>
                        <input className="inputMail" type="email" id="newsletter-email" name="email" placeholder="Your email" />
                        <button className="btnSub btn btn-primary" onClick={handleSubmit}>Subscribe</button>
                    </div>

                    {/* Social media links */}
                    <div className="row" style={{ paddingTop: '20px' }}>
                        <a className="col-3 link-light" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3 link-light" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Instagram style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3 link-light" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Twitter style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3 link-light" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YouTube style={{ fontSize: '2em' }} />
                        </a>
                    </div>

                </div>

                {/* Contact information and logos */}
                <div className="contentFooter col-12 col-lg-4" >
                    <div className="address">
                        <div className="row">
                            <a className="col-4" href="https://aptech.fpt.edu.vn/"><img src={`${process.env.PUBLIC_URL}/logoaptech/logofptaptech.png`} alt="Logo FPT Aptech" /></a>
                            <a className="col-4" href="https://aptech.vn/"><img src={`${process.env.PUBLIC_URL}/logoaptech/logoaptech.jpeg`} alt="Logo Aptech" /></a>
                            <Link className="col-4" to='/'><img src={`${process.env.PUBLIC_URL}/logo/logo.png`} alt="" /></Link>
                        </div>
                        <p><Email /> support@incrediblebridges.com</p>
                        <p><Phone /> +84 842 276 949</p>
                        <p><LocationOn />590 Cach Mang Thang 8, Ward 11, District 3, HCMC, Vietnam</p>
                        <p>© 2024 Incredible Bridges. All rights reserved.</p>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Footer;