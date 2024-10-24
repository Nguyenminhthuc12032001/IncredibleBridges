import ContactMailIcon from '@mui/icons-material/ContactMail';
import us from './us.json';
import validator from 'validator';

function Contact({ Close }) {

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent default form submission behavior

        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();
        const email = document.getElementById('email').value;

        // Validate email using validator.js
        if (!validator.isEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate name (minimum 2 characters)
        if (name.length < 2) {
            alert("Your name must be at least 2 characters long.");
            return;
        }

        // Validate message (minimum 5 characters)
        if (message.length < 5) {
            alert("Your message must be at least 5 characters long.");
            return;
        }

        // If all validations pass, proceed
        alert("Form submitted successfully!");
    };

    return (
        <div className="con-modal">
            <div className="row justify-content-center">
                <div className="form-contact col-md-6 col-lg-4">
                    {/* Form header with icon */}
                    <label htmlFor="contact"><h3><ContactMailIcon /> Contact Us</h3></label>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            {/* Name input */}
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />

                            {/* Email input */}
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />

                            {/* Message input */}
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>

                            {/* Display contact details from JSON */}
                            <div className="detail-contact">
                                <b>Email:</b> {us.contactInfo.email} <br />
                                <b>Phone:</b> {us.contactInfo.phone} <br />
                                <b>Address:</b> {us.contactInfo.address}
                            </div>
                        </div>

                        {/* Form buttons: Reset, Submit, Close */}
                        <div className="btn-form row">
                            <input type="reset" className="btn btn-warning col-4" value="Reset" />
                            <input type="submit" className="btn btn-dark col-4" value="Submit" />
                            <button type="button" className="btn btn-danger col-4" onClick={Close}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;