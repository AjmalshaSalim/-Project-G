import {
  HomeIcon,
  UserPlusIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/solid';
import { FaDumbbell } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { BsPatchPlusFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
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
import AddTrainers from './pages/Owner/dashboard/AddTrainers';
import SalaryManagement from './pages/Owner/dashboard/SalaryManagement';
const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        path: '/home',
        element: <Home />,
      },
      {
        icon: <FaClipboardList {...icon} />,
        name: 'Attendance List',
        path: '/AttendanceList',
        element: <AttendanceList />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Enquiries',
        path: '/AddEnquiries',
        element: <AddEnquiries />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Enquiries List',
        path: '/EnquiriesList',
        element: <EnquiriesList />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
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
        icon: <HiUserCircle {...icon} />,
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
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Trainers',
        path: '/AddTrainers',
        element: <AddTrainers />,
      },
      {
        icon: <FaUserTie {...icon} />,
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
        icon: <BiSolidOffer {...icon} />,
        name: 'All Plans',
        path: '/Plans',
        element: <Plans/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Edit Plan',
        path: '/EditPlan',
        element: <EditPlan/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Payments to Confirm',
        path: '/ConfirmPayments',
        element: <ConfirmPayments/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Pending Payments',
        path: '/PendingPayments',
        element: <PendingPayments/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Upcoming Renewals',
        path: '/UpcomingRenewals',
        element: <UpcomingRenewals/>,
      },
      {
        icon: <BiSolidOffer {...icon} />,
        name: 'Payment Detail',
        path: '/PaymentDetail',
        element: <PaymentDetail/>,
      },
      {
        icon: <HiUserCircle {...icon} />,
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
        icon: <FaDumbbell {...icon} />,
        name: 'Create Diet Plans',
        path: '/CreateDietPlans',
        element: <CreateDietPlans />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'All Diet Plans',
        path: '/AllDietPlans',
        element: <AllDietPlans />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Salary Management',
        path: '/SalaryManagement',
        element: <SalaryManagement />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Set QR Code',
        path: '/SetQRCode',
        element: <SetQRCode />,
      },
     
      
    ],
  },
];

export default routes;
