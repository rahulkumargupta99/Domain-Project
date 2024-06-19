// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Implement form submission logic here (e.g., send data to backend)
        console.log(formData);
        // Reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-form">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
            <div className="social-media-links">
                <a href="https://www.facebook.com"><img src="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpghttps://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" height="60px" alt="Facebook" /></a>
                <a href="https://www.twitter.com"><img src="https://www.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-601425683.jpg" height="50px"alt="Twitter" /></a>
                <a href="https://www.google.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" height="50px" alt="Google" /></a>
            </div>
        </div>
    );
}

export default ContactForm;
