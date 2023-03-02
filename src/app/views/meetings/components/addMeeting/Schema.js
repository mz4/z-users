import {
  MEETING_NAME,
  MEETING_DATE,
  MEETING_TYPE,
  ORGANIZER,
  PARTICIPANT,
} from '../../../../constants/constants';
import * as yup from 'yup';

export const AddMeetingSchema = yup.object().shape({
  [MEETING_NAME]: yup.string().required('Please enter name'),
  [MEETING_DATE]: yup.string().required('Please enter date'),
  [MEETING_TYPE]: yup.string().required('Please enter type'),
  [ORGANIZER]: yup.string().required('Please enter organizer'),
  [PARTICIPANT]: yup.string().required('Please enter participant'),
});
