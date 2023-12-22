
import React, { useState, useEffect } from 'react';
import search_keywordImg from '../images/search_keyword_icon.png';
import close_icon_srImg from '../images/close_icon_sr01.png';
import Accordion from './Accordion';
import ContactSupportForm from './contact_support'; 
import Modal from 'react-modal'; 
// Initialize react-modal
Modal.setAppElement('#root');

export default function Help() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [bodyClass, setBodyClass] = useState(""); // Initialize with an empty class
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
      const showPopup = () => {
        setPopupOpen(true);
        setBodyClass("toggle");
      };
    
      const closePopup = () => {
        setPopupOpen(false);
        setBodyClass("");
      };
    

      useEffect(() => {
        document.body.className = bodyClass; // Apply the class to the body element
      }, [bodyClass]);
    




      return (
        <>
          <div className='faq_mainpage help_page'>
          <div className='container'>
                <div className='faq_mainpage_inner'>
                    <div className='faq_mainpage_left'>
                        <h3>Help Center</h3>
                        <div className='search-box'>
                            <img src={search_keywordImg}/>
                            <input type='text' placeholder='Search for help using a keyword'/>
                        </div>
                    </div>
                    <div className='faq_mainpage_right'>
                            <Accordion items={accordionItems} />
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_support_sec'>
        <div className='container'>
          <div className='contact_support_sec_inner'>
            <h3>Can’t find the answer you’re looking for?</h3>
            <button onClick={showPopup}>CONTACT SUPPORT</button>
            <Modal
              isOpen={isPopupOpen}
              onRequestClose={closePopup}
    
            >
              <div className="modal-inner">
                <button onClick={closePopup} className="close-button"><img src={close_icon_srImg}/></button>
                <ContactSupportForm onClose={closePopup} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}