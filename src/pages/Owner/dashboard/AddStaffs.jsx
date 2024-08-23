import axios from '../../../axios';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardHeader
} from "@material-tailwind/react";
import {
  useMaterialTailwindController
} from "../../../context/index";

export function AddStaffs() {
  const navigate = useNavigate();
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const [staffData, setStaffData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    contact_number: "",
    alternate_contact_number: "",
    email: "",
    address: "",
    id_proof: "",
    username: "",
    password: "",
    security_question: "",
    security_answer: "",
    staff_role: "",
    department: "",
    employee_id: "",
    hire_date: "",
    employment_status: "",
    employment_type: "",
    salary: "",
    payment_frequency: "",
    bank_account_info: "",
    work_hours: "",
    work_days: "",
    breaks: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    emergency_contact_relationship: "",
    system_access_level: "",
    access_expiry: "",
    certifications: "",
    training_history: "",
    profile_picture: null,
    additional_notes: "",
    documents: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (name === "profile_picture") {
      setStaffData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
    } else if (name === "documents") {
      setStaffData(prevData => ({
        ...prevData,
        [name]: [...prevData.documents, ...files]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('StaffData:', staffData);
    try {
      // Implement your API call to add staff here
      // const response = await addStaff(staffData);
      // console.log(response.data);
      toast.success("Staff Added Successfully");
      navigate('/dashboard/StaffList');
    } catch (error) {
      console.error('Error adding staff:', error);
      toast.error("Error adding staff");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="w-full h-[1100px] overflow-hidden">
        <Card className={`mt-10 mb-6 w-full ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
          data-aos="fade-up"
          data-aos-duration="700">
            <CardHeader className={`flex border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800" : "bg-white"} rounded-xl py-4`}>
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "black"} className=' ml-6 w-28'>
            Add Staffs
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
            <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500' />
          </Link>
        </CardHeader>
          
          <CardBody className="p-4" >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 w-full">
                {/* Personal Information */}
                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter last name"
                  />
                </div>

                <div className="col-span-1">
                  
                  <select
                    name="gender"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="date_of_birth"
                    onChange={handleChange}
                    placeholder="Date of birth (DD/MM/YYYY)"
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="tel"
                    name="contact_number"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter contact number"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="tel"
                    name="alternate_contact_number"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter alternate contact number"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter address"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="id_proof"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter ID proof"
                  />
                </div>

                {/* Authentication Information */}
                <div className="col-span-1">
                 
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter username"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter password"
                  />
                </div>

                {/* Role and Position */}
                <div className="col-span-1">
                 
                  <input
                    type="text"
                    name="staff_role"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter staff role"
                  />
                </div>

                <div className="col-span-1">
                 
                  
                  <input
                    type="text"
                    name="department"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter department"
                  />
                </div>

                {/* Employment Details */}
                <div className="col-span-1">
                 
                  <input
                    type="text"
                    name="employee_id"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter employee ID"
                  />
                </div>

                <div className="col-span-1">
                 
                  <input
                    type="text"
                    placeholder="Hiring date (DD/MM/YYYY)"
                    name="hire_date"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                {/* Salary and Compensation */}
                <div className="col-span-1">
                  
                  <input
                    type="number"
                    name="salary"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter salary"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="col-span-1">
                  
                  <input
                    type="text"
                    name="emergency_contact_name"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter emergency contact name"
                  />
                </div>

                <div className="col-span-1">
                  
                  <input
                    type="tel"
                    name="emergency_contact_phone"
                    onChange={handleChange}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                    placeholder="Enter emergency contact phone"
                  />
                </div>

                {/* Profile Picture */}
                <div className="col-span-1">
                 <label htmlFor="">Upload your profile picture</label>
                  <input
                    type="file"
                    name="profile_picture"
                    onChange={handleFileUpload}
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                {/* Documents */}
                <div className="col-span-1">
                  <label htmlFor="">Upload your Document or ID</label>
                  <input
                    type="file"
                    name="documents"
                    onChange={handleFileUpload}
                    multiple
                    className={`w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      sidenavType === 'dark'
                        ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <Button type="submit" className={`w-full md:w-auto px-6 py-3 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
                    Add Staff
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddStaffs;
