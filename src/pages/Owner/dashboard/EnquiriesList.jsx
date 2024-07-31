import React, { useEffect , useState } from 'react';
import AOS from 'aos';
import { MdEdit } from "react-icons/md";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {List_Enquiries} from '../../../actions/EnquirieActions'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";

// Dummy data for enquiries
const enquiriesData = [
  {
    name: 'Jane Doe',
    phoneNumber: '9876543210',
    place: 'California',
    email: 'janedoe@example.com',
    planId: 'Basic Plan',
    expectedJoiningDate: '2024-06-01',
    followUpDate: '2024-04-20',
    enquirySource: 'Online',
    remarks: 'Interested in yoga classes',
  },
  // Add more dummy data as needed
];


export function EnquiriesList() {
  useEffect(() => {
    AOS.init();
  }, []);

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
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <>
      <div className="w-full h-[1100px] overflow-scroll">
        <div className={`mt-12 mb-8 flex flex-col gap-12 rounded-xl ${sidenavType === "dark" ? "bg-transparent border-x border-y border-gray-800" : "bg-white"}`} data-aos="fade-up" data-aos-duration="700">
          <Card className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"}`}>
            <CardHeader variant="filled" color="gray" className={`mb-8 p-6 ${sidenavType === 'dark' ? "bg-gray-900 border-x border-y border-gray-800" : "bg-gray-900"}`}>
              <Typography variant="h6" color="white">
                Enquiries List
              </Typography>
              <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-7 top-7 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
            </CardHeader>
            <CardBody className={`w-full bg-red-600 px-0 pt-0 pb-2 ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-40" : "bg-white"}`}>
              <div className='w-full flex justify-between items-center pr-6'>
                <div></div>
                <Link to='/dashboard/AddEnquiries'>
                  <Button size='sm' className={`py-3 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Add Enquiry</Button>
                </Link>
              </div>
              <table className=" mx-10 mt-4 ">
                <thead>
                  <tr>
                    {[
                      'Name',
                      'Phone',
                      'Email',
                      'Plan',
                      'Enquiry Source',
                      'Remarks',
                      'Follow Up Date',
                      '',
                    ].map((header) => (
                      <th
                        key={header}
                        className={`py-3 px-4 text-left ${sidenavType ==='dark' ? "border-b border-gray-700" :"border-b border-blue-50" }`}
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {header}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {enquiriesData.map((enquiry, key) => {
                    const className = `py-4 px-4 ${key === enquiriesData.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`;

                    return (
                      <tr key={enquiry.name}>
                        <td className={className}><Typography className={`text-xs ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"}`}>{enquiry.name}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.phoneNumber}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.email}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.planId}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.enquirySource}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.remarks}</Typography></td>
                        <td className={className}><Typography className="text-xs">{enquiry.followUpDate}</Typography></td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className={`text-xs font-semibold ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"}`}
                          >
                           <MdEdit className='w-5 h-5'/>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default EnquiriesList;
