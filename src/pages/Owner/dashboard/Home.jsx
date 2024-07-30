import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { EllipsisVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { StatisticsCard } from '../../../widgets/cards/statistics-card';
import { StatisticsChart } from '../../../widgets/charts/statistics-chart';
import { statisticsChartsData } from '../../../data/statistics-charts-data';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import { projectsTableData } from '../../../data/projects-table-data';
import { ordersOverviewData } from '../../../data/orders-overview-data';
import { Fetch_Dash } from '../../../actions/DashAction,'
import { LuClipboardCheck } from "react-icons/lu";
import { MdOutlinePendingActions } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { TbUserExclamation } from "react-icons/tb";
import { MdOutlineNoteAlt } from "react-icons/md";
import { BiMessageAltError } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GrTransaction } from "react-icons/gr";
import { findUserById, ADD_Attendance } from "../../../actions/AttendanceAction"
import {
  useMaterialTailwindController
} from "../../../context/index";
import { ToastContainer, toast } from 'react-toastify';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from '@material-tailwind/react';
import {List_Attendance} from "../../../actions/AttendanceAction"
export function Home() {
  const [statisticsCardsData, setStatisticsCardsData] = useState(null);

  useEffect(() => {
    AOS.init();
    const fetchDashCount = async () => {
      try {
        const response = await Fetch_Dash();
        setStatisticsCardsData(response);
        console.log(response)

      } catch (error) {
        console.error('Failed to fetch equipments', error);
      }
    };
    fetchDashCount();
  }, []);

  const [attendance, setAttendance] = useState(null);
  const [graphDatas, setGraphDatas] = useState(null);
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await List_Attendance();
        setAttendance(response);
        console.log("const [attendance, setAttendance] = useState(null);",response)

      } catch (error) {
        console.error('Failed to fetch equipments', error);
      }
    };
    const fetchGraphDatas = async () => {
      try {
        const response = await List_Attendance();
        setAttendance(response);
        console.log("  const [graphDatas, setGraphDatas] = useState(null);",response)

      } catch (error) {
        console.error('Failed to fetch graphDatas', error);
      }
    };
    fetchAttendance();
    fetchGraphDatas()
  }, []);



  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } =
    controller;

  const [showAddAttendanceForm, setShowAddAttendanceForm] = useState(false);

  const handleAttendanceClick = () => {
    setShowAddAttendanceForm(!showAddAttendanceForm)
  };

  const [attendanceFormData, setAttendanceFormData] = useState({
    user_type: '', 
    user_id: null,  
  });


  const handleChange = e => {
    e.preventDefault ();
    setAttendanceFormData ({
      ...attendanceFormData,
      [e.target.id]: e.target.value,
    });
    console.log(attendanceFormData);
  };

  const handleSubmitAttendance = async () => {
    try {
      console.log(attendanceFormData);
      const requestBody = {
        user_id: attendanceFormData.user_id, 
        user_type: attendanceFormData.user_type, 
      };
     const response= await ADD_Attendance(requestBody);
      if(response.message === 'Attendance recorded successfully') {
        toast.success("Attendance recorded successfully")
        setAttendanceFormData({
          user_type: '',
          user_id: null, 
        });
         
      }
    } catch (error) {
      toast.error('User does not exist or is not associated with the gym');
    }
  }


  
  const [userAttendance, setUserAttendance] = useState(null);

  // Function to search for a user by ID and set user attendance state
  const searchUserById = () => {
    const { userType, userId } = attendanceFormData;
    console.log("userType, userId", userType, userId);
    const foundUser = findUserById(userType, userId);
    if (foundUser) {
      setUserAttendance(foundUser);
    } else {
      // Handle case where user is not found
      // For example, display an error message
      console.log(`User with ID ${userId} not found.`);
    }
  };
  //Add Attendance Card Data
  const [AttendanceCardData, setAttendanceCardData] = useState(
    {
      color: "gray",
      icon: IoAdd,
      title: "Add Attendance",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: "",
      },
    }
  )

  //2, Add Enquiry
  const [showAddEnquiryForm, setShowAddEnquiryForm] = useState(false);
  const handleEnquiryClick = () => {
    setShowAddEnquiryForm(!showAddEnquiryForm)
  };
  const [EnquiryFormData, setEnquiryFormData] = useState({
    member_id: null,
    enquiry: ''
  })
  const handleSubmitEnquiry = (() => {
    // alert(attendanceFormData.attendance)
    alert('>>>> success')
  })

  //Add Enquiry Card Data
  const [EnquiryCardData, setEnquiryCardData] = useState(
    {
      color: "gray",
      icon: IoAdd,
      title: "Add New Enquiry",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: "",
      },
    }
  )

  //3, Add New Member
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [AddMemberFormData, setAddMemberFormData] = useState({
    member_id: null,
    enquiry: ''
  })
  //Add Member Card data
  const [AddMemberCardData, SetAddMemberCardData] = useState(
    {
      color: "gray",
      icon: IoAdd,
      title: "Add New Member",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: "",
      },
    }
  )

  //4, My transactions
  const handleTransactionClick = (() => {
    alert('My Transactions not Added')
  })
  // My Transaction Card Data
  const [TransactionCardData, SetTransactionCardData] = useState(
    {
      color: "gray",
      icon: GrTransaction,
      title: "My Transactions",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: "",
      },
    }
  )

  //5,Todays Attendance
  const handleTodaysAttendanceClick = (() => {
    alert('attendance list')
  })
  //Todays Attendance Card data
  const [TodaysAttendanceCardData, SetTodaysAttendanceCardData] = useState(
    {
      color: "gray",
      icon: MdOutlineNoteAlt,
      title: "Today's Attendance",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Present Today",
      },
    }
  )



  //6, Todays Enquiry Followup
  //Todays Enquiry Followup Card data
  const [EnquiryFollowupCardData, SetEnquiryFollowupCardData] = useState(
    {
      color: "gray",
      icon: BiMessageAltError,
      title: "Followup Enquiries",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Remains Today",
      },
    }
  )

  //7, Payments To Confirm
  // Payments To Confirm Card data
  const [PaymentsToConfirmCardData, SetPaymentsToConfirmCardData] = useState(
    {
      color: "gray",
      icon: LuClipboardCheck,
      title: "Payments to Confirm",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Remains To Confirm",
      },
    }
  )

  //8, Pending Payments
  // Pending Payment Card Data
  const [PendingPaymentsCardData, SetPendingPaymentsCardData] = useState(
    {
      color: "gray",
      icon: MdOutlinePendingActions,
      title: "Pending Payments",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Payments Pending",
      },
    }
  )

  //9, Upcoming Renewals
  // Upcoming Renewals Card Data
  const [UpcomingRenewalsCardData, SetUpcomingRenewalsCardData] = useState(
    {
      color: "gray",
      icon: CgSandClock,
      title: "Upcoming Renewals",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Remains Today",
      },
    }
  )

  //10, Irregular Members
  // Irregular Members Card Data
  const [IrregularMembersCardData, SetIrregularMembersCardData] = useState(
    {
      color: "gray",
      icon: TbUserExclamation,
      title: "Irregular Members",
      value: "",
      footer: {
        color: "text-green-500",
        value: "",
        label: " Not coming Regular",
      },
    }
  )


  console.log(statisticsCardsData);
  return (
    <>
      <div className=" w-full h-[1100px] overflow-scroll">
      <ToastContainer />
        <div className="mt-10 bg-transparent">
          <div
            className="mb-10 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mx-2"
            data-aos="fade-up"
            data-aos-duration="700"
          >

            {/* Add Attendance Card */}
            <div onClick={handleAttendanceClick}>
              <StatisticsCard
                onClick={handleAttendanceClick}
                key={AttendanceCardData.title}
                {...AttendanceCardData}
                title={AttendanceCardData.title}
                icon={React.createElement(AttendanceCardData.icon, {
                  className: 'w-8 h-8 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={AttendanceCardData.footer.color}>{AttendanceCardData.footer.value}</strong>
                    &nbsp;{AttendanceCardData.footer.label}
                  </Typography>
                }
              />
            </div>
            {showAddAttendanceForm ?
              // Add Attendance Toggle
              <div className={` ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800 shadow-2xl" : "bg-white border-blue-gray-100 shadow-2xl"} mx-2 border-x border-y rounded-xl w-[96%] md:w-[40%] h-auto md:h-[400px] z-1 absolute left-0 md:left-[30%]`} data-aos="fade-up" data-aos-duration="500">
                <div className='w-full text-center py-4'>
                  <h1 className={` font-semibold${sidenavType === 'dark' ? ' text-white text-lg' : ' text-blue-gray-900 text-lg'}`}>Add Attendance</h1>
                </div>
                <div className='w-full h-10'>
                  <button className={`${sidenavType === 'dark' ? " bg-gray-700 hover:bg-gray-600" : " bg-blue-gray-200 hover:bg-blue-gray-300"} w-8 h-8 rounded-full absolute right-2 top-2`} onClick={handleAttendanceClick}>
                    <IoMdClose className='w-5 h-5 m-auto' />
                  </button>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="attendance" className={`mx-5 mt-2 text-sm mb-1 ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Attendance Of</label>
                  <select id="user_type" className={`mx-5 mb-2 rounded-md py-1 px-3 border-x border-y   ${sidenavType === 'dark' ? " bg-gray-900 border-gray-800 text-white" : "bg-white border-blue-gray-200 text-black"}`} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Members">Members</option>
                    <option value="Trainers">Trainers</option>
                    <option value="Other Staffs">Other Staffs</option>
                  </select>
                  <div className="mx-5 mb-2 mt-2">
                    <div className=' mt-3 flex'>
                      <div className=' w-4/5'>
                        <label htmlFor="attendance" className={` w-full mt-2 text-sm mb-1 pr-2 ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Member ID</label>
                        <input id="user_id" value={attendanceFormData.user_id} type="search" placeholder="Search" onChange={handleChange} className={`border-x border-y w-full  px-3 py-1 rounded-md focus:outline-none focus:border-gray-500 ${sidenavType === 'dark' ? "text-white  bg-gray-900 border-gray-300" : "text-black border-blue-gray-200"}`} />
                      </div>
                      {/* <div className=' w-1/5'>
                        <div className='h-1/2'></div>
                        <button className={` pb-2 -mt-1 px-3 md:px-4 ml-3 rounded pt-1 ${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900 text-white" : "bg-black hover:bg-gray-900 text-white"}`} onClick={searchUserById}>
                          Search
                        </button>
                      </div> */}
                    </div>

                    {/* <div className={`w-full h-22 border-x border-y  mt-3 rounded-lg -mb-5 ${sidenavType === 'dark' ? "border-gray-800 text-white" : " border-blue-gray-200 text-black"}`} >
                      <h1 className='pl-2 pt-1'>Full Name : </h1>
                      <h1 className='pl-2 pt-1'>Member ID : </h1>
                      <h1 className='pl-2 pt-1 pb-1'>Phone : </h1>
                    </div> */}
                  </div>
                </div>

                <div className='mx-5'>
                  <button type='button' className={`px-3 py-2 mb-5 w-full mt-10 rounded-lg ${sidenavType === 'dark' ? " bg-red-700 hover:bg-red-900 text-white" : " bg-black hover:bg-gray-900 text-white"}`} onClick={handleSubmitAttendance}>Submit Attendance</button>
                </div>
              </div>
              :
              ''
            }



            {/* Add Enquiry Card */}
            <Link to='/dashboard/AddEnquiries'>
              <StatisticsCard
                key={EnquiryCardData.title}
                {...EnquiryCardData}
                title={EnquiryCardData.title}
                icon={React.createElement(EnquiryCardData.icon, {
                  className: 'w-8 h-8 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={EnquiryCardData.footer.color}>{EnquiryCardData.footer.value}</strong>
                    &nbsp;{EnquiryCardData.footer.label}
                  </Typography>
                }
              />
           </Link>

            {/* {showAddEnquiryForm ?
              <div className={` ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800 shadow-2xl" : "bg-white border-blue-gray-100 shadow-2xl"} border-x border-y rounded-xl md:w-[40%] h-[auto] z-1 absolute md:left-[30%] left-[12%] top-6`} data-aos="fade-up" data-aos-duration="500">
                <div className='w-full h-10'>
                  <button className={`${sidenavType === 'dark' ? " bg-gray-700 hover:bg-gray-600" : " bg-blue-gray-200 hover:bg-blue-gray-300"} w-8 h-8 rounded-full absolute right-2 top-2`} onClick={handleEnquiryClick}>
                    <IoMdClose className='w-5 h-5 m-auto' />
                  </button>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Name</label>
                  <input type="text" id="name" placeholder="Name" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, name: e.target.value })} />
                  <label htmlFor="phone" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Phone Number</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, phone: e.target.value })} />
                  <label htmlFor="place" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Place</label>
                  <input type="text" id="place" placeholder="Place" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, place: e.target.value })} />
                  <label htmlFor="email" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Email</label>
                  <input type="email" id="email" placeholder="Email" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, email: e.target.value })} />
                  <label htmlFor="plan" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Choose Plan</label>
                  <input type="text" id="plan" placeholder="Choose Plan" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, plan: e.target.value })} />
                  <label htmlFor="joinDate" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Expected Joining Date</label>
                  <input type="date" id="joinDate" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, joinDate: e.target.value })} />
                  <label htmlFor="followUpDate" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Follow Up Date</label>
                  <input type="date" id="followUpDate" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, followUpDate: e.target.value })} />
                  <label htmlFor="source" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Enquiry Source</label>
                  <input type="text" id="source" placeholder="Enquiry Source" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, source: e.target.value })} />
                  <label htmlFor="remarks" className={`mx-5 mt-2 text-sm font-light mb-1 ${sidenavType === 'dark' ? "text-gray-500" : "text-black"}`}>Remarks</label>
                  <input type="text" id="remarks" placeholder="Remarks" className="mx-5 mb-2 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500 border border-gray-300" onChange={(e) => setEnquiryFormData({ ...EnquiryFormData, remarks: e.target.value })} />
                </div>
                <div className='mx-5 mb-4 -mt-4'>
                  <button className='px-3 py-2 w-full mt-10 rounded-lg bg-red-700 hover:bg-red-900 text-white' onClick={handleSubmitAttendance}>Submit Attendance</button>
                </div>
              </div>
              :
              ''
            } */}

            {/* Add New Member */}
            <div className=''>
              <Link to="/dashboard/AddMember" className='w-full'>
                <StatisticsCard
                  key={AddMemberCardData.title}
                  {...AddMemberCardData}
                  title={AddMemberCardData.title}
                  icon={React.createElement(AddMemberCardData.icon, {
                    className: 'w-8 h-8 text-white hover:scale-125 duration-1000',
                  })}
                  footer={
                    <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                      }`}>
                      <strong className={AddMemberCardData.footer.color}>{AddMemberCardData.footer.value}</strong>
                      &nbsp;{AddMemberCardData.footer.label}
                    </Typography>
                  }
                />
              </Link>
            </div>

            {/* My Transactions */}
            <div className='' onClick={handleTransactionClick}>
              <StatisticsCard
                key={TransactionCardData.title}
                {...TransactionCardData}
                title={TransactionCardData.title}
                icon={React.createElement(TransactionCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={TransactionCardData.footer.color}>{TransactionCardData.footer.value}</strong>
                    &nbsp;{TransactionCardData.footer.label}
                  </Typography>
                }
              />
            </div>


            {/* Todays Attendance  */}
            <div className=''>
            <Link to="/dashboard/AttendanceList" className='w-full'>
              <StatisticsCard
                key={TodaysAttendanceCardData.title}
                // {...TodaysAttendanceCardData}
                value={statisticsCardsData ? statisticsCardsData.attendance_count : "00"}
                title={TodaysAttendanceCardData.title}
                icon={React.createElement(TodaysAttendanceCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={TodaysAttendanceCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.attendance_count : '00'}</strong>
                    &nbsp;{TodaysAttendanceCardData.footer.label}
                  </Typography>
                }
              />
              </Link>
            </div>

            {/* Todays Enquiry Followup  */}
            <div className=''>
            <Link to="/dashboard/FollowupEnquiries" className='w-full'>
              <StatisticsCard
                key={EnquiryFollowupCardData.title}
                // {...TodaysAttendanceCardData}
                value={statisticsCardsData ? statisticsCardsData.enquiry_count : "00"}
                title={EnquiryFollowupCardData.title}
                icon={React.createElement(EnquiryFollowupCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={EnquiryFollowupCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.enquiry_count : '00'}</strong>
                    &nbsp;{EnquiryFollowupCardData.footer.label}
                  </Typography>
                }
              />
              </Link>
            </div>

            {/* Payments to Confirm  */}
            <div className='' >
            <Link to="/dashboard/ConfirmPayments" className='w-full'>
              <StatisticsCard
                key={PaymentsToConfirmCardData.title}
               
                value={statisticsCardsData ? statisticsCardsData.enquiry_count : "00"}
                title={PaymentsToConfirmCardData.title}
                icon={React.createElement(PaymentsToConfirmCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={PaymentsToConfirmCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.enquiry_count : '00'}</strong>
                    &nbsp;{PaymentsToConfirmCardData.footer.label}
                  </Typography>
                }
              />
              </Link>
            </div>

            {/* Pending Payments  */}
            <div className='' onClick={handleTodaysAttendanceClick}>
              <StatisticsCard
                key={PendingPaymentsCardData.title}
                // {...TodaysAttendanceCardData}
                value={statisticsCardsData ? statisticsCardsData.expired_membership_count : "00"}
                title={PendingPaymentsCardData.title}
                icon={React.createElement(PendingPaymentsCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={PendingPaymentsCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.expired_membership_count : '00'}</strong>
                    &nbsp;{PendingPaymentsCardData.footer.label}
                  </Typography>
                }
              />
            </div>

            {/* Upcoming Renewals  */}
            <div className='' >
              <Link to='/dashboard/UpcomingRenewals' className='w-full'>
              <StatisticsCard
                key={UpcomingRenewalsCardData.title}
                // {...TodaysAttendanceCardData}
                value={statisticsCardsData ? statisticsCardsData.expiring_users_count : "00"}
                title={UpcomingRenewalsCardData.title}
                icon={React.createElement(UpcomingRenewalsCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={UpcomingRenewalsCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.expiring_users_count : '00'}</strong>
                    &nbsp;{UpcomingRenewalsCardData.footer.label}
                  </Typography>
                }
              />
              </Link>
            </div>

            {/* Irregular Members  */}
            <div className='' >
            <Link to='/dashboard/IrregularMembers' className='w-full'>
              <StatisticsCard
                key={IrregularMembersCardData.title}
                // {...TodaysAttendanceCardData}
                value={statisticsCardsData ? statisticsCardsData.absentees_count : "00"}
                title={IrregularMembersCardData.title}
                icon={React.createElement(IrregularMembersCardData.icon, {
                  className: 'w-6 h-6 text-white hover:scale-125 duration-1000',
                })}
                footer={
                  <Typography className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600 "
                    }`}>
                    <strong className={IrregularMembersCardData.footer.color}>{statisticsCardsData ? statisticsCardsData.absentees_count : '00'}</strong>
                    &nbsp;{IrregularMembersCardData.footer.label}
                  </Typography>
                }
              />
              </Link>
            </div>

          </div>
          <div
            className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {statisticsChartsData.map(props => (
              <StatisticsChart
                key={props.title}
                {...props}
                footer={
                  <Typography
                    variant="small"
                    className={`flex items-center font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                      }`}
                  >
                    <ClockIcon
                      strokeWidth={2}
                      className="h-4 w-4 text-red-gray-400"
                    />
                    &nbsp;{props.footer}
                  </Typography>
                }
              />
            ))}
          </div>
          <div
            className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3"
          >
            <Card className={`overflow-hidden xl:col-span-2 shadow-sm
        ${sidenavType === "dark" ? "bg-gray-800 bg-opacity-50 border-x border-y border-gray-800" : " bg-opacity-75 border border-blue-gray-100 bg-white"
              }`}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-1">
                    Today's Attendance
                  </Typography>
                  <Typography
                    variant="small"
                    className={`flex items-center gap-1 font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                      }`}
                  >
                    <CheckCircleIcon
                      strokeWidth={3}
                      className="h-4 w-4 text-blue-gray-200"
                    />
                    <strong>6 Members777</strong> Present Today
                  </Typography>
                </div>
                {/* <Menu placement="left-start">
                  <MenuHandler>
                    <IconButton size="sm" variant="text" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
                      <EllipsisVerticalIcon
                        strokeWidth={3}
                        fill="currenColor"
                        className="h-6 w-6"
                      />
                    </IconButton>
                  </MenuHandler>
                  <MenuList className={` 
              ${sidenavType === "dark" ? "bg-black text-white" : "bg-white"
                    }`}>
                    <MenuItem>Add Attendance</MenuItem>
                    <MenuItem>Weekly Attendance</MenuItem>
                    <MenuItem>Monthly Attendance</MenuItem>
                  </MenuList>
                </Menu> */}
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {['Members', 'Time', 'Status', 'Progress'].map(el => (
                        <th
                          key={el}
                          className={` py-3 px-6 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-gray-300"}`}
                        >
                          <Typography
                            variant="small"
                            className={`text-[11px] font-medium uppercase ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                              }`}
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {sidenavType === 'dark' ?
                    <tbody>
                      {projectsTableData.map(
                        ({ img, name, members, budget, completion }, key) => {
                          const className = `py-3 px-5 ${key === projectsTableData.length - 1 ? '' : 'border-b border-gray-900'}`;

                          return (
                            <tr key={name}>
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  <Avatar src={img} alt={name} size="sm" />
                                  <Typography
                                    variant="small"
                                    color={sidenavType === 'dark' ? "white" : "gray"}
                                    className="font-bold"
                                  >
                                    {name}
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                {members.map(({ img, name }, key) => (
                                  <Tooltip key={name} content={name}>
                                    <Avatar
                                      src={img}
                                      alt={name}
                                      size="xs"
                                      variant="circular"
                                      className={`cursor-pointer border-2 border-white ${key === 0 ? '' : '-ml-2.5'}`}
                                    />
                                  </Tooltip>
                                ))}
                              </td>
                              <td className={className}>
                                <Typography
                                  variant="small"
                                  className={`text-xs font-medium ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                                    }`}
                                >
                                  {budget}
                                </Typography>
                              </td>
                              <td className={className}>
                                <div className="w-10/12">
                                  <Typography
                                    variant="small"
                                    className={`mb-1 block text-xs font-medium ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                                      }`}
                                  >
                                    {completion}%
                                  </Typography>
                                  <Progress
                                    value={completion}
                                    variant="gradient"
                                    color={completion === 100 ? 'green' : 'blue'}
                                    className="h-1"
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                    :
                    <tbody>
                      {projectsTableData.map(
                        ({ img, name, members, budget, completion }, key) => {
                          const className = `py-3 px-5 ${key === projectsTableData.length - 1 ? '' : 'border-b border-gray-300'}`;

                          return (
                            <tr key={name}>
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  <Avatar src={img} alt={name} size="sm" />
                                  <Typography
                                    variant="small"
                                    color={sidenavType === 'dark' ? "white" : "gray"}
                                    className="font-bold"
                                  >
                                    {name}
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                {members.map(({ img, name }, key) => (
                                  <Tooltip key={name} content={name}>
                                    <Avatar
                                      src={img}
                                      alt={name}
                                      size="xs"
                                      variant="circular"
                                      className={`cursor-pointer border-2 border-white ${key === 0 ? '' : '-ml-2.5'}`}
                                    />
                                  </Tooltip>
                                ))}
                              </td>
                              <td className={className}>
                                <Typography
                                  variant="small"
                                  className={`text-xs font-medium ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                                    }`}
                                >
                                  {budget}
                                </Typography>
                              </td>
                              <td className={className}>
                                <div className="w-10/12">
                                  <Typography
                                    variant="small"
                                    className={`mb-1 block text-xs font-medium ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                                      }`}
                                  >
                                    {completion}%
                                  </Typography>
                                  <Progress
                                    value={completion}
                                    variant="gradient"
                                    color={completion === 100 ? 'green' : 'blue'}
                                    className="h-1"
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>}
                </table>
              </CardBody>
            </Card>
            <Card className={`shadow-sm
        ${sidenavType === "dark" ? "bg-gray-800 bg-opacity-50 border-x border-y border-gray-800" : " bg-opacity-75 border border-blue-gray-100 bg-white"
              }`}>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-6"
              >
                <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-2">
                  Todo List
                </Typography>
                <Typography
                  variant="small"
                  className={`flex items-center gap-1 font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                    }`}
                >
                  <ArrowUpIcon
                    strokeWidth={3}
                    className="h-3.5 w-3.5 text-green-500"
                  />
                  <strong>24%</strong> this month
                </Typography>
              </CardHeader>
              <CardBody className="pt-0">
                {ordersOverviewData.map(
                  ({ icon, color, title, description }, key) => (
                    <div key={title} className="flex items-start gap-4 py-3">
                      <div
                        className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1 ? 'after:h-0' : 'after:h-4/6'}`}
                      >
                        {React.createElement(icon, {
                          className: `!w-5 !h-5 ${color}`,
                        })}
                      </div>
                      <div>
                        <Typography
                          variant="small"
                          color={sidenavType === 'dark' ? "white" : "blue-gray"}
                          className="block font-medium"
                        >
                          {title}
                        </Typography>
                        <Typography
                          as="span"
                          variant="small"
                          className={`text-xs font-medium ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                            }`}
                        >
                          {description}
                        </Typography>
                      </div>
                    </div>
                  )
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

