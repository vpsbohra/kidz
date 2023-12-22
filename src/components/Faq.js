import Accordion from './Accordion';
import search_keywordImg from '../images/search_keyword_icon.png';
import Footer from './Footer';

export default function Faq() {
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
        <div className='faq_mainpage'>
            <div className='container'>
                <div className='faq_mainpage_inner'>
                    <div className='faq_mainpage_left'>
                        <h3>Frequently Asked Questions</h3>
                        <div className='search-box'>
                            <img src={search_keywordImg}/>
                            <input type='text' placeholder='Search for help using a keyword'/>
                        </div>
                    </div>
                    <div className='faq_mainpage_right'>
                            <Accordion items={accordionItems} />
                            <div className='faq-content'>
                       
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='Apply_last_section faq_last-sec'>
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