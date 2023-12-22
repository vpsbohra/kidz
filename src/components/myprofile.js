
import react, { useEffect } from "react";
import { useState } from "react";
import Loginheader from "./LoginHeader"
import bank from '../images/Bank.png';
import paypal from '../images/paypal.png';
import show_passwImage from '../images/show_passw.png';
import show_passwEYEImage from '../images/show_passwEyeOn.png';
import IconAwesome_car01Image from '../images/Icon-awesome-caret-down.png';
import IconAwesome_carImage from '../images/chevron-down001.png';
import axios from 'axios';
import AuthUser from "./AuthUser";
import { json } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import { getCountries, getCities } from 'countries-cities';
import Select from 'react-select';

export default function Myprofile() {
  const salt = bcrypt.genSaltSync(10)
  const { user, token } = AuthUser();
  const [editedData, setEditedData] = useState({});
  const [userData, setUserData] = useState({});
  const userString = sessionStorage.getItem('user');
  const user_detail = JSON.parse(userString);
  const { getUserId } = AuthUser();
  const userId = getUserId();

  useEffect(() => {
    fetchAccount();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://mykidz.online/api/get-ambassador-user-data/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      const { name, ...userData } = response.data;
      const [fname, lname] = name.split(' ');

      setUserData({ fname, lname, ...userData });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const countries = getCountries().map((country) => ({
    value: country,
    label: country,
  }));
  const countries1 = getCountries().map((country) => ({
    value: country,
    label: country,
  }));

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
    // setCity(null);
  };

  const handleCountryChange1 = (selectedOption) => {
    setCountry1(selectedOption);
    // setCity(null);
  };
  const handleCountryChange3 = (selectedOption) => {
    setBillingcountry(selectedOption);
    // setCity(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleUpdate = async (field) => {
    try {
      const country = countryy.value;
      const country_of_nationality = country1.value;
      if (field === 'fname' || field === 'lname') {
        const updatedFname = field === 'fname' ? editedData.fname : userData.fname;
        const updatedLname = field === 'lname' ? editedData.lname : userData.lname;
        const fullName = `${updatedFname} ${updatedLname}`;
        updateData.name = fullName;
        if ('fname' in updateData) delete updateData.fname;
        if ('lname' in updateData) delete updateData.lname;
      } else if (field === 'postal_code') {
        updateData.postal_code = editedData.postal_code ? editedData.postal_code : userData.postal_code;
        delete updateData.postal_code;
      } else if (field === 'city') {
        updateData.city = editedData.city ? editedData.city : userData.city;
        delete updateData.city;
      } else if (field === 'profile_name') {
        updateData.profile_name = editedData.profile_name ? editedData.profile_name : userData.profile_name;
        delete updateData.profile_name;
      } else if (field === 'social_security_number') {
        updateData.social_security_number = editedData.social_security_number ? editedData.social_security_number : userData.social_security_number;
        delete updateData.social_security_number;
      } else if (field === 'tax_identification_number') {
        updateData.tax_identification_number = editedData.tax_identification_number ? editedData.tax_identification_number : userData.tax_identification_number;
        delete updateData.tax_identification_number;
      } else if (field === 'date_of_birth') {
        updateData.date_of_birth = editedData.date_of_birth ? editedData.date_of_birth : userData.date_of_birth;
        delete updateData.date_of_birth;
      } else if (field === 'gender') {
        updateData.gender = editedData.gender ? editedData.gender : userData.gender;
        delete updateData.date_of_birth;
      }
      const updateData = {
        ...editedData, country: userData.country ? userData.country : countryy.value, country_of_nationality: userData.country_of_nationality ? userData.country_of_nationality : country1.value,
        name: `${editedData.fname ? editedData.fname : userData.fname} ${editedData.lname ? editedData.lname : userData.lname}`,
        postal_code: editedData.postal_code ? editedData.postal_code : userData.postal_code,
        city: editedData.city ? editedData.city : userData.city,
        profile_name: editedData.profile_name ? editedData.profile_name : userData.profile_name,
        social_security_number: editedData.social_security_number ? editedData.social_security_number : userData.social_security_number,
        tax_identification_number: editedData.tax_identification_number ? editedData.tax_identification_number : userData.tax_identification_number,
        date_of_birth: editedData.date_of_birth ? editedData.date_of_birth : userData.date_of_birth,
        gender: editedData.gender ? editedData.gender : userData.gender,
      };


      console.log("UPDATED DATA", updateData);
      const response = await axios.patch(`https://mykidz.online/api/ambassador-update-user-data/${user.id}`, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      alert("User Data Updated Successfully");
      const updatedUserData = { ...user_detail, ...updateData };
      sessionStorage.setItem('user', JSON.stringify(updatedUserData));
      fetchUserData();
      setUserData((prevState) => ({ ...prevState, ...updateData }));
      setEditedData({});
    } catch (error) {
      if (error.response && error.response.data) {
      } else {
        console.error('Error:', error);
      }
    }
  };
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    handleUpdate('fname');
    handleUpdate('lname');
    handleUpdate('profile_name');
    handleUpdate('city');
    handleUpdate('postal_code');
    handleUpdate('social_security_number');
    handleUpdate('tax_identification_number');
    handleUpdate('country');
    handleUpdate('nationality');
    handleUpdate('date_of_birth');
    handleUpdate('gender');
  };
  const handleUpdateMail = async (event) => {
    event.preventDefault();
    const data1 = {
      email: editedData.mail,
    }
    try {
      const response = await axios.patch(`https://mykidz.online/api/ambassador-update-email-data/${user.id}`, data1, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      console.log("RESPONSE MAIL", response);
      alert("Mail Updated Successuflly");
    } catch (error) {
      console.log("ERROR updating mail");
    }
  };
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    const newpass = editedData.newPassword;
    const oldpass = editedData.oldPassword;
    const data1 = {
      new_password: newpass,
      old_password: oldpass,
    }
    try {
      const response = await axios.patch(`https://mykidz.online/api/ambassador-update-password/${user.id}`, data1, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      console.log("RESPONSE", response);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Error updating password:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };

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
  const [countryy, setCountry] = useState('');
  const [birthcity, setBirthcity] = useState('');
  const [nationality, setNationality] = useState('');
  const [zip, setZip] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [securitynumber, setSecurityNumber] = useState('');
  const [identificationnumber, setIdentificationNumber] = useState('');


  //********************************************* */ Edit Profile * *************************************//

  //********************************************* */ Update Email * *************************************//
  const [mail, setMail] = useState('');
  const [umail, setUMail] = useState('');

  //********************************************* */ Update Email * *************************************//

  //********************************************* */ Update Password * *************************************//
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [cnewpass, setCnewpass] = useState('');

  //********************************************* */ Update Password * *************************************//
  //******************************************** / Payout Methods  ************************************//
  const [billingcountry, setBillingcountry] = useState('');
  const [paymentmethod, setPaymentmethod] = useState('');
  const [accounttype, setAcctype] = useState('');
  const [ahname, setAhname] = useState('');
  const [routingnumber, setRoutingnumber] = useState('');
  const [accountnumber, setAccountnumber] = useState('');
  const [fulladdress, setFulladdress] = useState('');
  const [address1, setAddress1] = useState('');
  const [city, setCity] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const fetchAccount = async () => {
    try {
      const response = await axios.get(`https://mykidz.online/api/get-ambassador-user-bank-account/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      const data = response.data[0];
      setUid(data.id);
      setName(data.account_holder_name);
      setAhname(data.account_holder_name);
      setAccountnumber(data.account_number);
      setAcctype(data.account_type);
      setRoutingnumber(data.routing);
      setFulladdress(data.full_address);
      setAddress1(data.house_number);
      setCity(data.city);
      setPostalcode(data.zip_code);
    } catch (error) {
      console.error('Error fetching user account:', error);
    }
  };

  const handleSubmit4 = async (event) => {
    const data1 = {
      user_id: user.id,
      account_holder_name: ahname,
      account_number: accountnumber,
      account_type: accounttype,
      routing: routingnumber,
      full_address: fulladdress,
      house_number: address1,
      city: city,
      zip_code: postalcode,
    }
    try {
      const response = await axios.post(`https://mykidz.online/api/ambassador-user-bank-account`, data1, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      console.log("RESPONSE", response);
      fetchAccount();

    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Error updating password:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
    setAhname('');
    setRoutingnumber('');
    setFulladdress('');
    setAddress1('');
    setCity('');
    setPostalcode('');
    setAccountnumber('');
  };

  const handleUpdateAccount = async (event) => {

    const data1 = {
      user_id: user.id,
      account_holder_name: ahname,
      account_number: accountnumber,
      account_type: accounttype,
      routing: routingnumber,
      full_address: fulladdress,
      house_number: address1,
      city: city,
      zip_code: postalcode,
    }
    try {
      const response = await axios.patch(`https://mykidz.online/api/update-ambassador-user-bank-account/${uid}`, data1, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      console.log("RESPONSE", response);
      alert("Account Updated Successfully");
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Error updating password:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  const handleRemoveAccount = async (event) => {


    try {
      const response = await axios.delete(`https://mykidz.online/api/remove-ambassador-user-bank-account/${uid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      console.log("RESPONSE", response);
      alert("Account Removed Successfully");
      setName('');
      setAhname('');
      setRoutingnumber('');
      setFulladdress('');
      setAddress1('');
      setCity('');
      setPostalcode('');
      setAccountnumber('');
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        console.error('Error updating password:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  //******************************************** / Payout Methods  ************************************//
  const [country1, setCountry1] = useState('');
  const [country3, setCountry3] = useState('');
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

      <Loginheader />
      <div className="myprofile_page_inners">
        <div className="container">
          <div className="myprofile_page_tab">
            <nav className="bloc-tabs nav nav-tabs">
              <li className="nav-item" >
                <span className={toggleState === 1 ? "tabs active-tabs nav-link" : "tabs nav-link"} onClick={() => toggleTab(1)}><h4>Personal Information</h4></span>
              </li>
              <li className="nav-item">
                <span className={toggleState === 2 ? "tabs active-tabs nav-link" : "tabs nav-link"} onClick={() => toggleTab(2)}><h4>Payout Methods</h4></span>
              </li>
              <li className="nav-item ">
                <span className={toggleState === 3 ? "tabs active-tabs nav-link" : "tabs nav-link"} onClick={() => toggleTab(3)}><h4>Transaction History</h4></span>
              </li>
            </nav>

            <div className="content-tabs">
              <div className={toggleState === 1 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
                <div className="myprofile_tab_inner">
                  <div className="myprofile_left">
                    {/* ********************Edit Profile********************* */}
                    <h4>Edit Profile</h4>
                    <form onSubmit={handleUpdateProfile}>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={userData.fname}
                          id="fname"
                          name="fname"
                          value={editedData.fname}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={userData.lname}
                          id="lname"
                          name="lname"
                          value={editedData.lname}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>What do you want to be called?</label>
                        <input type="text" className="form-control" value={editedData.profile_name || userData.profile_name} placeholder="Nick Name" id="nick_name" name="profile_name" onChange={handleInputChange} />
                        <span className="called_span_for">This will be displayed as your public name on your profile</span>
                      </div>
                      <div className="form-group select_iocn_ful">
                        <label>Country of birth</label>
                        <Select className="form_control_select"
                          options={countries}
                          value={country1}
                          onChange={handleCountryChange1}
                          name="country"
                        />
                        <img className="select_iocn" src={IconAwesome_carImage} />
                      </div>
                      <div className="form-group">
                        <label>City of birth</label>
                        <input className="form-control" type="text" id="city" name="city" value={editedData.city || userData.city} onChange={handleInputChange} />
                      </div>
                      <div className="form-group select_iocn_ful">
                        <label>Country of nationality</label>
                        <Select className="form_control_select"
                          options={countries}
                          value={countryy}
                          onChange={handleCountryChange}
                          name="nationality"
                        />
                        <img className="select_iocn" src={IconAwesome_carImage} />
                      </div>
                      <div className="form-group">
                        <label>Postal code/Zip code</label>
                        <input className="form-control" type="number" id="zip" name="postal_code" value={editedData.postal_code || userData.postal_code} onChange={handleInputChange} /><br />
                      </div>
                      <div className="form-group">
                        <label for="birthday">Date of birth</label><br />
                        <input className="form-control" type="date" name="date_of_birth" id="dob" onChange={handleInputChange} /><br />
                      </div>
                      <div class="form-group gender_item_group">
                        <label class="gender_item">Gender*</label>
                        <div class="form_checkbox_sr">
                          <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} />
                          <label for="Male"> Male</label>
                        </div>
                        <div class="form_checkbox_sr">
                          <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} />
                          <label for="Female"> Female</label>
                        </div>
                        <div class="form_checkbox_sr">
                          <input type="radio" id="none" name="gender" value="none" onChange={handleInputChange} />
                          <label for="Prefer_not_to_say">Prefer not to say</label>
                        </div>
                      </div>
                      <div className="form-group Social_Security_item">
                        <label>Social Security Number</label>
                        <input className="form-control" type="number" value={editedData.social_security_number || userData.social_security_number} id="security_number" name="social_security_number" onChange={handleInputChange}
                        />
                        <span>Please enter your social security number:15 digits. Only authorized numbers. EIA operates under the VDI status provided for in ariticles L.135-1 to L.135-3 of the Commercial Code. Therefore,EIA members are required to provide their social security number.</span>
                      </div>
                      <div className="form-group Tax_Identification_item">
                        <label>Tax Identification Number</label>
                        <input className="form-control" type="number" value={editedData.tax_identification_number || userData.tax_identification_number} id="identification_number" name="tax_identification_number" onChange={handleInputChange}
                        />
                        <span>*Please enter your tax identification number:13 consecutive digits, with the first chararcters being 0,1,2,3</span>
                      </div>
                      <button className="btn btn-primary mt-4" >SAVE CHANGES</button>
                    </form>
                  </div>
                  <div className="myprofile_right">
                    <div className="updatemail">
                      {/* ********************Update Mail********************* */}
                      <h4>Update Email Address</h4>
                      <form onSubmit={handleUpdateMail}>
                        <div className="form-group">
                          <label>Email address</label>
                          <input className="form-control" type="mail" id="mail" name="mail" onChange={handleInputChange} value={editedData.mail}
                          />
                        </div>
                        <div className="form-group">
                          <label>Current Email</label>
                          <div className="form_input_field">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              name="email"
                              value={userData.email}
                              readOnly
                            />
                          </div>
                        </div>
                        <button className="btn btn-primary mt-4" >SAVE CHANGES</button>
                      </form>
                    </div>
                    <div className="Change_Password_myprofile">
                      {/* ********************Update Password********************* */}
                      <h5>Change Password</h5>
                      <form onSubmit={handleUpdatePassword}>
                        <div className="form-group mt-3 Password_form_sr">
                          <label>Old password</label>
                          <input className="form-control" type={showPassword1 ? "text" : "password"} id="oldPassword" name="oldPassword" onChange={handleInputChange}
                          /> <span className="show_passw_btn" onClick={function () { toggleShowPassword1(); changeImg1() }}><img src={imgSrc1} alt="meet-character-1" /></span>
                        </div>
                        <div className="form-group mt-3 Password_form_sr">
                          <label>New password</label>
                          <input className="form-control" type={showPassword2 ? "text" : "password"} id="newPassword" name="newPassword" onChange={handleInputChange}
                          /><span className="show_passw_btn" onClick={function () { toggleShowPassword2(); changeImg2() }}><img src={imgSrc2} alt="meet-character-1" /></span>
                        </div>
                        <div className="form-group mt-3 Password_form_sr">
                          <label>Confirm new password</label>
                          <input className="form-control" type={showPassword3 ? "text" : "password"} id="confirmnewPassword" name="confirmnewPassword" onChange={handleInputChange}
                          /><span className="show_passw_btn" onClick={function () { toggleShowPassword3(); changeImg3() }}><img src={imgSrc3} alt="meet-character-1" /></span>
                        </div>
                        <button className="btn btn-primary mt-4">SAVE CHANGES</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className={toggleState === 2 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
                <div className={rtoggleState === 2_1 ? "rcontent ractive-content" : "rcontent "}>
                  <h4>Add bank account information</h4>
                  <span className="what_typeContent">What type of content is this?</span>
                  <div className="form-group mt-3 Password_form_sr checked_form_cheked">
                    <label>Checkings</label>
                    <input type="radio" id="checkings" name="accType" value="checkings" onChange={event => setAcctype(event.target.value)} />
                  </div>
                  <div className="form-group mt-3 Password_form_sr checked_form_cheked">
                    <label >Savings</label>
                    <input type="radio" id="savings" name="accType" value="savings" onChange={event => setAcctype(event.target.value)} />
                  </div>
                  <div className="form-group mt-3 Password_form_sr">
                    <label>Account holder name</label>
                    <input className="form-control" type="text" placeholder="Enter account holder name" onChange={event => setAhname(event.target.value)}
                      value={ahname} />
                    <p>Enter full name as appears on you bank account</p>
                  </div>
                  <div className="form-group mt-3 Password_form_sr">
                    <label>Routing number</label>
                    <input className="form-control" type="number" placeholder="Enter routing number" onChange={event => setRoutingnumber(event.target.value)}
                      value={routingnumber} />
                    <p>Please verify to ensure the number has been entered accurately.</p>
                  </div>
                  <div className="form-group mt-3 Password_form_sr">
                    <label>Account number</label>
                    <input className="form-control" type="number" placeholder="Enter account number" onChange={event => setAccountnumber(event.target.value)} value={accountnumber} />
                    <p>Please verify to ensure the number has been entered accurately.</p>
                  </div>
                  <h5 className="address_accociated">Address associated with account</h5>
                  <div className="form-group mt-3 Password_form_sr">
                    <label>Full address</label>
                    <input className="form-control" type="text" placeholder="Enter full address" onChange={event => setFulladdress(event.target.value)}
                      value={fulladdress} />
                  </div>
                  <div className="form-group mt-3 Password_form_sr">
                    <label>Appt,building,house number</label>
                    <input className="form-control" type="text" placeholder="Enter full address" onChange={event => setAddress1(event.target.value)}
                      value={address1} />
                  </div>
                  <div className="form-group mt-3 Password_form_sr form_full_sr">
                    <div className="form_group_half_sr">
                      <label>City</label>
                      <input className="form-control" type="text" placeholder="Paris" onChange={event => setCity(event.target.value)}
                        value={city} />
                    </div>
                    <div className="form_group_half_sr">
                      <label>Postal code/zip code</label>
                      <input className="form-control" type="number" placeholder="7500" onChange={event => setPostalcode(event.target.value)}
                        value={postalcode} />
                    </div>
                  </div>
                  <div className="form-group mt-3 Password_form_sr form_payment_btn">
                    <button className="btn btn-primary mt-4 back_payment_btn" onClick={() => toggleradio(2)}>BACK</button>
                    {name ? (<><button className="btn btn-primary mt-4 done_payment_btn" onClick={function () { toggleradio(2_2); handleUpdateAccount() }}>Update</button></>) : (<><button className="btn btn-primary mt-4 done_payment_btn" onClick={function () { toggleradio(2_2); handleSubmit4() }}>DONE</button></>)}
                  </div>
                </div>
                <div className={rtoggleState === 2_1 ? "rcontent " : "rcontent ractive-content"}>
                  <h4 className="payout_method_ttl">Set a payout method to get paid!</h4>
                  <div className="form-group Billing_country_select">
                    <label>Billing country</label>
                    <Select className="form_control_select"
                      options={countries1}
                      onChange={handleCountryChange3}
                      name="country"
                      value={billingcountry}
                    />
                    <img className="select_iocn" src={IconAwesome_carImage} />
                  </div>
                  {name ? (
                    <>
                      <div className="payout_method_btn payout_method_btn-cstm">
                        <button className="button-active btn btn-primary mt-4" onClick={() => toggleradio(2_1)}>ADD PAYOUT METHOD</button>
                      </div>
                      <div className="form-group payment_method_form form-group payment_method_form-default">
                        <div className="default-cstm">
                          <span>Default</span>
                          <label><img src={bank} /> Bank Account - {name} </label>
                        </div>
                        <div className="remove-cstm-btn">
                          <button className="remove" onClick={handleRemoveAccount}>Remove</button>
                          <button onClick={() => toggleradio(2_1)}>Modify</button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-group payment_method_form form-group payment_method_form-default">
                        <div className="default-cstm">
                          <label><img src={bank} /> Bank Account</label>
                        </div>
                        <div className="remove-cstm-btn">
                          <input type="radio" id="Bank_account" name="method" value="Bank_account" onChange={event => setPaymentmethod(event.target.value)} onClick={() => toggleradio(2_1)} />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="form-group payment_method_form">
                    <label ><img src={paypal} />Paypal</label>
                    <input type="radio" id="Paypal" name="method" value="Paypal" onChange={event => setPaymentmethod(event.target.value)} />
                  </div>
                </div>
              </div>
              <div className={toggleState === 3 ? "content_tab_Sr active-content" : "content_tab_Sr"}>
                <div className="form-group Payout_history_tab">
                  <h4>Payout history</h4>
                  <input className="form-control" type="date" name="date" />
                </div>
                <div className="table_outer_payout_history">
                  <table className="table">
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
        </div>
      </div>
    </div>
  )
}