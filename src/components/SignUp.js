import { useState } from "react";
import { Link, useNavigate, useLocation, useHistory } from 'react-router-dom';
import AuthUser from './AuthUser';
import Select from 'react-select';
import Logo from '../images/KIDZCONNECT-1.png';
import { getCountries, getCities } from 'countries-cities';
import show_passwImage from '../images/show_passw.png';
import show_passwEYEImage from '../images/show_passwEyeOn.png';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profileName, setProfileName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [country1, setCountry1] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [social_number, setSocialnumber] = useState('');
    const [tax_number, setTaxnumber] = useState('');
    const [referral_code, setReferralcode] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);


    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const handleError = (message) => {
        setErrorMessage(message);
      };
    const submitForm = () => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };

        const data = {
            first_name: `${firstName}`,
            last_name: `${lastName}`,
            profile: `${profileName}`,
            email: email,
            birth_country :country,
            birth_city :city,
            nationality : country1,
            zip_code : postalCode,
            date_of_birth : `${date}/${month}/${year}`,
            gender: gender,
            password: password,
            social_number : social_number,
            tax_number : tax_number,
            referral_code : referral_code,
        };
        http
        .post('/ambassador-register', data, { headers: headers })
        .then((res) => {
            const { access_token, user } = res.data;
            setToken(res.data.user,res.data.access_token);
            navigate('/dashboard', { state: { user } });
        })
        .catch((error) => {
            // if (error.response.status === 422) {
            //     const errors = error.response.data.errors;
            //     setErrors(errors);
            // } else {
            //     // console.log(error.response.data.message);
            // }
        });

        http.post(`https://kidzconnect.w3upwork.in/api/addclient?referral_code=${referral_code}&plan=free&first_name=${firstName}&last_name=${lastName}&email=${email}&country_code=${country.value}&city=${city.value}&zip_code=${postalCode}`, { headers: headers })
        .then((response) => {
           console.log("yyyyyyyyyyyyyyyy",response)
        })
        .catch((error) => {
            console.error('Error in addclient API:', error);
        });

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
    

    const handleCityChange = (selectedOption) => {
        setCity(selectedOption);
    };
    

    const cities = country ? getCities(country.value).map((city) => ({
        value: city,
        label: city,
    })) : [];
    
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
      const [imgSrc, setImgSrc] = useState(
        show_passwEYEImage
    );
    const changeImg = () => {
        if (imgSrc ==  show_passwEYEImage) {
            setImgSrc(show_passwImage);
        }
        else if (imgSrc == show_passwImage) {
            setImgSrc(show_passwEYEImage);
        }
    };

    // Function to validate email format
    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    return (
        <>
       <div className='signup-page'>
            <div className='content-wrapper'>
                <div className='header_signup'>
                    <div className='logo-img'>
                        <div className="logo">
                            <Link to="/"><img src={Logo} alt="Description of the image" /></Link>
                        </div>
                    </div>
                </div>
                <div className="card signup_sr_cnt signup_srform">
                    <div className="form-group">
                        <label>First Name*</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your first name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors && errors.first_name && (
                            <span className="text-danger">{errors.first_name}</span>
                        )}
                        {errors && errors.firstName && (
                            <span className="text-danger">{errors.firstName}</span>
                        )}
                        </div>
                        <div className="form-group">
                        <label>Last Name*</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors && errors.last_name && (
                            <span className="text-danger">{errors.last_name}</span>
                        )}
                         {errors && errors.lastName && (
                            <span className="text-danger">{errors.lastName}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>What do you want to be called?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a profile name"
                            onChange={(e) => setProfileName(e.target.value)}
                        />
                        <span className="called_span_for" >This will be displayed as your public name on your profile.</span>
                        </div>
                    <div className="form-group">
                        <label>Email address*</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors && errors.email && (
                            <span className="text-danger">{errors.email}</span>
                        )}
                        </div>
                        <div className="form-group">
                            <label>Country of birth*</label>
                            <Select className="form_control_select"
                                options={countries}
                                value={country}
                                onChange={handleCountryChange}
                            />
                            {errors && errors.country && (
                                <span className="text-danger">{errors.country}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>City of birth*</label>
                            <Select className="form_control_select"
                                options={cities}
                                value={city}
                                onChange={handleCityChange}
                            />
                            {errors && errors.city && (
                                <span className="text-danger">{errors.city}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Country of nationality*</label>
                            <Select className="form_control_select"
                                options={countries1}
                                value={country1}
                                onChange={handleCountryChange1}
                            />
                            {errors && errors.city && (
                                <span className="text-danger">{errors.city}</span>
                            )}
                        </div>
                        <div className="form-group">
                        <label>Postal code/Zip code*</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="7500"
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                        {errors && errors.postalCode && (
                            <span className="text-danger">{errors.postalCode}</span>
                        )}
                        </div>
                        <div className="form-group">
                        <label>Date of birth*</label>
                        <div className="form-group_DOB">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="18"
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="08"
                                onChange={(e) => setMonth(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="1986"
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        </div>
                        <div className="form-group">
                        <label className="gender_item">Gender*</label>
                        <div className="form_checkbox_sr">
                            <input
                                type="radio"
                                className="checkbox"
                                name="gender"
                                value="Male"
                                 onChange={(e) => setGender(e.target.value)}
                            />
                            <label for="Male"> Male</label>
                        </div>
                        <div className="form_checkbox_sr">
                            <input
                                type="radio"
                                className="checkbox"
                                name="gender"
                                value="Female"
                                 onChange={(e) => setGender(e.target.value)}
                            />
                            <label for="Female"> Female</label>
                        </div>
                        <div className="form_checkbox_sr">
                            <input
                                type="radio"
                                className="checkbox"
                                name="gender"
                                value="Prefer_not_to_say"
                                 onChange={(e) => setGender(e.target.value)}
                            />
                            <label for="Prefer_not_to_say">Prefer not to say</label>
                        </div>

                        </div>
                        </div>
                        <div className="singup_buttom_section">
                            <div className="form-group mt-3 Password_form_sr form_items set_password_item">
                            <label>Set Password*</label>
                            <input
                               type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            /> 
                           <button className="show_passw_btn" onClick={function () { toggleShowPassword(); changeImg() }}><img src={imgSrc} alt="meet-character-1" /></button>
                            {errors && errors.password && (
                                <span className="text-danger">{errors.password}</span>
                            )}
                            </div>
                            <div className='form-group form_items Social_Security_item'>
                                <label>Social Security Number</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your social security number"
                                onChange={(e) => setSocialnumber(e.target.value)}
                            />
                                <span>Please enter your social security number: 15 digits. Only authorized numbers. EIA operates under the VDI status provided for in articles L.135-1 to L.135-3 of the Commercial Code. Therefore, EIA members are required to provide their social security number.</span>
                            </div>
                            <div className='form-group form_items Tax_Identification_item'>
                                <label>Tax Identification Number</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your tax id number"
                                onChange={(e) => setTaxnumber(e.target.value)}
                            />
                                <span>"Please enter your tax identification number: 13 consecutive digits, with the first characters being 0, 1, 2, or 3</span>
                            </div>
                            <div className='form-group form_items Referral_Code_item'>
                                <label>Referral Code</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="DaisyJ20"
                                onChange={(e) => setReferralcode(e.target.value)}
                            />
                            </div>
                            <div className="form-group form-group_btn register_btn_Sr mb-0">
                                <button type="button" onClick={submitForm} className="btn btn-primary continue_signup mt-4">
                                REGISTER
                                </button>     
                                <p>By clicking “Register” you agree and accept the <b>Terms of Use</b> and <b>Privacy Policy.</b></p>   
                            </div>
                        </div>

                        </div> 
                        </div> 
                        
                
                        
                  
        </>
      );
}