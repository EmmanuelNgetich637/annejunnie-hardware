import React from "react";

function About() {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">About Annejunnie Hardware</h2>
            <p>
                <strong>Annejunnie Hardware</strong>is a trusted and customer-focused hardware shop located in the Bomet, Kenya. 
        We supply a wide range of quality construction and home improvement materials — from cement and nails to tools and paints — 
        all at affordable prices.
            </p>
            <h5 className="mt-4">Our Mission</h5>
            <p>
                To empower our customers — homeowners, contractors, and DIYers — by providing reliable materials and exceptional service 
                that helps build strong homes, businesses, and communities.
            </p>
            <h5>Why Choose Us?</h5>
            <ul>
                <li>✅ Wide range of products</li>
                <li>✅ Affordable pricing</li>
                <li>✅ Friendly and knowledgeable staff</li>
                <li>✅ We support local construction needs</li>
            </ul>

            <p className="mt-4">
                Whether you are building from scratch, renovating, or just fixing a few things — Annejunnie Hardware is here to serve you. 
                Visit us today or get in touch through our <a href="/contact">Contact page</a>.
            </p>

        </div>
    )
}

export default About;