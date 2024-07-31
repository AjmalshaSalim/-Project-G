import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
  Select,
  Option,
} from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { List_Gym_Plans } from "../../../actions/GymPlansActions";
import {CreateEnquiry} from "../../../actions/EnquirieActions"
export function AddEnquiries() {
  const [gymPlans, setGymPlans] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    async function fetchGymPlans() {
      try {
        const plans = await List_Gym_Plans();
        setGymPlans(plans);
        console.log('Fetched gym plans:', plans);
      } catch (error) {
        console.error('Error fetching gym plans:', error);
      }
    }
    fetchGymPlans();
  }, []);

  const [enquiry, setEnquiry] = useState({
    name: '',
    phoneNumber: '',
    place: '',
    email: '',
    planId: '',
    expectedJoiningDate: '',
    followUpDate: '',
    enquirySource: '',
    remarks: ''
  });

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const handleSelectChange = (e) => {
    setEnquiry({ ...enquiry, planId: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(enquiry).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await CreateEnquiry(formData)
      console.log(response.data);
      toast("Enquiry Added Successfully");
      navigate('/dashboard/EnquiriesList');
    } catch (error) {
      console.error('Error adding enquiry:', error);
    }
  };

  return (
    <div className="flex justify-center items-center py-5 w-full h-[1100px] overflow-scroll">
      <Card className={`w-full max-w-8xl mt-2 shadow-xl ${sidenavType === 'dark' ? 'bg-gray-900 bg-opacity-90' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="700">
        <CardHeader className={`flex border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800" : "bg-white"} rounded-xl py-4`}>
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "black"} className=' ml-6 w-28'>
            Add Enquiry
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
            <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500' />
          </Link>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:px-20 pb-10">
            <label htmlFor="name" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Name</label>
            <Input type="text" id="name" name="name" placeholder="Name" className=' placeholder-current' onChange={handleChange} />

            <label htmlFor="phoneNumber" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Phone Number</label>
            <Input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />

            <label htmlFor="place" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Place</label>
            <Input type="text" id="place" name="place" placeholder="Place" onChange={handleChange} />

            <label htmlFor="email" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Email</label>
            <Input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />
            <label htmlFor="planId" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Choose Plan</label>
            <Select
              id="planId"
              name="planId"
              onChange={handleSelectChange}
              value={enquiry.planId}
              placeholder="Select"
            >
              <Option className={`${sidenavType === 'dark' ? "bg-gray-800" : "bg-black"}`} disabled value="">
                Select
              </Option>
              {gymPlans.map(plan => (
                <Option key={plan.id} value={plan.id}>
                  {plan.name}
                </Option>
              ))}
            </Select>

            <label htmlFor="expectedJoiningDate" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Expected Joining Date</label>
            <Input type="date" id="expectedJoiningDate" name="expectedJoiningDate" placeholder="Expected Joining Date" onChange={handleChange} />

            <label htmlFor="followUpDate" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Follow Up Date</label>
            <Input type="date" id="followUpDate" name="followUpDate" placeholder="Follow Up Date" onChange={handleChange} />

            <label htmlFor="enquirySource" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Enquiry Source</label>
            <Input type="text" id="enquirySource" name="enquirySource" placeholder="Enquiry Source" onChange={handleChange} />

            <label htmlFor="remarks" className={`${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Remarks</label>
            <Textarea id="remarks" name="remarks" placeholder="Remarks" onChange={handleChange} />

            <Button type="submit" variant="filled" className={`mt-4 ${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
              Submit Enquiry
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddEnquiries;
