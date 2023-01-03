import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="contact-container">
            <Row>
                <Col xs={6}>
                    <h1>Contact Me</h1>
                    <p>Want to get in touch? You can reach me via the following methods:</p>
                    <ul>
                        <li>Email: <a href="mailto:your@email.com">your@email.com</a></li>
                        <li>Calendly: <a href="https://calendly.com/your-username">https://calendly.com/your-username</a></li>
                    </ul>
                </Col>
                <Col xs={6}>
                    <p>Or, you can fill out the form below and I'll get back to you as soon as possible:</p>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" />
                        <br />
                        <button type="submit">Send</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
