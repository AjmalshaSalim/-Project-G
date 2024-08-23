import { useLocation, Link } from "react-router-dom";
import UserIconDark from "../../assets/gym -icons/User_Icon1.svg"
import UserIcon from "../../assets/gym -icons/User_Icon.svg"
import { IoArrowBackSharp } from "react-icons/io5";
import Profile from "../../assets/images/user.png"

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  CardBody,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
} from "@material-tailwind/react";
import { ProfileInfoCard } from "../../widgets/cards/profile-info-card";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "../../context/index";
import { useState,useRef,useEffect } from "react";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const { sidenavType } =
    controller;
  const [ProfileToggleActive, setProfileToggleActive] = useState(false);
  const handleProfileToggle = (() => {
    setProfileToggleActive(!ProfileToggleActive)
  })
  const [formData, setFormData] = useState({
    id: null,
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    contact_number: "",
    joining_date: "",
    email: "",
    address: "",
    joining_date: "",
    membership_expiry_date: "",
    is_active: false,
    health_conditions: "",
    fitness_goals: "",
    workout_schedule: "",
    exercise_restrictions: "",
    emergency_contact_name: "",
    emergency_contact_phone_number: "",
    emergency_contact_relationship: "",
    membership_id_number: "",
    access_information: "",
    assigned_personal_trainer: null,
    trainer_contact_information: null,
    assigned_locker_number: "",
    feedback: "",
    documents: "",
    profile_picture: "",
    height: "",
    proffession: "",
    weight: "",
    user: null,
    membership_type: null
  });
  const [menu, setMenu] = useState(0)
  //toggle
  const [isEditing, setIsEditing] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    // Function to close menu when clicked outside
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsEditing(!isEditing);
      }
    }

  document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditing(false); // Once changes are saved, exit edit mode
  };
  return (
    <Navbar
      color={fixedNavbar ? "blue-gray" : "transparent"}
      className={`rounded-lg transition-all ${sidenavType === 'dark' ? "bg-transparent" : "bg-white"} ${fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 "
          : "px-4 py-1"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
              }`}
          >
            <Link to={`/`}>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className="font-normal opacity-50 transition-all hover:text-red-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color={sidenavType === 'dark' ? "white" : "blue-gray"}
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          {ProfileToggleActive ?
            <div className=" w-[1150px] h-[280px] absolute right-6 top-20 z-50">
              <Card className={`mt-10 mb-6 w-full h-[700px]  ${sidenavType === 'dark' ? "bg-gray-900 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
                data-aos="fade-up"
                data-aos-duration="700">
                <CardBody className="p-4">
                  <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
                    <div className="flex items-center gap-6">
                      {formData.profile_picture ?
                        <div className="relative w-32 h-32 -mb-10">
                          <Avatar
                            src={formData.profile_picture}
                            alt="Profile Image"
                            size="xl"
                            variant="rounded"
                            className="rounded-lg shadow-lg shadow-blue-gray-500/40 border hover:w-90"
                          />
                        </div> :
                        <div className="relative w-36 h-36 -mb-16" >
                          {sidenavType == 'dark' ?
                            <Avatar
                              src={UserIconDark}
                              alt="Profile Image"
                              size="xl"
                              variant="rounded"
                              className={`rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border-x border-y ${sidenavType === 'dark' ? "border-gray-700" : "border-blue-gray-200"}`}
                            /> :
                            <Avatar
                              src={UserIcon}
                              alt="Profile Image"
                              size="xl"
                              variant="rounded"
                              className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border"
                            />
                          }

                        </div>
                      }
                      <div>
                        <Typography variant="h5" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-1">
                          {formData.first_name + " " + formData.last_name}
                        </Typography>
                        <Typography
                          variant="small"
                          className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                            }`}
                        >
                          {formData.proffession}
                        </Typography>
                      </div>
                    </div>
                    <div className="w-96 text-red-700">
                      <Tabs value="app">
                        <TabsHeader className={`${sidenavType === 'dark' ? "bg-gray-800" : " bg-blue-gray-100"}`} >
                          <Tab value="app" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(0)}>
                            <HomeIcon className={`-mt-1 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                            About
                          </Tab>
                          <Tab value="message" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(1)}>
                            <ChatBubbleLeftEllipsisIcon className={`-mt-0.5 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                            Details
                          </Tab>
                          <Tab value="settings" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(2)}>
                            <Cog6ToothIcon className={`-mt-1 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                            Payments
                          </Tab>
                        </TabsHeader>
                      </Tabs>
                    </div>
                  </div>
                  {/* Profile Information */}
                  <div className=" grid-cols-1 mb-12 grid px-4 lg:grid-cols-2 xl:grid-cols-3 w-full" ref={menuRef}>
                    {/* Editable Profile Information */}
                    {isEditing ? (
                      // Render editable profile info fields when in edit mode

                      <form
                        // onSubmit={handleSubmit}
                        className="lg:mt-8 mb-2 pr-10 w-80 max-w-screen-lg lg:w-1/2"
                      >
                        <div className=" w-[700px] h-10 -mt-6 mb-6">
                          <div className=" w-10 h-10 rounded-full bg-gray-700" onClick={() => setIsEditing(!isEditing)}>
                            <IoArrowBackSharp className=" w-10 h-10 p-2 text-white" />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium "
                            >
                              First name
                            </Typography>
                            <Input
                              size="lg"
                              type="string"
                              // onChange={handleChange}
                              value={formData.firstname}
                              id="firstname"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Last name
                            </Typography>
                            <Input
                              size="lg"
                              type="string"
                              // onChange={handleChange}
                              value={formData.lastname}
                              id="lastname"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Mobile number
                            </Typography>
                            <Input
                              size="lg"
                              type="number"
                              // onChange={handleChange}
                              value={formData.contact_number}
                              id="mobilenumber"

                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Email
                            </Typography>
                            <Input
                              size="lg"
                              type="email"
                              // onChange={handleChange}
                              value={formData.email}
                              id="email"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Gender
                            </Typography>
                            <Input
                              size="lg"
                              type="string"
                              // onChange={handleChange}
                              value={formData.gender}
                              id="gender"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Age
                            </Typography>
                            <Input
                              size="lg"
                              type="number"
                              // onChange={handleChange}
                              value={formData.age}
                              id="age"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Height
                            </Typography>
                            <Input
                              size="lg"
                              type="number"
                              // onChange={handleChange}
                              value={formData.height}
                              id="height"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div className="mb-1 flex flex-col flex-grow">
                            <Typography
                              variant="small"
                              color={sidenavType === 'dark' ? "white" : "blue-gray"}
                              className=" font-medium"
                            >
                              Weight
                            </Typography>
                            <Input
                              size="lg"
                              type="number"
                              // onChange={handleChange}
                              value={formData.weight}
                              id="weight"
                              placeholder=""
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div className="mb-2 flex flex-col gap-6">
                          <Typography
                            variant="small"
                            color={sidenavType === 'dark' ? "white" : "blue-gray"}
                            className="-mb-6 font-medium"
                          >
                            Address
                          </Typography>
                          <Input
                            size="lg"
                            type="string"
                            // onChange={handleChange}
                            value={formData.address}
                            id="address"
                            placeholder=""
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-[425px]"
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                          <Button onClick={handleSaveChanges} className={` w-[100%] lg:w-[150px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Save Changes</Button>
                        </div>
                        <div></div>
                      </form>


                    ) : (

                      <ProfileInfoCard
                        title="Profile Information"
                        description=""
                        details={
                          menu === 0 && {
                            Name: formData.first_name + " " + formData.last_name,
                            Mobile: formData.contact_number,
                            Email: formData.email,
                            Gender: formData.gender,
                            DOB: formData.date_of_birth,
                            Proffession: formData.proffession,
                            Address: formData.address,
                            Emergency_Contact: formData.emergency_contact_name,
                            Contact_Number: formData.emergency_contact_phone_number,
                            Relationship: formData.emergency_contact_relationship
                          }
                          || menu === 1 && {
                            Membership_ID: formData.membership_id_number,
                            Locker_Number: formData.assigned_locker_number,
                            Joined: formData.joining_date,
                            Height: formData.height,
                            Weight: formData.weight,
                            Health: formData.health_conditions,
                            Goal: formData.fitness_goals,
                            Schedule: formData.workout_schedule,
                            Restrictions: formData.exercise_restrictions,
                            Personal_Trainer: formData.assigned_personal_trainer,
                            Trainer_Contact: formData.trainer_contact_information,

                          }
                          || menu === 2 && {
                            Membership_Expiry: formData.membership_expiry_date,
                          }
                        }
                        action={
                          <Tooltip content="Edit Profile" className=" border">
                            <PencilIcon
                              className="h-4 w-4 cursor-pointer text-blue-gray-500"
                              onClick={() => setIsEditing(!isEditing)} // Enable edit mode when clicked
                            />
                          </Tooltip>
                        }
                      />

                    )}
                    {/* Other sections */}
                    {/* Add other sections like Personal Trainers here */}
                  </div>
                </CardBody>
              </Card>
            </div>
            :
            <div></div>
          }
          <Button
            variant="text"
            color={sidenavType === 'dark' ? "white" : "blue-gray"}
            className="hidden items-center gap-1 px-4 xl:flex normal-case"
            onClick={handleProfileToggle}
          >
            {/* <UserCircleIcon className={`h-5 w-5 ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-500"
              }`} /> */}
              <img src={Profile} alt="" className=" w-7 h-7"/>
          &nbsp;  My Profile
          </Button>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>

          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className={`h-5 w-5 ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-500"}`} />
              </IconButton>
            </MenuHandler>
            <MenuList className={`w-max border-0 ${sidenavType === 'dark' ? "bg-black" : "bg-white"} `}>
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/98327654?v=4"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    <strong>New Payment Request</strong> from Achu
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/123806799?v=4"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    <strong>New Enquiry</strong> From Ajmalsha
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-red-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    Payment Confirmed successfully
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            variant="text"
            color={sidenavType === 'dark' ? "white" : "blue-gray"}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className={`h-5 w-5 ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-500"}`} />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
