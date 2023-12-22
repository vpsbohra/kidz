

import Loginheader from './LoginHeader.js';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import Progress_trackerImg from '../images/Progress_tracker.png';
import jus_conn_infoImg from '../images/jus_conn_info.png';
import monthly_goal_verifyImg from '../images/monthly_goal_verify.png';
import nounpaper_airplaneImg from '../images/noun-paper-airplane.png';
import noun_friendsImg from '../images/noun-friends.png';
import Arrow_right_3Img from '../images/Arrow-right_3.png';
import WithdrawBalanceForm from './withdraw_balance';
import Modal from 'react-modal';
import email_socialImg from '../images/email_social.png';
import whatsapp_socialImg from '../images/whatsapp_social.png';
import twitter_socialImg from '../images/twitter_social.png';
import Facebook_socialImg from '../images/Facebook_social.png';
import close_icon_blackImg from '../images/close_icon_black.png';
import InviteForm from './Invite';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
// Initialize react-modal
Modal.setAppElement('#root');
export default function Dashboard() {
  const [user, setUserdetail] = useState('');
  const [isWithdrawBalanceOpen, setWithdrawBalanceOpen] = useState(false);
  const [isInviteOpen, setInviteOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [popupclass, setPopupclass] = useState(true);
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(0);

  const showWithdrawBalancePopup = () => {
    setWithdrawBalanceOpen(true);
    setShowDashboard(false);
  };
  const closeWithdrawBalancePopup = () => {
    setWithdrawBalanceOpen(false);
    setShowDashboard(true);
  };
  const showInvitePopup = () => {
    setInviteOpen(true);
    setShowDashboard(false);
  };
  const closeInvitePopup = () => {
    setInviteOpen(false);
    setShowDashboard(true);
  };
  const closeAllPopups = () => {
    setWithdrawBalanceOpen(false);
    setInviteOpen(false);
    setShowDashboard(true);
  };
  useEffect(() => {
    const Profile = sessionStorage.getItem("user");
    const userdata = JSON.parse(Profile)
    setUserdetail(userdata);
    console.log(userdata);
  }, []);
  console.log(user.id);
  return (
    <>
      <Loginheader />
      <div className="main_dashboard_sr">
        <div className="dashboard_container">
          <div className="main_dashboard_sr-topsec">
            <div className="dashboard_top_oneSec_left">
              <h3>Good afternoon, {user.profile_name} </h3>
              <span>Just connected <img src={jus_conn_infoImg} /></span>
            </div> 
            <div className="dashboard_top_oneSec_Right">
              <span className="earnings_ava">Earnings available:$299</span>
              <button className="withdraw_blnc" onClick={showWithdrawBalancePopup}>Withdraw Balance</button>
              <Modal isOpen={isWithdrawBalanceOpen} onRequestClose={closeWithdrawBalancePopup}>
                <div className="modal-inner">
                  <button onClick={closeWithdrawBalancePopup} className="close-button">
                    <img src={close_icon_blackImg} />
                  </button>
                  <WithdrawBalanceForm onClose={closeWithdrawBalancePopup} />
                </div>
              </Modal>
            </div>
            <div className="Progress_top_one">
              {/* Progress bar */}
              <div className="Progressbar_full_top">
                <img src={Progress_trackerImg} />
              </div>
              <div className="Progress_top_Monthlygoal">
                <p>Monthly goal</p>
                <span>1/3  <img src={monthly_goal_verifyImg} />  </span>
              </div>
            </div>
          </div>
          <section className="spread_word_sec">
            <div className="spread_word_sec_inner">
              <div className="spread_word_sec_top">
                <img src={nounpaper_airplaneImg} />
                <h3>Spread the word </h3>
                <h5>Sharing is caring! Share yoiur unique referra link and help others discover KidzConnect. Earn for every person you bring on board</h5>
              </div>
              <div className="spread_word_linkCopy">
                <input type="text" value="kidzconnect.com/?viaDaisyJ20" readOnly />
                <button className="copy_btn">Copy</button>
              </div>
              <div className="spreadword_social">
                <button className="social_spread" onClick={function () { showInvitePopup(); setPopupclass(true) }}>Email <img src={email_socialImg} /></button>
                <Modal isOpen={isInviteOpen} onRequestClose={closeInvitePopup}>
                  <div className="modal-inner2">
                    <button onClick={closeInvitePopup} className="close-button">
                      <img src={close_icon_blackImg} />
                    </button>
                    <InviteForm onClose={closeInvitePopup} closeAllPopups={closeAllPopups} popupclass={popupclass} />
                  </div>
                </Modal>
                <button className="social_spread">Whatsapp <img src={whatsapp_socialImg} /></button>
                <button className="social_spread">Twitter <img src={twitter_socialImg} /></button>
                <button className="social_spread">Facebook <img src={Facebook_socialImg} /></button>
              </div>
            </div>
          </section>
          <section className="spread_word_sec Multiply_earnings_Sec">
            <div className="spread_word_sec_inner">
              <div className="spread_word_sec_top">
                <h2>Recruit and Earn</h2>
                <img src={noun_friendsImg} />
                <h3>Multiply your earnings </h3>
                <h5>Be sure to let your friends, family and network that they can join in too! As a Connector, the greater the size of your team, the greater the rewards will be.</h5>
              </div>
              <div className="spread_word_linkCopy">
                <input type="text" value="ambassador.kidzconnect.com/?viaDaisyJ20" readOnly />
                <button className="copy_btn">Copy</button>
              </div>
              <div className="spread_word_linkCopy_text">
                <p>Invite them to sign up using your personal link and enroll them as part of your team.</p>
              </div>
              <div className="spreadword_social">
                <button className="social_spread" onClick={function () { showInvitePopup(); setPopupclass(false) }}>Email <img src={email_socialImg} /></button>
                <Modal isOpen={isInviteOpen} onRequestClose={closeInvitePopup}>
                  <div className="modal-inner2">
                    <button onClick={closeInvitePopup} className="close-button">
                      <img src={close_icon_blackImg} />
                    </button>
                    <InviteForm onClose={closeInvitePopup} closeAllPopups={closeAllPopups} popupclass={popupclass} />
                  </div>
                </Modal>
                <button className="social_spread">Whatsapp <img src={whatsapp_socialImg} /></button>
                <button className="social_spread">Twitter <img src={twitter_socialImg} /></button>
                <button className="social_spread">Facebook <img src={Facebook_socialImg} /></button>
              </div>
            </div>
          </section>
          <section className="could_earn_sec">
            <div className="could_earn_sec_top_head">
              <img src={Arrow_right_3Img} />
              <h3>You could earn</h3>
              <span>$600</span>
            </div>
            <div className="could_earn_item">
              <h5>If I recruit</h5>
              <span className="range_input">
                <RangeSlider
                  className="range_input"
                  min="3"
                  max="20"
                  value={value1}
                  onChange={e => setValue1(e.target.value)}
                  tooltip='on'
                  tooltipPlacement='bottom'
                />
              </span>
              <div className="custom_people">
                <p>{value1}</p>
                <span>/people</span>
                <ReactTooltip
                  id="my-tooltip-1"
                  place="bottom"
                  content="Anyone that signs up using your Connector referral link."
                />
                <img data-tooltip-id="my-tooltip-1" className="custom_people_img" src={jus_conn_infoImg} />

              </div>
            </div>
            <div className="could_earn_item">
              <h5>If I make</h5>
              <span className="range_input">
                <RangeSlider
                  min="0"
                  max="20"
                  value={value2}
                  onChange={e => setValue2(e.target.value)}
                  tooltip='on'
                  tooltipPlacement='bottom'
                />
              </span>

              <div className="custom_people">
                <p>{value2}</p>
                <span>/sales</span>
                <ReactTooltip
                  id="my-tooltip-2"
                  place="bottom"
                  content="Sales made by using your KidzConnect referral link."
                />
                <img data-tooltip-id="my-tooltip-2" className="custom_people_img" src={jus_conn_infoImg} />
              </div>
            </div>
            <div className="could_earn_item">
              <h5>If they recruit</h5>
              <span className="range_input">
                <RangeSlider
                  min="3"
                  max="20"
                  value={value3}
                  onChange={e => setValue3(e.target.value)}
                  tooltip='on'
                  tooltipPlacement='bottom'
                />
              </span>

              <div className="custom_people">
                <p>{value3}</p>
                <span>/people</span>
                <ReactTooltip
                  id="my-tooltip-3"
                  place="bottom"
                  content="This considers any individuals who have signed up using a Connector referral link from among your recruits."
                />
                <img data-tooltip-id="my-tooltip-3" className="custom_people_img" src={jus_conn_infoImg} />
              </div>
            </div>
            <div className="could_earn_item">
              <h5>If they make</h5>
              <span className="range_input">
                <RangeSlider
                  min="0"
                  max="20"
                  value={value4}
                  onChange={e => setValue4(e.target.value)}
                  tooltip='on'
                  tooltipPlacement='bottom'
                />
              </span>

              <div className="custom_people">
                <p>{value4}</p>
                <span>/sales</span>
                <ReactTooltip
                  id="my-tooltip-4"
                  className='text123'
                  place="bottom"
                  content="Sales made by any of your recruits, either V1 or V2."
                />
                <img data-tooltip-id="my-tooltip-4" className="custom_people_img" src={jus_conn_infoImg} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
