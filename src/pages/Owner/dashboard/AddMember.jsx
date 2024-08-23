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
  CardHeader
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

import {fetchTrainers} from "../../../actions/TrainerActions"
import {List_Gym_Plans} from "../../../actions/GymPlansActions"
import {Add_Member} from "../../../actions/UserActions"
export function AddMember() {
  const navigate = useNavigate();
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    gender: "",
    date_of_birth: "",
    address: "",
    membership_type: "",
    joining_date: "",
    membership_expiry_date: "",
    is_active: true,
    health_conditions: "",
    fitness_goals: "",
    exercise_restrictions: "",
    emergency_contact_name: "",
    emergency_contact_phone_number: "",
    emergency_contact_relationship: "",
    assigned_personal_trainer: "",
    weight: "",
    height: "",
    profession: ""
  });


  const [plans, setPlans] = useState([]);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {

    const FetchingTheTrainer = async () => {
      try {
        const response = await fetchTrainers();
        setTrainers(response);
      } catch (error) {
        console.log(error);
      }
    }
    const FetchingThePlans = async () => {
      try {
        const response = await List_Gym_Plans();
        setPlans(response);
      } catch (error) {
        console.log(error);
      }
    }
    FetchingTheTrainer();
    FetchingThePlans();
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
  
    try {
      const response = Add_Member(userData)

      console.log(response.data);
      // toast("User Created Successfully")
      // navigate('/dashboard/MembersList')
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
            Add Member
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
            <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500' />
          </Link>
        </CardHeader>
             
          <CardBody className="p-4" >
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="w-96">


              </div>
            </div>
            {/* Profile Information */}
            <div className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
              {/* Editable Profile Information */}
              <div className="w-full">
                <input type="text" placeholder="Enter first name" name="first_name" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter last name" name="last_name" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="tel" placeholder="Mobile Number" name="contact_number" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="email" placeholder="Email" name="email" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
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

              <div className="w-full">
                <input type="text"  placeholder="Date of birth (DD/MM/YYYY)" name="date_of_birth" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
                  
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter address" name="address" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <select name="membership_type" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`}>
                    <option value="" disabled selected>
            Select a membership 
        </option>
                {plans.map((plan) => (
          <option
            key={plan.id}
            value={plan.id}
            className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}
          >
            {plan.name}
          </option>
        ))}
                </select>
              </div>

              <div className="w-full">
                <input type="text"  placeholder="Joining date (DD/MM/YYYY)" name="joining_date" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text"  placeholder="Membership expiry date (DD/MM/YYYY)" name="membership_expiry_date" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter health conditions" name="health_conditions" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter fitness goals" name="fitness_goals" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>
              <div className="w-full">
                <input type="text" placeholder="Enter exercise restrictions" name="exercise_restrictions" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter emergency contact name" name="emergency_contact_name" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="tel" placeholder="Enter emergency contact phone number" name="emergency_contact_phone_number" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter emergency contact relationship" name="emergency_contact_relationship" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

            

              <div className="w-full">
                <select
                  name="assigned_personal_trainer"
                  onChange={handleChange}
                  className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`}
                >
                  <option value="" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Select a trainer</option>
                  {trainers?.map((trainer) => (
                    <option key={trainer.id} value={`${trainer.trainer_id} ${trainer.
                      user.last_name}`} className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>
                      {trainer.first_name} {trainer.last_name}
                    </option>
                  ))}
                </select>
              </div>

              

              <div className="w-full">
                <input type="text" placeholder="Enter weight" name="weight" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter height" name="height" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>

              <div className="w-full">
                <input type="text" placeholder="Enter profession" name="profession" onChange={handleChange} className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                     sidenavType === 'dark'
                       ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                       : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                   }`} />
              </div>  
              <div className="w-full pt-3">
                <Link to="/">
                  <Button type="submit" onClick={handleSubmit} className={`w-full ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>create user</Button>
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
