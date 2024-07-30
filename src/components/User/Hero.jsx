import { QrScanner } from "react-qrcode-scanner";
import { IoIosCloseCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";
import {User_Profile} from "../../actions/UserActions"
import {ADD_QR_Attendance} from "../../actions/AttendanceAction"

const Hero = () => {
  const [qrData, setQrData] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [profileDetails, setProfileDetails] = useState({});
  const [percentage, setPercentage] = useState(0);
  
  const handleScan = async (data) => {
    if (data) {
      setQrData(data);
  
      try {
        const response = await ADD_QR_Attendance(data);
        if (response.status === 201) {
          console.log('Attendance recorded successfully', response);
          localStorage.setItem('qrData', data);
          window.location.reload();
        } else {
          console.error('Failed to record attendance', response);
          alert('Failed to record attendance. Please try again.');
        }
      } catch (error) {
        console.error('Error occurred while recording attendance', error);
        alert('An error occurred while recording attendance. Please try again.');
      }
    } else {
      console.warn('No data received from QR scan');
      alert('No data received from QR scan. Please try again.');
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false); 
    setQrData('');
  };

  useEffect(() => {
    if (qrData) {
      closeCamera();
    }
  }, [qrData]);

  useEffect(() => {
    const handleUnload = () => {
      closeCamera();
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await User_Profile();
        console.log("Fetched Profile Details:", response);
        setProfileDetails(response);
        const calculatedPercentage = calculatePercentage();
        setPercentage(calculatedPercentage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, []);
 
  const calculatePercentage = () => {
    const initialWeight = parseFloat(profileDetails.initial_weight); 
    const currentWeight = parseFloat(profileDetails.weight); 

    if (isNaN(initialWeight) || isNaN(currentWeight) || initialWeight === 0) {
      return 0; 
    }
    if (currentWeight < initialWeight) {
      return ((initialWeight - currentWeight) / initialWeight) * 100;
    } else {
      return ((currentWeight - initialWeight) / initialWeight) * 100;
    }
  };
  const result=calculatePercentage()
  
  return (
    <>
      <div className="min-h-screen bg-black flex justify-center items-center text-gray-300 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-xl " style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require("../../assets/images/hero-bg.jpg")})`,
        }}></div>

        <div className="container pb-8 sm:pb-0 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl px-2 py-2 font-bold"
              >
                Helps for your ideal body fitness
              </h1>
              <p data-aos="fade-up"
                data-aos-once="true" className="text-lg" >Motivates users with benefits and positive reinforcement and offer modifications and progress tracking</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:pt-0" data-aos="fade-down" >
              {/* Finished Workouts */}
              <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg" data-aos="fade-down" >
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Completed Workouts</h2>
                <p className="text-4xl font-bold text-center md:text-left">{profileDetails.days_since_joining}</p>
                <p className="text-sm text-gray-400 text-center md:text-left">Days</p>
              </div>
              {/* In Progress Workouts */}
              <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg" data-aos="fade-up" >
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Current Weight</h2>
                <p className="text-4xl font-bold text-center md:text-left">{profileDetails.weight}</p>
                <p className="text-sm text-gray-400 text-center md:text-left">Kg</p>
              </div>
              {/* Your Progress */}
              <div className="bg-black bg-opacity-50 p-2 rounded-lg shadow-lg flex flex-col items-center justify-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <p className="text-xl font-semibold mb-3 lg:mb-2 text-center md:text-left ">{parseFloat(profileDetails.weight) < parseFloat(profileDetails.initial_weight) ? 'Weight Loss' : 'Weight Gain'}</p>
                <div style={{ width: '60%', height: '60%' }} className="flex items-center justify-center pt-4 sm:pt-4">
                  <CircularProgressbar value={result} text={`${result.toFixed(1)}%`} styles={{
                    path: {
                      stroke: `red`,
                    },
                    trail: {
                      stroke: 'white',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '20px',
                    },
                  }} />
                </div>
              </div>
              <div className=" bg-red-900 hover:bg-opacity-70 h-20 w-30 rounded-lg text-center bg-opacity-60" onClick={openCamera}>
                <MdOutlineQrCodeScanner className=" w-10 h-10 mx-auto mt-2" />
                <h3 className=" mt-1 font-poppins">Add Attendance</h3>
              </div>
              {isCameraOpen && (
        <div className="qr-reader-container md:w-[40%] md:absolute md:left-[35%] md:top-[10%] w-full z-2 fixed border-x border-y border-5 rounded-lg border-gray-900 bg-gray-900 text-center">
          {/* Render close button */}
          <h1 className=" py-2 font-extralight text-light-green-400">Scan QR To Add Attendance</h1>
          <Tooltip content="Close" className=" border text-xs">
          <button className="close-button absolute right-2 top-2 z-3" onClick={closeCamera}>
            <IoIosCloseCircleOutline className=" w-7 h-7 text-red-700" />
          </button>
          </Tooltip>
          {/* Render QR code scanner */}
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
      )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
