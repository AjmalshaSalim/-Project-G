import React, { useState, useEffect, useRef } from "react";
import { QrScanner } from "react-qrcode-scanner";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Tooltip } from "@material-tailwind/react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import QRCode from "qrcode.react";
import {Set_QR} from "../../../actions/AttendanceAction"
const SetQRCode = () => {
  const [qrData, setQrData] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [generatedQrData, setGeneratedQrData] = useState('');
  const [inputData, setInputData] = useState('');
  const qrRef = useRef();

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      alert(`QR Code Scanned: ${data}`);
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

  const generateQRCode = () => {
    if (inputData) {
      setGeneratedQrData(inputData);
    } else {
      alert('Please enter data to generate a QR code.');
    }
  };

  const downloadQRCode = () => {

    const setQrData = async () => {
      try {
        console.log("inputData",inputData)
        const data = inputData
        const response = await Set_QR(data);
        console.log("const [attendance, setAttendance] = useState(null);",response)
      } catch (error) {
        console.error('Failed to fetch equipments', error);
      }
    };

    setQrData()


    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr_code.png";
    link.click();
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
      {/* <div
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
      )} */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter data for QR code"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={generateQRCode}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Generate QR Code
        </button>
        {generatedQrData && (
          <div ref={qrRef} className="mt-4">
            <QRCode value={generatedQrData} />
            <div className="mt-2">
              <button
                onClick={downloadQRCode}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download And Set This as Your  QR Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetQRCode;
