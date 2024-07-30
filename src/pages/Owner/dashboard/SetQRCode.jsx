import React, { useState, useEffect } from "react";
import { QrScanner } from "react-qrcode-scanner";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Tooltip } from "@material-tailwind/react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
// import { ADD_QR_Attendance } from "../../actions/AttendanceAction";

const SetQRCode = () => {
  const [qrData, setQrData] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleScan = async (data) => {
    if (data) {
      setQrData(data);
      // try {
      //   const response = await ADD_QR_Attendance(data);
      //   if (response.status === 201) {
      //     console.log('Attendance recorded successfully', response);
      //     localStorage.setItem('qrData', data);
      //     window.location.reload();
      //   } else {
      //     console.error('Failed to record attendance', response);
      //     alert('Failed to record attendance. Please try again.');
      //   }
      // } catch (error) {
      //   console.error('Error occurred while recording attendance', error);
      //   alert('An error occurred while recording attendance. Please try again.');
      // }
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
    setTimeout(()=>{
closeCamera();
    },30000)
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

  return (
    <div className="relative text-center">
      <div
        className=" bg-red-900 hover:bg-opacity-70 h-20 w-30 rounded-lg text-center bg-opacity-60"
        onClick={openCamera}
      >
        <MdOutlineQrCodeScanner className=" w-10 h-10 mx-auto mt-2" />
        <h3 className=" mt-1 font-poppins">Add QR Code </h3>
      </div>
      {isCameraOpen && (
        <div className="qr-reader-container md:w-[40%] md:absolute md:left-[30%] md:top-[10%] w-full z-2 fixed border-x border-y border-5 rounded-lg border-gray-900 bg-gray-900 text-center">
          <h1 className=" py-2 font-extralight text-light-green-400">Scan Your New QR</h1>
          <Tooltip content="Close" className=" border text-xs">
            <button className="close-button absolute right-2 top-2 z-3" onClick={closeCamera}>
              <IoIosCloseCircleOutline className=" w-7 h-7 text-red-700" />
            </button>
          </Tooltip>
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default SetQRCode;