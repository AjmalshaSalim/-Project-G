import {
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { IoBarChartSharp } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdFormatListNumbered } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";
import { MdTableRows } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbAlertSquareFilled } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdNoFood } from "react-icons/md";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { IoQrCode } from "react-icons/io5";

import { FaDumbbell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsPatchPlusFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import {Home} from './pages/Owner/dashboard/Home';
// import {Profile} from './pages/User/UserProfile';
import IrregularMembers from './pages/Owner/dashboard/IrregularMembers'
import {MembersList} from './pages/Owner/dashboard/MembersList'
import {FollowupEnquiries} from './pages/Owner/dashboard/FollowupEnquiries'
import GymEquipments from './pages/Owner/dashboard/GymEquipments';
import SetQRCode from './pages/Owner/dashboard/SetQRCode'
// import {Tables} from './pages/Owner/dashboard/tables';
// import {Notifications} from './pages/Owner/dashboard/notifications';
import {AddMember} from './pages/Owner/dashboard/AddMember'
import {AttendanceList} from './pages/Owner/dashboard/AttendanceList'
import {AddEnquiries} from './pages/Owner/dashboard/AddEnquiries'
import {EditEnquiry} from './pages/Owner/dashboard/EditEnquiry'
import {EnquiriesList} from './pages/Owner/dashboard/EnquiriesList'
import {AllStaffs} from './pages/Owner/dashboard/AllStaffs'
import {AddStaffs} from './pages/Owner/dashboard/AddStaffs'
import {CreateSlots} from './pages/Owner/dashboard/CreateSlots'
import {Plans} from './pages/Owner/dashboard/Plans'
import CreatePlans from './pages/Owner/dashboard/CreatePlans';
import EditPlan from './pages/User/EditPlan';
import ConfirmPayments from './pages/Owner/dashboard/ConfirmPayments';
import PendingPayments from './pages/Owner/dashboard/PendingPayments';
import UpcomingRenewals from './pages/Owner/dashboard/UpcomingRenewals'
import {PaymentDetail} from './pages/Owner/dashboard/PaymentDetail';
import {AllDietPlans} from './pages/Owner/dashboard/AllDietPlans';
import {CreateDietPlans} from './pages/Owner/dashboard/CreateDietPlans'
import TrainersList from './pages/Owner/dashboard/TrainersList';
import AddTrainer from './pages/Owner/dashboard/AddTrainer';
import SalaryManagement from './pages/Owner/dashboard/SalaryManagement';
const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <IoBarChartSharp {...icon} />,
        name: 'dashboard',
        path: '/home',
        element: <Home />,
      },
      {
        icon: <MdAssignment {...icon} />,
        name: 'Attendances',
        path: '/AttendanceList',
        element: <AttendanceList />,
      },
      {
        icon: <FaPersonCirclePlus {...icon} />,
        name: 'Add Enquiries',
        path: '/AddEnquiries',
        element: <AddEnquiries />,
      },
      {
        icon: <MdFormatListNumbered {...icon} />,
        name: 'Enquiries List',
        path: '/EnquiriesList',
        element: <EnquiriesList />,
      },
      {
        icon: <IoFootsteps {...icon} />,
        name: 'Enquiries Followup',
        path: '/FollowupEnquiries',
        element: <FollowupEnquiries />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Edit Enquiry',
        path: '/EditEnquiry',
        element: <EditEnquiry />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Members',
        path: '/AddMember',
        element: <AddMember />,
      },
      {
        icon: <FaUsers {...icon} />,
        name: 'All Members',
        path: '/MembersList',
        element: <MembersList/>,
      },
      // {
      //   icon: <HiUserCircle {...icon} />,
      //   name: 'Member Profile',
      //   path: '/profile',
      //   element: <Profile />,
      // },
      {
        icon: <FaPersonCircleExclamation {...icon} />,
        name: 'Irregular Members',
        path: '/IrregularMembers',
        element: <IrregularMembers />,
      },
      {
        icon: <FaUserTie {...icon} />,
        name: 'All Staffs',
        path: '/AllStaffs',
        element: <AllStaffs />,
      },
      {
        icon: <BsPersonFillAdd {...icon} />,
        name: 'Add Staffs',
        path: '/AddStaffs',
        element: <AddStaffs />,
      },
      {
        icon: <FaClipboardUser {...icon} />,
        name: 'Add Trainer',
        path: '/AddTrainer',
        element: <AddTrainer />,
      },
      {
        icon: <MdOutlineSportsKabaddi {...icon} />,
        name: 'All Trainers',
        path: '/TrainersList',
        element: <TrainersList />,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Create Plans',
        path: '/CreatePlans',
        element: <CreatePlans/>,
      },
      {
        icon: < MdTableRows {...icon} />,
        name: 'All Plans',
        path: '/Plans',
        element: <Plans/>,
      },
      // {
      //   icon: <BsPatchPlusFill {...icon} />,
      //   name: 'Edit Plan',
      //   path: '/EditPlan',
      //   element: <EditPlan/>,
      // },
      {
        icon: <IoIosCheckmarkCircle {...icon} />,
        name: 'Payments to Confirm',
        path: '/ConfirmPayments',
        element: <ConfirmPayments/>,
      },
      {
        icon: <MdOutlinePendingActions {...icon} />,
        name: 'Pending Payments',
        path: '/PendingPayments',
        element: <PendingPayments/>,
      },
      {
        icon: <TbAlertSquareFilled {...icon} />,
        name: 'Upcoming Renewals',
        path: '/UpcomingRenewals',
        element: <UpcomingRenewals/>,
      },
      // {
      //   icon: <BiSolidOffer {...icon} />,
      //   name: 'Payment Detail',
      //   path: '/PaymentDetail',
      //   element: <PaymentDetail/>,
      // },
      {
        icon: <FaCheckToSlot {...icon} />,
        name: 'Slot Booking',
        path: '/CreateSlots',
        element: <CreateSlots />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Equipments',
        path: '/gym-equipments',
        element: <GymEquipments />,
      },
      {
        icon: < MdFormatListBulletedAdd {...icon} />,
        name: 'Create Diet Plans',
        path: '/CreateDietPlans',
        element: <CreateDietPlans />,
      },
      {
        icon: <MdNoFood {...icon} />,
        name: 'All Diet Plans',
        path: '/AllDietPlans',
        element: <AllDietPlans />,
      },
      {
        icon: <TbCoinRupeeFilled {...icon} />,
        name: 'Salary Management',
        path: '/SalaryManagement',
        element: <SalaryManagement />,
      },
      {
        icon: < IoQrCode {...icon} />,
        name: 'Set QR Code',
        path: '/SetQRCode',
        element: <SetQRCode />,
      },
     
      
    ],
  },
];

export default routes;
