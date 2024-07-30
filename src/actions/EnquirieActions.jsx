import axios from '../axios';
import {API_URLS} from '../constants/config';

export const List_Enquiries = async () => {

    try {
      const response = await axios.get (API_URLS.List_Enquiries);
      console.log("List_Enquiries",response.data);
      return response.data;
    } catch (error) {
      console.error ('List_Enquiries', error);
      throw error;
    }
  };


  export const List_Upcoming_Enquiries = async () => {
    try {
      const response = await axios.get (API_URLS.List_Upcoming_Enquiries);
      console.log("List_Upcoming_Enquiries",response.data);
      return response.data;
    } catch (error) {
      console.error ('List_Upcoming_Enquiries', error);
      throw error;
    }
  };

  export const UpdateEnquiry = async (pk, updatedData) => {
    try {
      const response = await axios.put(`${API_URLS.Enquiry_Update}/${pk}/`, updatedData);
      console.log("UpdateEnquiry response:", response.data);
      return response.data;
    } catch (error) {
      console.error('UpdateEnquiry error:', error);
      throw error;
    }
  };

  export const DeleteEnquiry = async (pk) => {
    try {
      const response = await axios.delete(`${API_URLS.Enquiry_Delete}/${pk}/`);
      console.log("DeleteEnquiry response:", response.data);
      return response.data;
    } catch (error) {
      console.error('DeleteEnquiry error:', error);
      throw error;
    }
  };

  export const CreateEnquiry = async (enquiryData) => {
    try {
      const response = await axios.post(API_URLS.Enquiry_Create, enquiryData);
      console.log("CreateEnquiry response:", response.data);
      return response.data;
    } catch (error) {
      console.error('CreateEnquiry error:', error);
      throw error;
    }
  };