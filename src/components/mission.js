import React from 'react';
import Article from '../images/Article_cover.png';
import Loginheader from './LoginHeader.js';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Mission() {


    return (
        <>
         <Loginheader />

            <div className="mission_main">
         
            <div className="container">
            <h3 className='section_title'>Resources Hub</h3>
            <div className="mission_main_inner">

                <div className="mission_main_items">
                <Link to='/article' className="mission_main_item">
                    <div className="image-content">
                        <img src={Article} />
                    </div>
                    <div className="text-content">
                        <h3> A Connector's Mission</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                    </div>
                    </Link>
                </div>


                <div className="mission_main_items">
                    <Link to='/article' className="mission_main_item">
                    <div className="image-content">
                        <img src={Article} />
                    </div>
                    <div className="text-content">
                        <h3>Quick Start Guide</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                    </div>
                    </Link>
                </div>

                <div className="mission_main_items">
                <Link to='/article' className="mission_main_item">
                    <div className="image-content">
                        <img src={Article} />
                    </div>
                    <div className="text-content">
                        <h3> Subscription Sales Pitch - Tips and Scripts</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                    </div>
                    </Link>
                </div>

                <div className="mission_main_items">
                <Link to='/article' className="mission_main_item">
                    <div className="image-content">
                        <img src={Article} />
                    </div>
                    <div className="text-content">
                        <h3>Earnings Blueprint</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                    </div>
                    </Link>
                </div>

                <div className="mission_main_items">
                <Link to='/article' className="mission_main_item">
                    <div className="image-content">
                        <img src={Article} />
                    </div>
                    <div className="text-content">
                        <h3> KidzConnect Values</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                    </div>
                    </Link>
                </div>
            </div>
            </div> 
            </div> 

        <Footer />
        </>
        )

}