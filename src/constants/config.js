

const LOGIN_API_PATH = '/api/login/'
const Forgot_password = '/api/send_otp/'
const Ver_otp ='/api/verify_otp/'
const Reset_password = '/api/reset-password/'
const Add_equipments ='/api/add-equipment/'
const List_equipments='/api/list-equipment/'
const Add_members='/api/create-gym-user/'
const Edit_equipments='/api/edit-equipment/id:/'
const fetchProfileData ='/api/user-profile/'
const Fetch_Dash = '/api/dash/count/'
const Owner_Register ='/api/register-gym-owner/'
const Slot_Listing='/api/slots/'
const Book_Slot='/api/book-slot/'
const My_Bookings='/api/my-bookings/'
const Cancel_Bookings='/api/cancel-booking/'
const Delete_Equipments='/api/delete-equipment/'
const Create_Slot='/api/create-slots/'
const Filter_Attendance ='/api/attendance/filter/'
const ADD_Attendance ='/api/mark-attendance/'
const ADD_QR_Attendance ='/api/attendance/qr/'
const View_Attendance ='/api/attendance/'
const Search_user_For_Attendance ='/api/user-details/'
const Type_Attendance ='/api/attendance/filter/'
const User_Profile='/api/user-profile/'
const Edit_User_Profile='/api/user-profile/edit/'
const List_Gym_Plans='/api/gym-plans/'
const List_Gym_Plan_Details='/api/gym-plans/'
const Create_Gym_Plans='/api/gym-plans/create/'
const Delete_Gym_Plans='/api/gym-plans/'
const View_Trainers='/api/trainers/'
const Create_Trainer='/api/add-trainer/'
const List_Users='/api/gym-users/'
const Set_QR = '/api/set-qr-code/'
const View_Staffs = '/api/gym-stafs/'



// Enquires
const List_Upcoming_Enquiries = '/api/enquiries/upcoming-follow-up/'
const List_Enquiries = '/api/enquiries/followup/'
const Enquiry_Update = '/api/enquiries/update/'
const Enquiry_Delete = '/api/enquiries/delete/'
const Enquiry_Create = '/api/enquiries-create/'


const ExpiredMemberships = '/api/expired_memberships/'
const ExpiringMemberships = '/api/expiring_memberships/'
const IrregularMembers = '/api/irregular-members/'

export const API_URLS = {
    LOGIN_API_PATH: `${LOGIN_API_PATH}`,
    FORGOT_PASSWORD : `${Forgot_password}`,
    VERIFY_OTP:`${Ver_otp}`,
    RESET_PASSWORD:`${Reset_password}`,
    ADD_EQUIPMENTS:`${Add_equipments}`,
    LIST_EQUIPMENTS:`${List_equipments}`,
    EDIT_EQUIPMENTS:`${Edit_equipments}`,
    fetchProfileData:`${fetchProfileData}`,
    ADD_MEMBERS:`${Add_members}`,
    Fetch_Dash :`${Fetch_Dash}`,
    OWNER_REGISTER :`${Owner_Register}`,
    SLOT_LISTING:`${Slot_Listing}`,
    BOOK_SLOT:`${Book_Slot}`,
    MY_BOOKINGS:`${My_Bookings}`,
    CANCEL_BOOKINGS:`${Cancel_Bookings}`,
    DELETE_EQUIPMENTS:`${Delete_Equipments}`,
    CREATE_SLOT:`${Create_Slot}`,
    Filter_Attendance:`${Filter_Attendance}`,
    ADD_Attendance:`${ADD_Attendance}`,
    ADD_QR_Attendance:`${ADD_QR_Attendance}`,
    View_Attendance:`${View_Attendance}`,
    Search_user_For_Attendance:`${Search_user_For_Attendance}`,
    TYPE_ATTENDANCE:`${Type_Attendance}`,
    USER_PROFILE:`${User_Profile}`,
    EDIT_USER_PROFILE:`${Edit_User_Profile}`,
    LIST_GYM_PLANS:`${List_Gym_Plans}`,
    LIST_GYM_PLAN_DETAILS:`${List_Gym_Plan_Details}`,
    CREATE_GYM_PLANS:`${Create_Gym_Plans}`,
    DELETE_GYM_PLANS:`${Delete_Gym_Plans}`,
    View_Trainers:`${View_Trainers}`,
    Create_Trainer:`${Create_Trainer}`,
    List_Users:`${List_Users}`,
    View_Staffs:`${View_Staffs}`,
    Set_QR:`${Set_QR}`,


    // Enquires
    List_Enquiries:`${List_Enquiries}`,
    List_Upcoming_Enquiries:`${List_Upcoming_Enquiries}`,
    Enquiry_Update : `${Enquiry_Update}`,
    Enquiry_Delete :`${Enquiry_Delete}`,
    Enquiry_Create : `${Enquiry_Create}`,


    ExpiredMemberships:`${ExpiredMemberships}`,
    ExpiringMemberships:`${ExpiringMemberships}`,
    IrregularMembers : `${IrregularMembers}`,



    
}

