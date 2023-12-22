export default function contact_support() {

    return (
        <div className="contact-support">
           <div className='contact_support_head'>
                <h3>Send us a message</h3>
                <p>Fill out the form below, and we'll be get back to you.</p>
            </div>
            <div className="contact-support-form">
                <div className="form-group">
                    <label>Your Name</label>
                    <input className="form-control" type="text" placeholder="Pierre@gmail.com" />
                </div>
                <div className="form-group">
                    <label>Your Email</label>
                    <input className="form-control" type="email" placeholder="Pierre@gmail.com" />
                </div>
                <div className="form-group">
                    <input className="form-control textarea_control" type="textarea" placeholder="Write here.." />
                </div>
                <button className='send_msg_btn_popup'>Send Message</button>
            </div>
        </div>
    )
}