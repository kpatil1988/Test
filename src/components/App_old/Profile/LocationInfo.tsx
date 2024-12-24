import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

interface ProfileLocationFieldsProps {
  values: {
    city: string;
    state: string;
    country: string;
  };
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  touched: FormikTouched<{
    city: string;
    state: string;
    country: string;
  }>;
  errors: FormikErrors<{
    city: string;
    state: string;
    country: string;
  }>;
}

const LocationInfo: React.FC<ProfileLocationFieldsProps> = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:space-x-4'>
      {/* City */}
        <div className='w-full sm:w-1/3'>
          <label htmlFor="city" className="block font-medium">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
            autoComplete="on"
          />
          {touched.city && errors.city && <div className="text-red-600">{errors.city}</div>}
        </div>

        {/* State */}
        <div className='w-full sm:w-1/3'>
          <label htmlFor="state" className="block font-medium">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
            autoComplete="on"
          />
          {touched.state && errors.state && <div className="text-red-600">{errors.state}</div>}
        </div>

        {/* Country */}
        <div className='w-full sm:w-1/3'>
          <label htmlFor="country" className="block font-medium">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
            autoComplete="on"
          />
          {touched.country && errors.country && <div className="text-red-600">{errors.country}</div>}
        </div>
        </div>
    </>
  );
};

export default LocationInfo;
