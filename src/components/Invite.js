


// Invite.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import bin from '../images/bin.png';
import bin_red from '../images/bin_red.png';
import messageicon1 from '../images/messageicon.png';
import messageicon2 from '../images/messageicon2.png';
import close_icon_blackImg from '../images/close_icon_black.png';
import emailjs from "@emailjs/browser";

Modal.setAppElement('#root');

export default function InviteForm({ onClose, closeAllPopups, popupclass }) {
    const [text, setText] = useState("");
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [bodyClass, setBodyClass] = useState('Invitation');
    const [popupContent, setPopupContent] = useState(null);
    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([]);
    const [showSendButton, setShowSendButton] = useState(false);
    const [showAddedEmail, setShowAddedEmail] = useState(false);
	 const [isReadonly, setIsReadonly] = useState(true);
    const [emailValue, setEmailValue] = useState(popupclass ? 'kidzconnect.com/?viaDaisyJ20' : 'ambassador.kidzconnect.com/?viaDaisyJ20');

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        if (inputList.trim() !== "") {
            setItems((oldItems) => {
                return [...oldItems, ...inputList.split(',').map(email => email.trim())];
            });
            setInputList('');
            if (!showSendButton) {
                setShowSendButton(true);
            }
            if (!showAddedEmail) {
                setShowAddedEmail(true);
            }
        }
    };

    const deleteItem = (index) => {
        setItems((oldItems) => {
            return oldItems.filter((_, i) => i !== index);
        });
    };

    const sendEmail = () => {
        console.log(Items);
        const emailAddresses = Items;
        const templateParams = {
            message: text,
        };
        emailAddresses.forEach((emailAddress) => {
            templateParams.user_email = emailAddress;
            emailjs
                .send(
                    'service_oa10xs4',
                    'template_spdasds',
                    templateParams,
                    'I8VSSe2ScoovjjwRQ'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        });
    };

    useEffect(() => {
        document.body.classList.add('withdraw');
        return () => {
            document.body.classList.remove('invite');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    const showPopup = (content) => {
        setPopupContent(content);
        setPopupOpen(true);
        setBodyClass('Invitation');
        sendEmail();
    };

    const handleButtonClick = () => {
        closePopup();
        closeAllPopups();
    };

    const closePopup = () => {
        setPopupOpen(false);
        setBodyClass('');
        setPopupContent(null);
    };

    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);

    // Content for Invite2 component
    const invite2Content = (
        <div>
            <div
                className={
                    popupclass == true
                        ? 'invite_email_successfully invite_email_successfully1'
                        : 'invite_email_successfully invite_email_successfully2'
                }
            >
                <img src={popupclass == true ? messageicon1 : messageicon2} />
                <h3>Email Successfully Sent</h3>
                <button onClick={handleButtonClick}>OKAY</button>
            </div>
        </div>
    );

    return (
        <div className="modal-container">
            <div
                className={
                    popupclass == true
                        ? 'invite_email_popup invite_email_popup1'
                        : 'invite_email_popup invite_email_popup2'
                }
            >
                <h3>Invite Via Email</h3>
                <div className='content_up'>
                    <textarea rows="2"
                        value={emailValue}
                        readOnly={isReadonly}
                        onChange={(e) => setEmailValue(e.target.value)} />
                    <a className='edit_email_btn' href='javascript:void(0)' onClick={() => setIsReadonly(prevState => !prevState)}>click to edit email</a>
                </div>
                <div className="content_down">
                    <div className="content_down_top">
                        <label>Add their email address</label>
                        <input
                            type="email"
                            placeholder="Enter email addresses separated by commas"
                            onChange={itemEvent}
                            value={inputList}
                        />
                        <button onClick={listOfItems}>Add</button>
                    </div>
                    <div className='content_down_bottom'>
    {showAddedEmail && Items.length > 0 && (
        <div className='emails'>
            <h3 className='email_title'>Added email</h3>
            <ul>
                {Items.map((itemval, index) => (
                    <li key={index}>
                        <h3>{itemval}</h3>
                        <span>
                            <img
                                src={bin}
                                className="bin_sr"
                                onClick={() => deleteItem(index)}
                                alt="Delete"
                            />
                            <img
                                src={bin_red}
                                className="bin_red_sr"
                                onClick={() => deleteItem(index)}
                                alt="Delete"
                            />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )}

    {showSendButton && Items.length > 0 && (
        <button onClick={() => showPopup(invite2Content)}>
            Send email to {Items.length}
        </button>
    )}
</div>

                    <Modal
                        isOpen={isPopupOpen}
                        onRequestClose={closePopup}
                    >
                        <div className="modal-inner">
                            <button
                                onClick={handleButtonClick}
                                className="close-button no-border"
                            >
                                <img src={close_icon_blackImg} alt="Close Icon" />
                            </button>
                            {popupContent}
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}





