import axios from '../axios';
import {API_URLS} from '../constants/config';

export const List_Gym_Plans = async () =>{
    try {
      const response=await axios.get(API_URLS.LIST_GYM_PLANS)
      return response.data
    } catch (error) {
      console.error ('while fetching gym plans', error);
      throw error;
    }
    }
export const List_Gym_Plan_Details = async (id) =>{
    try {
      const response=await axios.get(`${API_URLS.LIST_GYM_PLAN_DETAILS}/${id}`)
      return response.data
    } catch (error) {
      console.error ('while fetching gym plans', error);
      throw error;
    }
    }
    export const Create_Gym_Plan = async (data) => {
      console.log(data, "plans created");
    
      try {
        const response = await axios.post(API_URLS.CREATE_GYM_PLANS, data);
        console.log("gggg", response);
      } catch (error) {
        console.error('while creating gym plans', error);
        throw error;
      }
    };

    export const Delete_Gym_Plans=async (id)=>{
      try {
        const response =await axios.delete(`${API_URLS.DELETE_GYM_PLANS}${id}`)
        console.log(response.data);
        return response.data
      } catch (error) {
        console.error ('while deleting gym plans', error);
        throw error;
      }

    }

    export const List_Upcoming_Renewals = async () =>{
      try {
        const response=await axios.get(API_URLS.ExpiringMemberships)
        return response.data
      } catch (error) {
        console.error ('while fetching gym ExpiringMemberships', error);
        throw error;
      }
      }

      export const List_Pending_Payments  = async () =>{
        try {
          const response=await axios.get(API_URLS.ExpiredMemberships)
          return response.data
        } catch (error) {
          console.error ('while fetching gym ExpiredMemberships', error);
          throw error;
        }
        }