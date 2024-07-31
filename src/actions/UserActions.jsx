import axios from '../axios';
import {API_URLS} from '../constants/config';

export const Add_Member = async data => {
    try {
      const response = await axios.post (API_URLS.ADD_MEMBERS, data);
      return response.data;
    } catch (error) {
      console.error ('Adding User >>>>:', error);
      throw error;
    }
  };

  export const User_Profile=async () =>{
    try {
      const response =await axios.get(API_URLS.USER_PROFILE);
      return response.data;
    } catch (error) {
      console.error ('Fetching user >>>>:', error);
      throw error;
    }
  }

  export const List_Users=async () =>{
    try {
      const response =await axios.get(API_URLS.List_Users);
      console.log("List User",response.data);
      return response.data;
    } catch (error) {
      console.error ('Fetching user >>>>:', error);
      throw error;
    }
  }

  export const Edit_User_Profile = async data => {
    console.log(data,"hhjgjhgjjhgfjhfjh");
    try {
      console.log(data,"hjhgj");
      const response = await axios.put(API_URLS.EDIT_USER_PROFILE, data);
      return response.data;
    } catch (error) {
      console.error ('Editing User >>>>:', error);
      throw error;
    }
  };