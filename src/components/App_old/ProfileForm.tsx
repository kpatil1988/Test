'use client';

import React from 'react';
import { useFormik } from 'formik';
import { profileValidationSchema } from '@/utils/validation/profileSchema';
import { useRouter } from 'next/navigation';
import PersonalInfo from './Profile/PersonalInfo';
import LocationInfo from './Profile/LocationInfo';
import InterestsInfo from './Profile/InterestsInfo';
import toast from 'react-hot-toast';

interface InputFormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  selected_interests: string[];
  master_interests: { [key: string]: string };
}

interface ProfileFormProps {
  className?: string;
  form_data: InputFormData;
  profilePicUrl: string;
  token: string;
  api_url: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ className = '', form_data, profilePicUrl, token, api_url }) => {
  const router = useRouter();
  const masterInterestsArray = Object.values(form_data.master_interests);
  const formik = useFormik({
    initialValues: {
      firstName: form_data.firstName || '',
      lastName: form_data.lastName || '',
      birthDate: form_data.birthDate || '',
      gender: form_data.gender || '',
      city: form_data.city || '',
      state: form_data.state || '',
      country: form_data.country || '',
      interests: form_data.selected_interests || [],
    },
    validationSchema: profileValidationSchema,
    onSubmit: async (values) => {
      const response = await fetch(api_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success('Successfully updated your profile!');
        router.push('/dashboard/moods');
      } else {
        toast.error('Oopsie... Something went wrong! Please try again later!');
        console.error('Error submitting form:', response.statusText);
      }
    },
  });

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      if (formik.values.interests.length < 5) {
        formik.setFieldValue('interests', [...formik.values.interests, value]);
      }
    } else {
      formik.setFieldValue('interests', formik.values.interests.filter(interest => interest !== value));
    }
  };

  return (
    <>
      <div className={className}>
        <div className="max-w-full mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex'>
              <div className="border-none rounded-sm m-5 p-8 bg-white space-y-5">
                <PersonalInfo 
                  profilePicUrl={profilePicUrl}
                  values={formik.values}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  touched={formik.touched}
                  errors={formik.errors}
                />
              </div>

              <div className="border-none rounded-sm m-5 p-8 bg-white space-y-5">
                <LocationInfo
                  values={formik.values}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  touched={formik.touched}
                  errors={formik.errors}
                />

                <InterestsInfo
                  values={formik.values}
                  handleInterestChange={handleInterestChange}
                  masterInterestsArray={masterInterestsArray}
                />
              </div>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className={`text-black bg-custom-deep-peach dark:bg-custom-misty-rose py-2 px-4 rounded-md mx-auto ${
                  !formik.dirty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
                }`}
                disabled={!formik.dirty}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
