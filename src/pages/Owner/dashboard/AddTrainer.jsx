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
  CardHeader,
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
            <CardHeader className={`flex border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800" : "bg-white"} rounded-xl py-4`}>
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "black"} className=' ml-6 w-28'>
            Add Trainers
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
            <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500' />
          </Link>
        </CardHeader>
             
          <CardBody className="p-4 -mt-5" >
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="w-96">



             

              </div>
            </div>
            {/* Profile Information */}
            <div className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
              {/* Editable Profile Information */}
              <div>
  
  <input type="text" placeholder="Enter first name" name="first_name" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter last name" name="last_name" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
 
  <input type="email" placeholder="Email" name="email" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
 
  <select name="gender" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`}>
    <option value="male" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Male</option>
    <option value="female" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Female</option>
    <option value="other" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Other</option>
  </select>
</div>

<div>
 
  <input type="text" placeholder="Date of birth (DD/MM/YYYY)" name="date_of_birth" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="tel" placeholder="Mobile Number" name="contact_number" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter certification level" name="certification_level" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Certification expiry date (DD/MM/YYYY)" name="certification_expiry_date" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter education and training background" name="education_and_training_background" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
 
  <input type="text" placeholder="Enter regular working hours" name="regular_working_hours" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter areas of expertise" name="areas_of_expertise" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter specialized certifications or skills" name="specialized_certifications_or_skills" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="number" placeholder="Enter salary" name="salary" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter emergency contact information" name="emergency_contact_information" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
  
  <input type="text" placeholder="Enter health conditions" name="health_conditions" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div>
 
  <input type="text" placeholder="Enter bonus or commission information" name="bonus_or_commission_information" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
</div>

<div className="pt-3">
  <Link to="/">
    <Button type="submit" onClick={handleSubmit} className={`w-full lg:w-[180px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Create Trainer</Button>
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
