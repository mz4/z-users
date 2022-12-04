import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  DESCRIPTION
} from '../../../constants/constants';
import * as yup from 'yup';

export const AddUserSchema = yup.object().shape({
  [EMAIL]: yup
    .string()
    .email('Please insert a valid email')
    .required('Email is required'),
  [FIRST_NAME]: yup.string().required('Please enter first name'),
  [LAST_NAME]: yup.string().required('Please enter last name'),
  [DESCRIPTION]: yup
    .string()
    .min(10, 'Description should be min 10 characters')
    .max(60, 'Description should be max 60 characters')
    .required('Please enter a description')
});
