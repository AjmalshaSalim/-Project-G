import axios from '../axios';
import {API_URLS} from '../constants/config';

export const Add_Member = async data => {
  console.log ('data from Add_Member Action', data);
  try {
    const response = await axios.post (API_URLS.Add_members, data);
    return response.data;
  } catch (error) {
    console.error ('Error Sending OTP:', error);
    throw error;
  }
};