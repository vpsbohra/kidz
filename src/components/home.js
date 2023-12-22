import React from 'react';
import Accordion from './Accordion';
import connectors_img1 from '../images/connectors-img001.png';
import connectors_img2 from '../images/connectors-img002.png';
import connectors_img3 from '../images/connectors-img003.png';
import Connector_effectImg from '../images/banner_effect_img_home.png';
import Connector_effectImgHD from '../images/banner_effect_img_hd.png';
import pioneer01Img from '../images/pioneer01.png';
import pioneer02Img from '../images/pioneer02.png';
import pioneer03Img from '../images/pioneer03.png';
import pioneer04Img from '../images/pioneer04.png';
import pioneer05Img from '../images/pioneer05.png';
import pioneer06Img from '../images/pioneer06.png';
import ArrowRightEffImg from '../images/Arrow-right_2.png';
import view_all_iconImg from '../images/view_all_icon.png';
import { Link, Navigate } from 'react-router-dom';
import Footer from './Footer';


export default function Home() {
    const accordionItems = [
        {
            title: 'What does it mean to be a Connector?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'What are my responsabilities as a Connector?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'Who can become a Connector?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'How much can I expect to earn?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'How do I get paid?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'What if I’m a student?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
        {
            title: 'What if I have another job?',
            content: 'Lorem ipsum dolor sit amet consectetur. Praesent rutrum sed ut quam lorem diam eget morbi vitae. Egestas urna dignissim mattis aliquet cras libero. Lacus volutpat vestibulum sed eu natoque. Eu venenatis est aliquet scelerisque pharetra odio enim at turpis. At ultricies senectus eget urna vitae. Vitae consectetur in sed sem. Neque et consectetur malesuada sollicitudin et et tincidunt. Et lectus senectus duis cursus id dis bibendum. Leo in arcu tortor a enim.',
        },
    ];
    return(
        <>
        <div className='ready_connector_section'>
            <div className='container'>
                <div className='ready_connector_inner'>
                    <h3>Ready to become a Connector?</h3>
                    <button>APPLY NOW</button>
                </div>
            </div>
        </div>

        <div className='sectionConnector_effectImg'>
        <img src={Connector_effectImg} />
        </div>

        <div className='banner_sectionConnector'>
            <div className='container'>
                 <div className='banner_sectionConnector_inner'>
                    <div className='bannerConnector_left'>
                        <h3>Cherishing Connection</h3>
                    </div>
                    <div className='bannerConnector_right'>
                        <p>Becoming a Connector means joining a team dedicated  embracing our digital age  while celebrating children's growth and nurturing those special p;arent child relationships. Empower parents and kids alike, with a community that treasures open communication, the beauty of shared memories and believes in the celebration of childhood.</p>
                    </div>
                 </div>
            </div>
        </div>

        <div className='pioneer_section'>
            <div className='container'>
                <h3 className='pioneer_title'>Be a pioneer, with perks</h3>
                <div className='pioneer_inner'>
                    <div className='pioneer_item'>
                        <div className='icon'> <img src={pioneer01Img} /></div>
                        <h3>Get Paid</h3>
                        <p>Earn $100, $200 and even more than $600 per month.</p>
                    </div>
                        <div className='pioneer_item'>
                    <div className='icon'> <img src={pioneer02Img} /></div>
                        <h3>Set Your Own Schedule</h3>
                        <p>Forget about hourly constraints, tailor your schedule to your life’s rhythm</p>
                    </div>
                     <div className='pioneer_item'>
                    <div className='icon'> <img src={pioneer03Img} /></div>
                        <h3>Recognition</h3>
                        <p>Get rewarded  for everything you do as an integral part of our team</p>
                    </div>
                        <div className='pioneer_item'>
                    <div className='icon'> <img src={pioneer04Img} /></div>
                        <h3>Connect</h3>
                        <p>Build a strong community with Connectors from all over the world</p>
                    </div>
                        <div className='pioneer_item'>
                    <div className='icon'> <img src={pioneer05Img} /></div>
                        <h3>Grow</h3>
                        <p>Discover your strength and blend them into your personal and professional journey</p>
                    </div>
                    <div className='pioneer_item'>
                        <div className='icon'> <img src={pioneer06Img} /></div>
                        <h3>Impact</h3>
                        <p>Be part of a mission-driven program that promotes education, empowerment, and strong family relationships</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='who_connectors_section'>
            <div className='container'>
                <h3 className='section_title'>Who are Connectors?</h3>
            </div>
            <div className='who_connectors_imagesSec'>
                <div className='connectors_images_item'>
                    <img src={connectors_img1} />
                </div>
                <div className='connectors_images_item'>
                  <img src={connectors_img2} />
                </div>
                <div className='connectors_images_item'>
                    <img src={connectors_img3} />
                </div>
            </div>
        </div>

        <div className='how_work_section'>
           
            <div className='container'>
                <h3 className='section_title'>How it works?</h3>
                <img className='effect_arrow_img' src={ArrowRightEffImg} />

                <div className='how_work_section_inner'>
                    <div className='how_work_item'>
                        <span>1</span>
                        <div className='how_work_item_right'>
                            <h4>Apply</h4>
                            <p>Create your account, fill in a few details and get instant access to your own ambassador dashboard.</p>
                        </div>
                    </div>
                    <div className='how_work_item'>
                        <span>2</span>
                        <div className='how_work_item_right'>
                            <h4>Spread the word</h4>
                            <p>Share your referral link with your network, and recrute members onto your team. As a Connector, your aim will be to inspire collective effort!</p>
                        </div>
                    </div>
                    <div className='how_work_item'>
                        <span>3</span>
                        <div className='how_work_item_right'>
                            <h4>Earn</h4>
                            <p>Earn $100, $200 and even more than $600 per month working only a few hours a week from anywhere in the world!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='faq_section'>
            <div className='container'>
                <div className='faq_section_inner'>
                    <div className='faq_content_left'>
                        <h3>Frequently Asked Questions</h3>
                        {/* <div className='search-box'>
                            <input type='text' placeholder='Search for help using a keyword'/>
                        </div> */}
                    </div>
                    <div className='faq_content_right'>
                            <Accordion items={accordionItems} />
                            <div className='faq_viewbutton'>
                              <Link to='/faq'>View all FAQs   <img src={view_all_iconImg} /></Link>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>


        <div className='Apply_last_section'>
            <div className='container'>
                <div className='Apply_last_section_inner'>
                    <h3>Share joy through KidzConnect with your loved ones,and earn while doing it</h3>
                    <button>APPLY NOW</button>
                </div>
            </div>
        </div>
       <Footer />
        </>
    )
}