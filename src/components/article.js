import React from 'react';
import Article from '../images/Article-Cover001.png';
import arrow_leftFrame from '../images/arrow_left01.png';
import Loginheader from './LoginHeader.js';
import Footer from './Footer';

export default function article() {
    return (
        <>
        <Loginheader />
        <div className="article_main">
         
            <div className="container">
                <div className="article_main_inner">
                    <div className="article_main_brds">
                        <a href='/mission'><img src={arrow_leftFrame} /> Go back to Mission</a>
                    </div>
                    <div className="article_main_inner_content">
                        <h3>Quick Start Guide</h3>
                        <img src={Article} />
                        <div className='article-paragraph'>
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Mi ornare mattis nibh vitae nec. Ut aenean adipiscing augue nullam quam ac. Id nulla varius turpis ut id auctor. Nibh laoreet adipiscing eu rhoncus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Vestibulum praesent tellus elit nullam at feugiat velit. Malesuada fringilla feugiat maecenas nec egestas. Faucibus ut malesuada amet est accumsan dignissim duis nisl odio. Cras scelerisque dis cras cras eros. Placerat massa dui tempor sollicitudin suspendisse eget pretium magna mi. Vestibulum non urna sem accumsan dolor auctor ut vitae. Sollicitudin egestas sed sed ante quam ut. Risus porttitor sit consequat etiam. Dui nec risus nisl eget.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Vestibulum praesent tellus elit nullam at feugiat velit. Malesuada fringilla feugiat maecenas nec egestas. Faucibus ut malesuada amet est accumsan dignissim duis nisl odio. Cras scelerisque dis cras cras eros. Placerat massa dui tempor sollicitudin suspendisse eget pretium magna mi. Vestibulum non urna sem accumsan dolor auctor ut vitae. Sollicitudin egestas sed sed ante quam ut. Risus porttitor sit consequat etiam. Dui nec risus nisl eget.</p>
                        </div>
                        <div className='artical_updateDay'>
                            <p>Last Updated September 10th, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}