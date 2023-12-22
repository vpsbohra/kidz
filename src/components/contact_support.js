import React from 'react';

export default function ContactSupportForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="contact_support">
      <div className="contact_support_head">
        <h3>Send us a message</h3>
        <p>Fill out the form below, and we'll be get back to you.</p>
      </div>
      <div className="contact_support_form">
        <div className="form-group">
          <label>Your Name</label>
          <input className="form-control" type="text" placeholder="Pierre@gmail.com" />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input className="form-control" type="email" placeholder="Pierre@gmail.com" />
        </div>
        <div className="form-group">
          <textarea className="form-control textarea_control" placeholder="Write here..."></textarea>
        </div>
        <div class="form-group send_msg_btn_group">
          <button className='send_msg_btn_popup' type="submit" onClick={handleSubmit}>Send Message</button>
        </div>
      
      </div>
    </div>
  );
}
