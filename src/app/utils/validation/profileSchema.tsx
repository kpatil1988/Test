import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    birthDate: Yup.string().required('Birth date is required'),
    gender: Yup.string().required('Gender is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    interests: Yup.array()
      .min(1, 'Select at least one interest')
      .max(5, 'You can select a maximum of 5 interests')
      .required('Selecting interests is required'),
});