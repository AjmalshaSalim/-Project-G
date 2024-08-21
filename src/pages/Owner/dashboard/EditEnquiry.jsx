import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
  Select,
  Option
} from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { paymentPlansData } from '../dashboard/Plans';

export function EditEnquiry() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [enquiry, setEnquiry] = useState({
    name: 'John Doe',
    phoneNumber: '1234567890',
    place: 'New York',
    email: 'johndoe@example.com',
    planId: '1',
    expectedJoiningDate: '2024-05-01',
    followUpDate: '2024-04-15',
    enquirySource: 'Website',
    remarks: 'Interested in weightlifting'
  });

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enquiry);
    // Handle form submission for edit, e.g., update backend
  };

  return (
    <div className="flex justify-center items-center w-full h-[1100px] overflow-scroll">
      <Card className={`w-full max-w-8xl -mt-28 shadow-xl ${sidenavType === 'dark' ? 'bg-gray-900 bg-opacity-90' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="700">
        <CardHeader color="blue" className={`flex border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800": ""} rounded-xl py-4`}>
          <Typography variant="h6" color="white" className=' ml-6 w-28'>
            Edit Enquiry
          </Typography>
          <Link to="/dashboard/Home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:px-20 pb-10">
            {/* Name Field */}
            <Input
              label="Name"
              type="text"
              name="name"
              value={enquiry.name}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Phone Number Field */}
            <Input
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={enquiry.phoneNumber}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Place Field */}
            <Input
              label="Place"
              type="text"
              name="place"
              value={enquiry.place}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Email Field */}
            <Input
              label="Email"
              type="email"
              name="email"
              value={enquiry.email}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Plan ID Select */}
            <Select
              label="Choose Plan"
              name="planId"
              onChange={handleChange}
              value={enquiry.planId}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            >
              <Option disabled value="">Choose Plan</Option>
              {paymentPlansData.map(plan => (
                <Option key={plan.id} value={plan.id}>{plan.title}</Option>
              ))}
            </Select>

            {/* Expected Joining Date Field */}
            <Input
              label="Expected Joining Date"
              type="date"
              name="expectedJoiningDate"
              value={enquiry.expectedJoiningDate}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Follow Up Date Field */}
            <Input
              label="Follow Up Date"
              type="date"
              name="followUpDate"
              value={enquiry.followUpDate}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Enquiry Source Field */}
            <Input
              label="Enquiry Source"
              type="text"
              name="enquirySource"
              value={enquiry.enquirySource}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Remarks Field */}
            <Textarea
              label="Remarks"
              name="remarks"
              value={enquiry.remarks}
              onChange={handleChange}
              variant="static"
              className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}
            />

            {/* Submit Button */}
            <Button type="submit" variant="filled" className={`mt-4 ${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900" : "bg-blue-500 hover:bg-blue-700"}`}>
              Update Changes
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default EditEnquiry;
