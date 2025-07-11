import React from "react";

function Home() {
    return (
        <div className="container fade-in mt-5 text-center">
            <div className="jumbotron bg-light p-5 rounded">
                <h1 className="display-4">Welcome to Annejunnie Hardware</h1>
                <p className="lead">We stock quality tools, fittings, paint, and more.</p>
                <hr className="my-4"/>
                <p>Browse our product collection or reach out to learn more.</p>
                <a className="btn btn-primary btn-lg btn-animated mt-3" href="/products">
                    View Products
                </a>
            </div>
        </div>
    )
}

export default Home;