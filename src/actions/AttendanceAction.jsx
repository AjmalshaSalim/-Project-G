import axios from '../axios';
import {API_URLS} from '../constants/config';

export const FIlter_Attendance = async data => {

    try {
      console.log("ffffff",data);
      
      const response = await axios.get (`${API_URLS.Filter_Attendance}?user_type=${data}`);
      return response.data;
    } catch (error) {
      console.error ('Filtering Attendance:', error);
      throw error;
    }
  };

export const List_Attendance = async () => {

    try {
      const response = await axios.get (API_URLS.View_Attendance);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };

  export const ADD_Attendance = async data => {

    try {
      console.log(data,"hggghghgh");
      const response = await axios.post (API_URLS.ADD_Attendance, data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };


  export const findUserById = async (data) => {
    console.log("Search_user_For_Attendance",data);
    try {
      const response = await axios.post (API_URLS.Search_user_For_Attendance, data);
      console.log("Result Search_user_For_Attendance",response.data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };



  export const TYPE_ATTENDANCE = async data => {

    try {
      const response = await axios.post (API_URLS.TYPE_ATTENDANCE, data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };


  export const ADD_QR_Attendance = async data => {

    try {
      console.log(data,"hggghghgh");
      const response = await axios.post (API_URLS.ADD_QR_Attendance, data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };
