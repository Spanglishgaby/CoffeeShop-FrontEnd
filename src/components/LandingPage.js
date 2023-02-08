import React from 'react'
import { Link } from "react-router-dom";

const LandingPage = () => {
    
    return (
        <>
        <section id="home" className="fullheight align-items-center bg-img bg-img-fixed">
            <div className="container">
            <div className="row">
                <div className="col-12 col-xs-12">
                <div className="slogan">
                    <h1>New York Coffee</h1>
                    <h2>Voted the best coffee shop in New York in 2022!</h2>
                    <Link to="/mainpage"><button>Order Here!</button></Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};



export default LandingPage