import { EMAIL, FIRST_NAME, LAST_NAME } from '../../../constants/constants';
import * as yup from 'yup';

export const AddUserSchema = yup.object().shape({
  [EMAIL]: yup
    .string()
    .email('Please insert a valid email')
    .required('email is required'),
  [FIRST_NAME]: yup.string().required('Please enter first name'),
  [LAST_NAME]: yup.string().required('Please enter last name')
});
