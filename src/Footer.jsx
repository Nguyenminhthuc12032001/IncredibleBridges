import { Link } from "react-router-dom";
import { Email, Phone, LocationOn, Facebook, Instagram, Twitter, YouTube, HelpOutline, AccountTree } from '@mui/icons-material';

function Footer({ showHomefaq, showSiteMap }) {

    return (
        <div className="footer">

            <div className="row body">
                <div className="contentFooter col-12 col-lg-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241473192493!2d106.66363827578515!3d10.78646668936295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1728980866081!5m2!1svi!2s"
                        width="80%"
                        height="300px"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

                <div className="contentFooter col-12 col-lg-4" >
                    <div className="row">
                        <Link className="col-6" onClick={showSiteMap} ><AccountTree style={{ fontSize: '3em' }} /> <h3>Site Map</h3></Link> <br />
                        <Link className="col-6" onClick={showHomefaq}><HelpOutline style={{ fontSize: '3em' }} /> <h3>FAQ</h3></Link>
                    </div>
                    <div style={{ paddingTop: '20px' }}>
                        <h3>Newsletter Subscription</h3>
                        <input className="inputMail" type="email" id="newsletter-email" name="email" placeholder="Your email" />
                        <button className="btnSub btn btn-primary">Subscribe</button>
                    </div>
                    <div className="row" style={{ paddingTop: '20px' }}>
                        <a className="col-3" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Instagram style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Twitter style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YouTube style={{ fontSize: '2em' }} />
                        </a>
                    </div>

                </div>

                <div className="contentFooter col-12 col-lg-4" >
                    <div className="address">
                        <a href="https://aptech.fpt.edu.vn/"><img className="logoAptech" src={`${process.env.PUBLIC_URL}/logoaptech/logoaptech.png`} alt="Logo Aptech" /></a>
                        <p><Email /> support@incrediblebridges.com</p>
                        <p><Phone /> +84 123 456 789</p>
                        <p><LocationOn />590 Cach Mang Thang 8, Ward 11, District 3, HCMC, Vietnam</p>
                        <p>Travel options to famous bridges: <a href="/travel-options">Learn more</a></p>
                        <p>© 2024 Incredible Bridges. All rights reserved.</p>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Footer;