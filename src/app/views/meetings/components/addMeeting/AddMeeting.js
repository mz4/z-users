import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  MEETING_DATE,
  MEETING_NAME,
  MEETING_OPTIONS,
  MEETING_TYPE,
  ORGANIZER,
  PARTICIPANT,
} from '../../../../constants/constants';
import {
  Button,
  Field,
  Input,
  Label,
  Select,
  Title,
} from '../../../../library/index';
import styles from './AddMeeting.module.scss';
import { AddMeetingSchema } from './Schema';

const AddMeeting = ({ submit }) => {
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(AddMeetingSchema),
    defaultValues: {
      [MEETING_NAME]: '',
      [MEETING_DATE]: '',
      [MEETING_TYPE]: '',
      [ORGANIZER]: '',
      [PARTICIPANT]: '',
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = methods;

  const onSubmit = () => {
    submit(getValues());
  };

  return (
    <>
      <Title text="Add Meeting" customClassName={styles.title} />
      <Field>
        <Label text="Meeting Name" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Meeting Name"
          name={MEETING_NAME}
          errors={errors}
          disabled={false}
          dataTestId={MEETING_NAME}
        />
      </Field>
      <Field>
        <Label text="Meeting Date" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Meeting Date"
          name={MEETING_DATE}
          errors={errors}
          disabled={false}
          dataTestId={MEETING_DATE}
        />
      </Field>
      <Field>
        <Label text="Meeting Type" />
        <Select
          control={control}
          name={MEETING_TYPE}
          errors={errors}
          options={MEETING_OPTIONS}
        />
      </Field>
      <Field>
        <Label text="Organizer" />
        <Input
          control={control}
          defaultValue=""
          placeholder="organizer"
          name={ORGANIZER}
          errors={errors}
          disabled={false}
          dataTestId={ORGANIZER}
        />
      </Field>
      <Field>
        <Label text="Participant" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Participant"
          name={PARTICIPANT}
          errors={errors}
          disabled={false}
          dataTestId={PARTICIPANT}
        />
      </Field>
      <Button
        type="three"
        text="Submit"
        actionButton={handleSubmit(onSubmit)}
        dataTestId="AddMeetingSubmitForm"
      />
    </>
  );
};
export default AddMeeting;
