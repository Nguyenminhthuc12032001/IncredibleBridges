
function Contact({ Close }) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="con-modal">
            <div className="row justify-content-center">
                <div className="form-contact col-md-6 col-lg-4">
                    <label for="contact"><h3>Contact Us</h3></label>
                    <form id="contact con-bnt-form" onSubmit={handleSubmit}>
                        <div className="input">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />

                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />

                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Your message..."></textarea>
                            <div className="detail-contact">
                                <b>Email: </b>contact@incrediblebridges.com
                                <br />
                                <b>Phone: </b>+123 456 7890
                            </div>
                            
                        </div>
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