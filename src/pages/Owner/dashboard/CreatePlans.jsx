import React, { useState } from 'react';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useMaterialTailwindController } from "../../../context/index";
import { MdDelete } from "react-icons/md";
import { Create_Gym_Plan } from "../../../actions/GymPlansActions";
import { IoMdClose } from "react-icons/io";

const CreatePlans = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    duration: '',
    duration_type: 'day',
    terms_and_conditions: '',
    features: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'image') {
      if (files && files[0]) {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      }
    } else if (name.startsWith('feature')) {
      const index = parseInt(name.split('-')[1], 10);
      const newFeatures = [...formData.features];
      newFeatures[index] = { name: value.trim() };
  
      setFormData({
        ...formData,
        features: newFeatures,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const addFeatureField = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { name: '' }],
    });
  };

  const removeFeatureField = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featuresString = formData.features.map(feature => feature.name.trim()).join(',');
  
    try {
      const response = await Create_Gym_Plan({
        ...formData,
        features: featuresString,
      });
  
      setFormData({
        name: '',
        description: '',
        price: '',
        duration: '',
        duration_type: 'day',
        image: null,
        terms_and_conditions: '',
        features: [],
      });
    } catch (error) {
      console.error('Error creating plan:', error);
    }
  };

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const inputClassName = `w-full py-2.5 text-sm px-4 rounded-md bg-transparent border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
    sidenavType === 'dark'
      ? "border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
      : "border-blue-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
  }`;

  return (
    <div className="w-full h-[1100px] overflow-y-scroll p-5 ">
      <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 text-black"}`}>
        <div className=' w-5/6 h-10'>
          <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "black"} className='pl-5 mt-2'>
            Create Plan
          </Typography>
        </div>
        <div className="w-1/6 h-10" >
          <Link to='/dashboard/Plans'>
            <Button variant="filled" className={`${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
              Back to Plans
            </Button>
          </Link>
          <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-24 top-40 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
        </div>
      </div>
      <div className="w-full h-[1100px] overflow-y-scroll p-5">
        <form onSubmit={handleSubmit}>
          <Card className={sidenavType==='dark'?"shadow-xl mt-2 bg-gray-900":"shadow-xl mt-2 bg-white"}>
            <CardBody className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={inputClassName} />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className={inputClassName} />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className={inputClassName} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="number" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} className={inputClassName} />
                <select name="duration_type" value={formData.duration_type} onChange={handleChange} className={inputClassName}>
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                <input type="file" name="image" onChange={handleChange} className={inputClassName} />
              </div>
              <textarea name="terms_and_conditions" placeholder="Terms and Conditions" value={formData.terms_and_conditions} onChange={handleChange} className={`${inputClassName} col-span-3`} />
              <div className="flex flex-col gap-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      name={`feature-${index}`}
                      placeholder="Feature"
                      value={feature.name}
                      onChange={handleChange}
                      className={inputClassName}
                    />
                    <button
                      type="button"
                      onClick={() => removeFeatureField(index)}
                      className="bg-red-800 text-white p-2 rounded-md"
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeatureField}
                  className={`p-2 rounded-md ${sidenavType === 'dark' ? "bg-red-700 text-white" : "bg-black text-white"}`}
                >
                  Add Feature
                </button>
              </div>
            </CardBody>
            <div className="flex justify-end p-4">
              <Button type="submit" variant="filled" className="bg-black text-white">
                Create Plan
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default CreatePlans;
