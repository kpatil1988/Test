import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

interface ProfileBasicInfoFieldsProps {
  profilePicUrl: string;
  values: {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
  };
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  touched: FormikTouched<{
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
  }>;
}

const PersonalInfo: React.FC<ProfileBasicInfoFieldsProps> = ({
  profilePicUrl,
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <>
      {/* <div>
        <img 
          src={profilePicUrl}
          className='rounded-full h-35 w-35'
          crossOrigin='anonymous'
        />
      </div> */}
      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
          autoComplete="on"
        />
        {touched.firstName && errors.firstName && <div className="text-red-600">{errors.firstName}</div>}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
          autoComplete="on"
        />
        {touched.lastName && errors.lastName && <div className="text-red-600">{errors.lastName}</div>}
      </div>

      {/* Birth Date */}
      <div>
        <label htmlFor="birthDate" className="block font-medium">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={values.birthDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
          autoComplete="on"
        />
        {touched.birthDate && errors.birthDate && <div className="text-red-600">{errors.birthDate}</div>}
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender" className="block font-medium">Gender</label>
        <select
          name="gender"
          id="gender"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
          autoComplete="on"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not To Say">Prefer not to say</option>
        </select>
        {touched.gender && errors.gender && <div className="text-red-600">{errors.gender}</div>}
      </div>
    </>
  );
};

export default PersonalInfo;
