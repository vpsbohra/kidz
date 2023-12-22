import react from "react";
import { useState } from "react";
import Loginheader from "./LoginHeader"
import bank from '../images/Bank.png';
import paypal from '../images/paypal.png';
import show_passwImage from '../images/show_passw.png';
import show_passwEYEImage from '../images/show_passwEyeOn.png';

export default function Myprofile() {
  
  const [showPassword1, setShowPassword1] = useState(false);
  const [imgSrc1, setImgSrc1] = useState(
    show_passwEYEImage
  );
  const [showPassword2, setShowPassword2] = useState(false);
  const [imgSrc2, setImgSrc2] = useState(
    show_passwEYEImage
  );
  const [showPassword3, setShowPassword3] = useState(false);
  const [imgSrc3, setImgSrc3] = useState(
    show_passwEYEImage
  );


  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  
  const changeImg1 = () => {
    if (imgSrc1 == show_passwEYEImage) {
      setImgSrc1(show_passwImage);
    }
    else if (imgSrc1 == show_passwImage) {
      setImgSrc1(show_passwEYEImage);
    }
  };


  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  
  const changeImg2 = () => {
    if (imgSrc2 == show_passwEYEImage) {
      setImgSrc2(show_passwImage);
    }
    else if (imgSrc2 == show_passwImage) {
      setImgSrc2(show_passwEYEImage);
    }
  };


  const toggleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };
  
  const changeImg3 = () => {
    if (imgSrc3 == show_passwEYEImage) {
      setImgSrc3(show_passwImage);
    }
    else if (imgSrc3 == show_passwImage) {
      setImgSrc3(show_passwEYEImage);
    }
  };
  
  //********************************************* */ Edit Profile * *************************************//
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [country, setCountry] = useState('');
  const [birthcity, setBirthcity] = useState('');
  const [nationality, setNationality] = useState('');
  const [zip, setZip] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [securitynumber, setSecurityNumber] = useState('');
  const [identificationnumber, setIdentificationNumber] = useState('');

  const handleSubmit = event => { 
    event.preventDefault();
    console.log('firstName ', firstName);
    console.log('lastName ', lastName);
    console.log('nickname', nickName);
    console.log('country', country);
    console.log('birthcity', birthcity);
    console.log('nationality', nationality);
    console.log('Zip code', zip);
    console.log('Date of birth', dob);
    console.log('Date of birth', gender);
    console.log('Security number', securitynumber);
    console.log('Tax identification number', identificationnumber);

    setFirstName('');
    setLastName('');
    setNickName('');
    setCountry('');
    setBirthcity('');
    setNationality('');
    setZip('');
    setDob('');
    setSecurityNumber('');
    setIdentificationNumber('');

  };
  //********************************************* */ Edit Profile * *************************************//

  //********************************************* */ Update Email * *************************************//
  const [mail, setMail] = useState('');
  const [umail, setUMail] = useState('');

  const handleSubmit2 = event => {
    event.preventDefault();
    console.log('Old Mail ', mail);
    console.log('New Mail ', umail);

    setMail('');
    setUMail('');

  };
  //********************************************* */ Update Email * *************************************//

  //********************************************* */ Update Password * *************************************//
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [cnewpass, setCnewpass] = useState('');

  const handleSubmit3 = event => {
    event.preventDefault();
    console.log('Old Password ', oldpass);
    console.log('New Password ', newpass);

    setOldpass('');
    setNewpass('');
    setCnewpass('');
    setShowPassword1(false);
    setShowPassword2(false);
    setShowPassword3(false);
    setImgSrc1(show_passwEYEImage);
    setImgSrc2(show_passwEYEImage);
    setImgSrc3(show_passwEYEImage);

  };

  //********************************************* */ Update Password * *************************************//

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  const [rtoggleState, setrToggleState] = useState(0);
  const toggleradio = (idx) => {
    setrToggleState(idx)
  }
  return (
    <div className="myprofile_page">
  
    <Loginheader/>
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Personal information</button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Payout methods</button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Transaction history</button>
      </div>
      
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
        <div className="myprofile_tab_inner">
          <div className="myprofile_left">
       
            {/* ********************Edit Profile********************* */}
            <h4>Edit Profile</h4>
            <form onSubmit={handleSubmit}>
             
            <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="Marguerite" id="first_name" name="first_name" onChange={event => setFirstName(event.target.value)}
                value={firstName} />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Jones" id="last_name" name="last_name" onChange={event => setLastName(event.target.value)}
                value={lastName} />
            </div>
            <div className="form-group">
              <label>What do you want to be called?</label>
              <input type="text" className="form-control" placeholder="Daisy" id="nick_name" name="nick_name" onChange={event => setNickName(event.target.value)}
                value={nickName} />
              <p>This will be displayed as your public name on your profile</p>
              </div>
            <div className="form-group">
              <label>Country of birth</label>
              <select className="form-control" onChange={event => setCountry(event.target.value)} value={country} >
                <option name="country" value="None" >Select here</option>
                <option name="country" value="England" >England</option>
                <option name="country" value="France">France</option>
              </select>
              </div>
            <div className="form-group">
              <label>City of birth</label>
              <input className="form-control" type="text" placeholder="Paris" id="birth_city" name="birth_city" onChange={event => setBirthcity(event.target.value)}
                value={birthcity} />
</div>
            <div className="form-group">
              <label>Country of nationality</label>
              <select className="form-control" onChange={event => setNationality(event.target.value)} value={nationality}>
                <option name="nationality" value="None" >Select here</option>
                <option name="nationality" value="England" >England</option>
                <option name="nationality" value="France" >France</option>
              </select>
              </div>
            <div className="form-group">
              <label>Postal code/Zip code</label>
              <input className="form-control" type="number" placeholder="7500" id="zip" name="zip" onChange={event => setZip(event.target.value)}
                value={zip} /><br />
</div>
            <div className="form-group">
              <label for="birthday">Date of birth</label><br />
              <input className="form-control" type="date" name="dob" id="dob" onChange={event => setDob(event.target.value)}
                value={dob} /><br />
</div>
            <div className="form-group">

              <label>Gender</label>

              <div className="form_checkbox_sr">
                <input type="radio" id="male" name="gender" value="male" onChange={event => setGender(event.target.value)}
                />
                <label>Male</label><br />
              </div>

              <div className="form_checkbox_sr">
                <input type="radio" id="female" name="gender" value="female" onChange={event => setGender(event.target.value)} />
                <label >Female</label><br />
              </div>
              
              <div className="form_checkbox_sr">
                <input type="radio" id="none" name="gender" value="none" onChange={event => setGender(event.target.value)} />
                <label >Prefer not to say</label>
              </div>

            </div>

            <div className="form-group">
              <label>Social Security Number</label>
              <input className="form-control" type="number" placeholder="12345678912337721" id="security_number" name="security_number" onChange={event => setSecurityNumber(event.target.value)}
                value={securitynumber} />
              <p>Please enter your social security number:15 digits. Only authorized numbers. EIA operates under the VDI status provided for in ariticles L.135-1 to L.135-3 of the Commercial Code. Therefore,EIA members are required to provide their social security number.</p>
              </div>
            <div className="form-group">
              <label>Tax Identification Number</label>
              <input className="form-control" type="number" placeholder="0023344776688" id="identification_number" name="identification_number" onChange={event => setIdentificationNumber(event.target.value)}
                value={identificationnumber} />
              <p>*Please enter your tax identification number:13 consecutive digits, with the first chararcters being 0,1,2,3</p>
              </div>
              <button>SAVE CHANGES</button>
            </form>
          </div>
          <div className="myprofile_right">
            <div className="updatemail">
              {/* ********************Update Mail********************* */}
              <h5>Update Email Address</h5>
              <form onSubmit={handleSubmit2}>
                <div className="form-group">
                  <label>Email address</label>
                  <input className="form-control" type="mail" placeholder="daisy@gmail.com" id="mail" name="mail" onChange={event => setMail(event.target.value)}
                    value={mail} />
                </div>
                <div className="form-group">
                  <label>New email address</label>
                  <input className="form-control" type="mail"  id="umail" name="umail" onChange={event => setUMail(event.target.value)}
                    value={umail} />
                  </div>
                <button>SAVE CHANGES</button>
              </form>
            </div>
            <div className="changepass">
              {/* ********************Update Password********************* */}
              <h5>Change Password</h5>
              <form onSubmit={handleSubmit3}>
               <div className="form-group">
                  <label>Old password</label>
                  <input className="form-control" type={showPassword1 ? "text" : "password"} id="oldpass" name="oldpass" onChange={event => setOldpass(event.target.value)}
                    value={oldpass} />  <span className="show_passw_btn" onClick={function () { toggleShowPassword1(); changeImg1() }}><img src={imgSrc1} alt="meet-character-1" /></span>
                </div>
                <div className="form-group">
                  <label>New password</label>
                  <input className="form-control" type={showPassword2 ? "text" : "password"} id="newpass" name="newpass" onChange={event => setNewpass(event.target.value)}
                    value={newpass} /><span className="show_passw_btn" onClick={function () { toggleShowPassword2(); changeImg2() }}><img src={imgSrc2} alt="meet-character-1" /></span>
                </div>
                <div className="form-group">
                  <label>Confirm new password</label>
                  <input className="form-control" type={showPassword3 ? "text" : "password"} id="cnewpass" name="cnewpass" onChange={event => setCnewpass(event.target.value)}
                    value={cnewpass} /><span className="show_passw_btn" onClick={function () { toggleShowPassword3(); changeImg3() }}><img src={imgSrc3} alt="meet-character-1" /></span>
                </div>
                <button>SAVE CHANGES</button>
              </form>
            </div>
          </div>
        </div>
        </div>
        <div className={toggleState === 2 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
          <div className={rtoggleState === 2_1 ? "rcontent ractive-content" : "rcontent "}>

            <h4>Add bank account information</h4>
            <label>What type of content is this?</label>
            <label>Checkings</label>
            <input type="radio" id="checkings" name="accType" value="checkings" /><br />
            <label >Savings</label>
            <input type="radio" id="savings" name="accType" value="savings" />
            <label>Account holder name</label>
            <input type="text" placeholder="Enter account holder name" />
            <p>Enter full name as appears on you bank account</p>
            <label>Routing number</label>
            <input type="text" placeholder="Enter routing number" />
            <p>Please verify to ensure the number has been entered accurately.</p>
            <h5>Address associated with account</h5>
            <label>Full address</label>
            <input type="text" placeholder="Enter full address" />
            <label>Appt,building,house number</label>
            <input type="text" placeholder="Enter full address" />
            <label>City</label>
            <input type="text" placeholder="Paris" />
            <label>Postal code/zip code</label>
            <input type="number" placeholder="7500" />

            <button onClick={() => toggleradio(2_2)}>DONE</button>
            <button onClick={() => toggleradio(2)}>BACK</button>

          </div>
          <div className={rtoggleState === 2_1 ? "rcontent " : "rcontent ractive-content"}>
            <h4>Set a payout method to get paid!</h4>
            <p>Billing country</p>
            <select name="billingCountry">
              <option value="India">India</option>
              <option value="France" selected>France</option>
            </select><br />
            <button className={rtoggleState !== 0 ? "button-active" : "button"} onClick={() => toggleradio(2_1)}>ADD PAYOUT METHOD</button><br />
            <label><img src={bank} />Bank Account</label>
            <input type="radio" id="Bank_account" name="method" value="Bank_account" onClick={() => toggleradio(2_1)} /><br />
            <label ><img src={paypal} />Paypal</label>
            <input type="radio" id="Paypal" name="method" value="Paypal" />
          </div>


        </div>
        <div className={toggleState === 3 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
          <div>
            <h4>Payout history</h4>
            <input type="date" name="date" />
          </div>
          <table>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Breakdown</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>July 17th,2023</td>
              <td>Withdrawal</td>
              <td>Bank account - Daisy Jones</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>July 17th,2023</td>
              <td>Withdrawal Fee</td>
              <td>Withdrawal fee - Paypal</td>
              <td>$20.00</td>
            </tr>
          </table>
        </div>
      </div>

    </div>
    </div>
  )
}