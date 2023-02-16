import {
  FIRST_NAME,
  LAST_NAME,
  ROLE,
  EMAIL,
  DESCRIPTION,
} from '../../../../constants/constants';
import * as yup from 'yup';

export const AddUserSchema = yup.object().shape({
  [FIRST_NAME]: yup.string().required('Please enter first name'),
  [LAST_NAME]: yup.string().required('Please enter last name'),
  [ROLE]: yup.string().required('Please enter last role'),
  [EMAIL]: yup
    .string()
    .email('Please insert a valid email')
    .required('Email is required'),
  [DESCRIPTION]: yup
    .string()
    .min(10, 'Description should be min 10 characters')
    .max(60, 'Description should be max 60 characters')
    .required('Please enter a description'),
});
