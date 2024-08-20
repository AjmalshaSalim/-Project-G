import axios from '../axios';
import {API_URLS} from '../constants/config';

export const fetchTrainers = async () => {

    try {
      const response = await axios.get (API_URLS.View_Trainers);
      console.log("Trainers",response.data)
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };

  export const fetchStaffss = async () => {

    try {
      const response = await axios.get (API_URLS.View_Staffs);
      console.log("fetchStaffss",response.data)
      return response.data;
    } catch (error) {
      console.error ('Fetching fetchStaffss:', error);
      throw error;
    }
  };
  export const Create_Trainer = async (data )=> {
    console.log(data);
    try {
        const response = await axios.post(`${API_URLS.Create_Trainer}${data}`);
        return response.data;
    } catch (error) {
        console.error('Error booking slot:', error);
        throw error;
    }
};