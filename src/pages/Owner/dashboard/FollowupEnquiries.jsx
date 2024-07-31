import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from '@material-tailwind/react';
import { IoMdClose } from "react-icons/io";
import {
  useMaterialTailwindController
} from "../../../context/index";
import {List_Enquiries} from '../../../actions/EnquirieActions'
import  { useState } from "react";
export function FollowupEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    async function Enquiries() {
      try {
        const response = await List_Enquiries();
        setEnquiries(response);
        console.log('Fetched enquiries:', response);
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    }
    Enquiries();
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType} = controller;
  
  return (
    <>
    <div className=" w-full h-[1100px] overflow-scroll">
    <div className={`mt-12 mb-8 flex flex-col gap-12 rounded-xl ${
      sidenavType === "dark" ? "bg-transparent border-x border-y border-gray-800" : "bg-white"
    }`} data-aos="fade-up" data-aos-duration="700">
    <Card className={`${sidenavType === 'dark'? "bg-gray-900 bg-opacity-90" : "bg-white"}`}>
        <CardHeader variant="filled" color="gray" className={`mb-8 p-6 ${sidenavType === 'dark'? "bg-gray-900 border-x border-y border-gray-800" : "bg-gray-900"}`}>
          <Typography variant="h6" color="white">
            Follow-up Enquiries
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-7 top-7 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
        </CardHeader>
        <CardBody className={`overflow-x-scroll px-0 pt-0 pb-2 ${sidenavType === 'dark'? "bg-gray-900 bg-opacity-40" : "bg-white"}`}>
        <div className='w-full flex justify-between items-center pr-6'>
  <div></div>
  <Link to='/dashboard/AddEnquiry'>
  <Button size='sm' className={` py-3 ${sidenavType === 'dark'? "bg-red-700" : "bg-black"}`}>Add Enquiry</Button>
  </Link>
</div>    
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  'Name',
                  'Place & Plan',
                  'Mobile No.',
                  'Enquiry Date',
                  '',
                ].map (el => (
                  <th
                    key={el}
                    className={`py-3 px-5 text-left ${sidenavType ==='dark'? "border-b border-gray-900" :"border-b border-blue-50" }`}
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enquiries.map (
                ({name, email, place, plan, phone_number, follow_up_date}, key) => {
                  const className = `py-3 px-5 ${key === enquiries.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          
                          <div>
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark'? "white" : "blue-gray"}
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className={`text-xs font-semibold ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
                          {place}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {plan}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className={`text-xs font-semibold ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
                          {phone_number}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className={`text-xs font-semibold ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
                          {follow_up_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className={`text-xs font-semibold ${
                            sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                          }`}
                        >
                          View
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
    </div>
    </>
  )
}

export default FollowupEnquiries;
