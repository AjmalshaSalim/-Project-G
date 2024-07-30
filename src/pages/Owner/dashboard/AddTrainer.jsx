// import axios from 'axios';
import axios from '../../../axios';

import {  toast } from 'react-toastify';
import React, { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import UserIcon from "../../../assets/gym -icons/User_Icon.svg"
import UserIconDark from "../../../assets/gym -icons/User_Icon1.svg"
import {
  useMaterialTailwindController
} from "../../../context/index";
import {
  PencilIcon,

} from "@heroicons/react/24/solid";
// import { ProfileInfoCard } from "../../../widgets/cards/profile-info-card";
import { Link } from "react-router-dom";
import {Create_Trainer} from "../../../actions/TrainerActions"
import {fetchTrainers} from "../../../actions/TrainerActions"
export function AddMember() {
  const navigate = useNavigate();
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  //toggle
  // const [isEditing, setIsEditing] = useState(false);
  // console.log(isEditing);

  // const [userData, setUserData] = useState({
  //   profileImage: null,
  //   firstname: " ",
  //   lastname: " ",
  //   mobilenumber: " ",
  //   email: " ",
  //   gender: " ",
  //   age: " ",
  //   height: " ",
  //   weight: " ",
  //   proffession: " ",
  //   address: " "
  // });
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    date_of_birth: "",
    contact_number: "",
    certification_level: "",
    certification_expiry_date: "",
    education_and_training_background: "",
    regular_working_hours: "",
    areas_of_expertise: "",
    specialized_certifications_or_skills: "",
    salary: "",
    emergency_contact_information:"",
    health_conditions: "",
    bonus_or_commission_information: ""
});

  const [plans, setPlans] = useState([]);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    // Fetch membership plans
    // fetchMembershipPlans()
    //   .then(response => setPlans(response.data))
    //   .catch(error => console.error("Error fetching plans:", error));

    // Fetch trainers
    fetchTrainers()
      .then(response => setTrainers(response.data))
      .catch(error => console.error("Error fetching trainers:", error));
      
  }, []);



  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      profileImage: file
    }));
  };

  // Function to handle saving changes
  // const handleSaveChanges = () => {
  //  Logic here
  //   setIsEditing(false); 
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData:', userData); //
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await Create_Trainer(formData)

      console.log(response.data);
      toast("User Created Successfully")
      navigate('/dashboard/MembersList')
    } catch (error) {
      console.error('Error adding member:', error);
    }
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className=" w-full h-[1100px] overflow-hidden">
        <Card className={`mt-10 ml mb-6  w-full  ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
          data-aos="fade-up"
          data-aos-duration="700">
             <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-7 top-7 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
          <CardBody className="p-4" >
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="w-96">



                {/* {userData.profileImage ?
                  <div className="relative w-36 h-36 -mb-5">
                    <Avatar
                      src={URL.createObjectURL(userData.profileImage)}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className={`rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 ${sidenavType === 'dark' ? "border-x border-y border-gray-800" : "border-x border-y border-blue-gray-200"}`}
                    />
                    <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                      <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                      <PencilIcon className="h-4 w-4 text-black" />
                    </label>
                  </div> :
                  <div className="relative w-36 h-36 -mb-5" >
                    {sidenavType === 'dark' ?
                      <Avatar
                        src={UserIconDark}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border-x border-y border-gray-700"
                      /> :
                      <Avatar
                        src={UserIcon}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border border-x border-y border-blue-gray-200"
                      />
                    }

                    <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                      <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                      <PencilIcon className="h-4 w-4 text-black" />
                    </label>

                  </div>
                } */}

              </div>
            </div>
            {/* Profile Information */}
            <div className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
              {/* Editable Profile Information */}
              <div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    First Name
  </Typography>
  <input type="text" placeholder="Enter first name" name="first_name" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Last Name
  </Typography>
  <input type="text" placeholder="Enter last name" name="last_name" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Email
  </Typography>
  <input type="email" placeholder="Email" name="email" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Gender
  </Typography>
  <select name="gender" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent w-[254px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}>
    <option value="male" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Male</option>
    <option value="female" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Female</option>
    <option value="other" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Other</option>
  </select>
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Date of Birth
  </Typography>
  <input type="date" placeholder="dd-mm-yyyy" name="date_of_birth" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Phone
  </Typography>
  <input type="tel" placeholder="Mobile Number" name="contact_number" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Certification Level
  </Typography>
  <input type="text" placeholder="Enter certification level" name="certification_level" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Certification Expiry Date
  </Typography>
  <input type="date" placeholder="dd-mm-yyyy" name="certification_expiry_date" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Education and Training Background
  </Typography>
  <input type="text" placeholder="Enter education and training background" name="education_and_training_background" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Regular Working Hours
  </Typography>
  <input type="text" placeholder="Enter regular working hours" name="regular_working_hours" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Areas of Expertise
  </Typography>
  <input type="text" placeholder="Enter areas of expertise" name="areas_of_expertise" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Specialized Certifications or Skills
  </Typography>
  <input type="text" placeholder="Enter specialized certifications or skills" name="specialized_certifications_or_skills" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Salary
  </Typography>
  <input type="number" placeholder="Enter salary" name="salary" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Emergency Contact Information
  </Typography>
  <input type="text" placeholder="Enter emergency contact information" name="emergency_contact_information" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Health Conditions
  </Typography>
  <input type="text" placeholder="Enter health conditions" name="health_conditions" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

<div>
  <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
    Bonus or Commission Information
  </Typography>
  <input type="text" placeholder="Enter bonus or commission information" name="bonus_or_commission_information" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
</div>

              <div className=" pt-3 pl-5">
                <Link to="/">
                  <Button type="submit" onClick={handleSubmit} className={` w-[100%] lg:w-[180px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>create Trainer</Button>
                </Link>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddMember;
