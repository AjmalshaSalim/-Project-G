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

import {fetchTrainers} from "../../../actions/TrainerActions"
import {List_Gym_Plans} from "../../../actions/GymPlansActions"
import {Add_Member} from "../../../actions/UserActions"
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

  // Function to handle saving changes
  // const handleSaveChanges = () => {
  //  Logic here
  //   setIsEditing(false); 
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData:', userData); //
    // const formData = new FormData();
    // Object.entries(userData).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

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
                  Phone
                </Typography>
                <input type="tel" placeholder="Mobile Number" name="contact_number" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Email
                </Typography>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div className="pr-2">
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
                  Address
                </Typography>
                <input type="text" placeholder="Enter address" name="address" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div className="w-[270px]">
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Membership Type
                </Typography>
                <select name="membership_type" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent w-[254px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}>
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

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Joining Date
                </Typography>
                <input type="date" name="joining_date" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Membership Expiry Date
                </Typography>
                <input type="date" name="membership_expiry_date" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Health Conditions
                </Typography>
                <input type="text" placeholder="Enter health conditions" name="health_conditions" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Fitness Goals
                </Typography>
                <input type="text" placeholder="Enter fitness goals" name="fitness_goals" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Workout Schedule
                </Typography>
                <input type="text" placeholder="Enter workout schedule" name="workout_schedule" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Exercise Restrictions
                </Typography>
                <input type="text" placeholder="Enter exercise restrictions" name="exercise_restrictions" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Emergency Contact Name
                </Typography>
                <input type="text" placeholder="Enter emergency contact name" name="emergency_contact_name" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Emergency Contact Phone Number
                </Typography>
                <input type="tel" placeholder="Enter emergency contact phone number" name="emergency_contact_phone_number" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Emergency Contact Relationship
                </Typography>
                <input type="text" placeholder="Enter emergency contact relationship" name="emergency_contact_relationship" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Membership ID Number
                </Typography>
                <input type="text" placeholder="Enter membership ID number" name="membership_id_number" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Access Information
                </Typography>
                <input type="text" placeholder="Enter access information" name="access_information" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

<div>
      <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
        Assigned Personal Trainer
      </Typography>
      <select
        name="assigned_personal_trainer"
        onChange={handleChange}
        className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent w-[254px] border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}
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

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Trainer Contact Information
                </Typography>
                <input type="text" placeholder="Enter trainer contact information" name="trainer_contact_information" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Assigned Locker Number
                </Typography>
                <input type="text" placeholder="Enter assigned locker number" name="assigned_locker_number" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

              {/* <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Feedback
                </Typography>
                <input type="text" placeholder="Enter feedback" name="feedback" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div> */}

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Weight
                </Typography>
                <input type="text" placeholder="Enter weight" name="weight" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Height
                </Typography>
                <input type="text" placeholder="Enter height" name="height" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>

              <div>
                <Typography variant="small" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium">
                  Profession
                </Typography>
                <input type="text" placeholder="Enter profession" name="profession" onChange={handleChange} className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`} />
              </div>  
              <div className=" pt-3 pl-5">
                <Link to="/">
                  <Button type="submit" onClick={handleSubmit} className={` w-[100%] lg:w-[180px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>create user</Button>
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
