import axios from "axios";

const instance = axios.create({
   baseURL: 'https://achujozef.pythonanywhere.com',
  // baseURL: 'http://127.0.0.1:8000',
  headers:{
    'Authorization': localStorage.getItem('userAccessToken') ? 'Bearer ' + localStorage.getItem('userAccessToken') : null,
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
});

instance.interceptors.response.use(

  (response) => response,
 
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('https://achujozef.pythonanywhere.com/api/token/refresh/', {
          refresh : localStorage.getItem('userRefreshToken'),
        }, 
        );
        const newAccessToken = response.data.access;
        localStorage.setItem('userAccessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

 export default instance;