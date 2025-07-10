import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6">
          <h5>Visit Our Store</h5>
          <p><strong>Location:</strong> Market Street, Eldoret, Kenya</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Email:</strong> info@annejunniehardware.com</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h5>Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="john@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
