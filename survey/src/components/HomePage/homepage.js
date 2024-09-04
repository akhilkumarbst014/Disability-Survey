// export default PersonalInfoForm;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'; // Import the CSS file
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PersonalInfoForm = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [showDisabilityDetails, setShowDisabilityDetails] = useState(false);

    const [boardTypeOptions, setBoardTypeOptions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);

    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [gender, setGender] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [category, setCategory] = useState("");
    const [dob, setDOB] = useState("");
    const [area, setArea] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [villageOrCity, setVillageCity] = useState("");
    const [taluka, setTaluka] = useState("");
    const [district, setDistrict] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [eduQualification, setEducationQualification] = useState("");
    const [physicalHandicapped, setPhysicalHandicapped] = useState("");
    const [disabilityType, setDisabilityType] = useState("");
    const [boardTypeDisability, setBoardTypeDisability] = useState("");
    const [disabilityPercentage, setDisabilityPercentage] = useState("");
    const [disabilityCertificate, setDisabilityCertificate] = useState("");
    const [helpReceived, setReeivedHelp] = useState("");
    const [careGiver, setCareGiverAvailable] = useState("");
    const [otherCareGiver, setOtherCareGiver] = useState("");
    const [showOtherAwardField, setShowOtherAwardField] = useState(false);



    const handleChange = (event) => {
        const value = event.target.value;
        setCareGiverAvailable(value);

        const options = event.target.options;
        const selectedOptions = [];
        let otherSelected = false;
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedOptions.push(options[i].value);
            if (options[i].value === "Other") {
              otherSelected = true;
            }
          }
        }
        setShowOtherAwardField(otherSelected);
    };

    const today = new Date().toISOString().split('T')[0];
    const validateDOB = () => {
        const newErrors = {};
        if (dob && new Date(dob) > new Date(today)) {
            newErrors.dob = 'Date of birth cannot be in the future';
        }
        setErrors(newErrors);
    };
    useEffect(() => {
        validateDOB();
    }, [dob]);


    //////////////////////////
    const [errors, setErrors] = useState({});
    //const [disabilityDetails, setDisabilityDetails] = useState("");
    const handleInputChange = (setter, pattern, maxLength) => (e) => {
        const value = e.target.value;
        if (value.length > maxLength) {
            toast.error(`Length exceeded ${maxLength} characters.`);
        } else if (!pattern.test(value)) {
            toast.error("Invalid input.");
        } else {
            setter(value);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();



        try {
            const response = await axios.post('http://localhost:5000/api/survey_form', {
                name, fatherName, motherName, gender, ageGroup, maritalStatus, category, dob, area, houseNo, villageOrCity, taluka,
                district, mobileNo, pinCode, eduQualification, physicalHandicapped, disabilityType, boardTypeDisability, disabilityPercentage,
                disabilityCertificate, helpReceived, careGiver, otherCareGiver
            });

            if (response.status === 200) {
                toast.success("Form submitted successfully", {
                    // onClose: () => navigate("/school")
                });
            } else {
                toast.error("Submitting Failed");
            }
        } catch (error) {
            toast.error("Error form submitting");
            console.error("Error submission:", error);
        }

    };

    const handleSub = async (event) => {
        event.preventDefault();

        // ADDDDDDDDDD

        if (currentStep === 1 && !validateStep1()) {
            focusFirstErrorField();
            return; // Prevent going to next step if validation fails
        }


        try {
            const response = await axios.post('http://localhost:5000/api/survey_form', {
                name, fatherName, motherName, gender, ageGroup, maritalStatus, category, dob, area, houseNo, villageOrCity, taluka,
                district, mobileNo, pinCode, eduQualification, physicalHandicapped, disabilityType, boardTypeDisability, disabilityPercentage,
                disabilityCertificate, helpReceived, careGiver, otherCareGiver
            });

            if (response.status === 200) {
                toast.success("Form submitted successfully", {
                    // onClose: () => navigate("/school")
                });
            } else {
                toast.error("Submitting Failed");
            }
        } catch (error) {
            toast.error("Error form submitting");
            console.error("Error submission:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    const handleDisabilityChange = (event) => {
        const value = event.target.value;
        setIsDisabled(value === 'yes');
        setPhysicalHandicapped(value);

    };

    const handleDisabilityTypeChange = (event) => {
        setDisabilityType(event.target.value);

        // Set board type options based on selected disability type
        if (event.target.value === 'Locomotor Disability') {
            setBoardTypeOptions(['Select Locomotor Disability Type :','Acid attack victims', 'Leporosy cured person', 'Polio', 'Cerebral Palsy', 'Dwarfism', 'Muscular destropathy', 'Other Locomotor disability']);
        } else if (event.target.value === 'Visual Disability') {
            setBoardTypeOptions(['Select Visual Disability Type :', 'Low Vision']);
        } else if (event.target.value === 'Hearing Disability') {
            setBoardTypeOptions(['Select Visual Disability Type :','Hearing Disability']);
        } else if (event.target.value === 'Speech & Language Disability') {
            setBoardTypeOptions(['Select Speech & Language Disability Type :','Speech & Language Disability']);
        } else if (event.target.value === 'Mental Retardation/Intellectual Disability') {
            setBoardTypeOptions(['Select Mental Retardation/Intellectual Disability Type :', 'Autism Spectrum Disorder', 'Other Mental Retardation/Intellectual Disability']);
        } else if (event.target.value === 'Mental Illness') {
            setBoardTypeOptions(['Select Mental Illness Disability Type :','Mental Illness']);
        } else if (event.target.value === 'Other Disabilities') {
            setBoardTypeOptions(['Select Other Disabilities Type :','Chronic Neurological Conditions', "Parkinson's diseas", 'Multiple Selerosis', 'Other Chronic Nurological conditions', 'Blood disorder', 'Thalissemia', 'Heamophilia', 'sickle cell disease']);
        } else if (event.target.value === 'Multiple Disabilities') {
            setBoardTypeOptions(['More than one of the above specified disability including different blindness']);
        }else {
            setBoardTypeOptions(['Select Board Type of Disabilities']);
          }

    };

    const handleNextStep = () => {
        ////////////////
        if (currentStep === 1 && !validateStep1()) {
            focusFirstErrorField();
            return; // Prevent going to next step if validation fails
        }

        setCurrentStep(currentStep + 1);
        if (isDisabled) {
            setShowDisabilityDetails(true);
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
        if (currentStep === 2) {
            setShowDisabilityDetails(false);
        }
    };

    const focusFirstErrorField = () => {
        const firstErrorField = document.querySelector('.text-danger');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstErrorField.focus();
        }
    };

    const handleInputFocus = (fieldName) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: null,
        }));
    };


    const validateStep1 = () => {
        let formErrors = {};

        if (!name) formErrors.name = 'Name is required';
        if (!fatherName) formErrors.fatherName = 'Father Name is required';
        if (!motherName) formErrors.motherName = 'Mother Name is required';
        if (!gender) formErrors.gender = 'Gender is required';
        if (!ageGroup) formErrors.ageGroup = 'Age Group is required'
        if (!maritalStatus) formErrors.maritalStatus = 'Marital Status is required';
        if (!category) formErrors.category = 'Category is required';
        if (!dob) formErrors.dob = 'Date of Birth is required';
        if (!area) formErrors.area = 'Area is required';
        if (!houseNo) formErrors.houseNo = 'House number is required';
        if (!villageOrCity) formErrors.villageOrCity = 'This field is required';
        if (!taluka) formErrors.taluka = 'Taluka is required';
        if (!area) formErrors.area = 'Area is required';
        if (!district) formErrors.district = 'District is required';
        if (!mobileNo) formErrors.mobileNo = 'Mobile No. is required';
        if (!pinCode) formErrors.pinCode = 'PIN CODE is required';
        if (!eduQualification) formErrors.eduQualification = 'Education Qualification is required';
        if (!physicalHandicapped) formErrors.physicalHandicapped = 'Physical Handicapped status is required';

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };


    return (


        <div className="container-fluid ">
            <div className='row'>
                <div className='col-md-12' style={{ backgroundColor: '#924944', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.3)' }}>
                    <div className="progress-container mt-5">
                        <div className="progress-item">
                            <div className={`circle ${currentStep >= 1 ? "active" : ""}`} >
                                <MdOutlinePersonAddAlt size={30} style={{ color: '#924944' }} />
                            </div>
                            <div className="label">Personal Information<br /><p style={{ fontSize: '10px' }}>Basic details, education, physical handicapped confirmation</p></div>
                        </div>

                        <div className={`line ${currentStep >= 2 ? "active" : ""}`}></div>

                        <div className="progress-item">
                            <div className={`circle ${currentStep >= 2 ? "active" : ""}`}>
                                <BiSolidUserDetail size={30} style={{ color: '#924944' }} />
                            </div>
                            <div className="label">Disability Details<br /><p style={{ fontSize: '10px' }}>Additional information for the type of disability</p></div>
                        </div>
                    </div>
                </div>

                {/* Rest of the code*/}


                <ToastContainer />
                <div className='col-md-12 mt-3 p-0 m-0'>
                    <form onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <>
                                <div className="card">
                                    <div className="card-header color1 text-black fw-bold fs-3" style={{ fontFamily: 'Georgia serif' }}>
                                        Personal Information
                                    </div>
                                    <div className="card-body" style={{ backgroundColor: '#F2F0EC' }}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">1. Name <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter Your Name"
                                                        required
                                                        value={name}
                                                        onChange={handleInputChange(setName, /^[A-Za-z\s]*$/, 30)}
                                                        //onChange={(e) => setName(e.target.value)}
                                                        onFocus={() => handleInputFocus('name')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.name && <div className="text-danger ">{errors.name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">2. Father Name <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter Father Name"
                                                        required
                                                        value={fatherName}
                                                        onChange={handleInputChange(setFatherName, /^[A-Za-z\s]*$/, 30)}
                                                        //onChange={(e) => setFatherName(e.target.value)}
                                                        onFocus={() => handleInputFocus('fatherName')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.fatherName && <div className="text-danger">{errors.fatherName}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">3. Mother Name <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter Mother Name"
                                                        value={motherName}
                                                        onChange={handleInputChange(setMotherName, /^[A-Za-z\s]*$/, 30)}
                                                        //onChange={(e) => setMotherName(e.target.value)}
                                                        onFocus={() => handleInputFocus('motherName')}
                                                        required
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.motherName && <div className="text-danger">{errors.motherName}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">4. Date of Birth <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="date"
                                                        className="form-control "
                                                        required
                                                        value={dob}
                                                        onChange={(e) => setDOB(e.target.value)}
                                                        onFocus={() => handleInputFocus('dob')}
                                                        max={today}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-3 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">5. Age Group <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={ageGroup}
                                                        onChange={(e) => setAgeGroup(e.target.value)}
                                                        onFocus={() => handleInputFocus('ageGroup')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Age Group</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="0-6 Year">0-6 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="7-14 Year">7-14 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="15-20 Year">15-20 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="21-30 Year">21-30 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="31-40 Year">31-40 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="41-60 Year">41-60 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="61-70 Year">61-70 Year</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="70&above Year">70 & above Year</option>
                                                    </select>
                                                    {errors.ageGroup && <div className="text-danger">{errors.ageGroup}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-4 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">6. Gender <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                        onFocus={() => handleInputFocus('gender')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Gender</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Male">Male</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Female">Female</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Transgender">Transgender</option>
                                                    </select>
                                                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-4 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">7. Marital Status <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={maritalStatus}
                                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                                        onFocus={() => handleInputFocus('maritalStatus')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Marital Status</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Married">Married</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="UnMarried">UnMarried</option>
                                                    </select>
                                                    {errors.maritalStatus && <div className="text-danger">{errors.maritalStatus}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-4 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">8. Category <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                        onFocus={() => handleInputFocus('category')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Category</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="General">General</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="OBC">OBC</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="SC/ST">SC/ST</option>
                                                    </select>
                                                    {errors.category && <div className="text-danger">{errors.category}</div>}
                                                </div>
                                            </div>



                                            <div className="col-md-6 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">9. Area <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={area}
                                                        onChange={(e) => setArea(e.target.value)}
                                                        onFocus={() => handleInputFocus('area')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Area</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Urban">Urban</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Rural">Rural</option>
                                                    </select>
                                                    {errors.area && <div className="text-danger">{errors.area}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">10. House No. <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter House No."
                                                        required
                                                        value={houseNo}
                                                        onChange={handleInputChange(setHouseNo, /^[A-Za-z0-9\s-]*$/, 10)}
                                                        //onChange={(e) => setHouseNo(e.target.value)}
                                                        onFocus={() => handleInputFocus('houseNo')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.houseNo && <div className="text-danger">{errors.houseNo}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">11. Village / City Name <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Village / City Name"
                                                        required
                                                        value={villageOrCity}
                                                        onChange={handleInputChange(setVillageCity, /^[A-Za-z\s]*$/, 30)}
                                                        onFocus={() => handleInputFocus('villageOrCity')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.villageOrCity && <div className="text-danger">{errors.villageOrCity}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">12. Taluka <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter Your Talluka"
                                                        required
                                                        value={taluka}
                                                        onChange={handleInputChange(setTaluka, /^[A-Za-z0-9\s]*$/, 20)}
                                                        onFocus={() => handleInputFocus('taluka')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.taluka && <div className="text-danger">{errors.taluka}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">13. District <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter Your District."
                                                        value={district}
                                                        required
                                                        onChange={handleInputChange(setDistrict, /^[A-Za-z\s]*$/, 20)}
                                                        onFocus={() => handleInputFocus('district')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.district && <div className="text-danger">{errors.district}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">14. Mobile No. <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="tel"
                                                        className="form-control "
                                                        placeholder="Enter Mobile No."
                                                        required
                                                        value={mobileNo}
                                                        onChange={handleInputChange(setMobileNo, /^[0-9]*$/, 10)}
                                                        //onChange={(e) => setMobileNo(e.target.value)}
                                                        onFocus={() => handleInputFocus('mobileNo')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.mobileNo && <div className="text-danger">{errors.mobileNo}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">15. PIN CODE <b style={{ color: 'crimson' }}>*</b></label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="Enter PIN CODE"
                                                        required
                                                        value={pinCode}
                                                        onChange={handleInputChange(setPinCode, /^[0-9\s]*$/, 6)}
                                                        onFocus={() => handleInputFocus('pinCode')}
                                                    />
                                                    {/* AAAAAAAAADDDD */}
                                                    {errors.pinCode && <div className="text-danger">{errors.pinCode}</div>}
                                                </div>
                                            </div>


                                            <div className="col-md-6 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">16. Education Qualification <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        required
                                                        value={eduQualification}
                                                        onChange={(e) => setEducationQualification(e.target.value)}
                                                        onFocus={() => handleInputFocus('eduQualification')}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Qualification</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="10th">10th</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="12th">12th</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Graduate">Graduate</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Post Graduate">Post Graduate</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Diploma">Diploma</option>
                                                    </select>
                                                    {errors.eduQualification && <div className="text-danger border-2">{errors.eduQualification}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-6 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">17. Physical Handicapped <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select className="form-select form-select-md "
                                                        aria-label="Default select example"
                                                        value={physicalHandicapped}

                                                        onChange={handleDisabilityChange}
                                                        onFocus={() => handleInputFocus('physicalHandicapped')}
                                                        required
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Yes / No</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="yes">Yes</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="no">No</option>
                                                    </select>
                                                    {errors.physicalHandicapped && <div className="text-danger">{errors.physicalHandicapped}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        {isDisabled ? (
                                            <div className='text-center'>
                                                <button type="button" className="btn btn-outline-primary  px-4 border-2 mb-5 m-2 fw-bold" onClick={handleNextStep}>
                                                    Next
                                                </button>
                                            </div>
                                        ) : (
                                            <div className='text-center'>
                                                <button type="sub" className="btn btn-outline-success px-4 border-2 mb-5 m-2 fw-bold" onClick={handleSub}>
                                                    Submit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ADDDDDDDDDDDDDD */}
                        {currentStep === 2 && showDisabilityDetails && (
                            <>
                                <div className="card" style={{ boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.3)' }}>
                                    <div className="card-header color1 text-black fw-bold fs-3" style={{ fontFamily: 'Georgia serif' }}>
                                        Disabilities Details
                                    </div>

                                    <div className="card-body" style={{ backgroundColor: '#F2F0EC' }}>
                                        <div className="row">
                                            <div className="col-md-6 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">1. Type of Disability <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        onChange={handleDisabilityTypeChange}
                                                        value={disabilityType}
                                                        required

                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Type of disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Locomotor Disability">Locomotor Disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Visual Disability">Visual Disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Hearing Disability">Hearing Disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Speech & Language Disability">Speech & Language Disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Mental Retardation/Intellectual Disability">Mental Retardation/Intellectual Disability</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Mental Illness">Mental Illness</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Other Disabilities">Other Disabilities</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Multiple Disabilities">Multiple Disabilities</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="col-md-6 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">2. Board Type of Disability  <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select  form-control form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        required
                                                        value={boardTypeDisability}
                                                        onChange={(e) => setBoardTypeDisability(e.target.value)}
                                                        //style={boardTypeDisability.startsWith('Select') ? { color: 'red' } : {}}
                                                    >
                                                        {boardTypeOptions.map((option, index) => (
                                                            <option key={index}
                                                             value={option}
                                                             //style={option.startsWith('Select') ? { color: 'red' } : {}}
                                                            //  style={option === 'Select Locomotor Disability Type :' ? { color: 'red' } : {}}
                                                            //disabled={option.includes('Select')}
                                                            style={option.includes('Select') ? { backgroundColor: '#f8e0ce', fontWeight: 'bold' } : {}}
                                                            >
                                                            {option}</option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-md-12 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">3. Care giver are Available <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        // onChange={(e) => setCareGiverAvailable(e.target.value)}
                                                        onChange={handleChange}
                                                        value={careGiver}
                                                        required
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select care giver are Available </option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Hire care giver">Hire care giver</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Institution/Organization/NGO">Institution/Organization/NGO</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Mother">Mother</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Father">Father</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Spouse">Spouse</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Brother">Brother</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Sister">Sister</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Son">Son</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Daughter">Daughter</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Son-in-law">Son-in-law</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Daughter-in-law">Daughter-in-law</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Grand Son">Grand Son</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Grand Daughter">Grand Daughter</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Other">Other</option>
                                                    </select>
                                                    {showOtherAwardField && (
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="formOtherReason " className="form-label fw-bold">
                                                                Please specify
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="formOtherReason"
                                                                value={otherCareGiver}
                                                                onChange={(e) => setOtherCareGiver(e.target.value)}
                                                                placeholder="Other care giver"
                                                                required
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-12 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">4. Disability Percentage <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        required
                                                        value={disabilityPercentage}
                                                        onChange={(e) => setDisabilityPercentage(e.target.value)}
                                                    >
                                                        {[...Array(100).keys()].map(num => (

                                                            <option key={num + 0} value={num + 0}>{num + 0}%</option>
                                                        ))}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">5. Disability Certificate <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        required
                                                        value={disabilityCertificate}
                                                        onChange={(e) => setDisabilityCertificate(e.target.value)}
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Choose Yes/No</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Yes">Yes</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12 custom-dropdown">
                                                <div className="form-group text-start mb-4">
                                                    <label className="fw-bold mb-2">6. Recieved Aid/Help From Government <b style={{ color: 'crimson' }}>*</b></label>
                                                    <select
                                                        className="form-select form-select-md mb-3"
                                                        aria-label="Default select example"
                                                        value={helpReceived}
                                                        onChange={(e) => setReeivedHelp(e.target.value)}
                                                        required
                                                    >
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px', backgroundColor: '#f8e0ce', fontWeight: 'bold' }} value="">Select Recieved Aid/Help From Government </option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Education">Education</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Vocational Training">Vocational Training</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Corrective Surgery">Corrective Surgery</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Treatment other than Surgery">Treatment other than Surgery</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Employment">Employment</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Disability Pension">Disability Pension</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="In the form of Loan">In the form of Loan</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Other Social Security">Other Social Security</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Other Government Help/Aid">Other Government help/aid</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Help any NGO/Organization">Help any Ngo/Organization</option>
                                                        <option style={{ fontSize: '14px', paddingBottom: '2px' }} value="Did Not Rrecieved any Aid/Help">Did Not Rrecieved</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-center mt-4'>
                                                <button type="button" className="btn btn-outline-primary px-4 border-2 mb-5 m-2 fw-bold" onClick={handlePreviousStep}>
                                                    Previous
                                                </button>
                                                <button type="submit" className="btn btn-outline-success px-4 border-2 mb-5 m-2 fw-bold">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;

