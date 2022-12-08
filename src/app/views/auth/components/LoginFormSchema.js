import { EMAIL, PASSWORD } from '../../../constants/constants';
import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  [EMAIL]: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
  [PASSWORD]: yup.string().required('Please enter a password')
});
