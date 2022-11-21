import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Title, Label, Input, Button, Field } from '../../../library/index';
import { EMAIL, FIRST_NAME, LAST_NAME } from '../../../constants/constants';
import { AddUserSchema } from './Schema';
import styles from './AddUser.module.scss';

const AddUser = ({ submit }) => {
  const methods = useForm({
    resolver: yupResolver(AddUserSchema),
    defaultValues: {
      [EMAIL]: '',
      [FIRST_NAME]: '',
      [LAST_NAME]: ''
    }
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues
  } = methods;

  const onSubmit = () => {
    console.log('onSubmit');
    submit(getValues());
  };

  return (
    <>
      <Title text="Add User" customClassName={styles.title} />
      <Field>
        <Label text="Email" />
        <Input
          control={control}
          defaultValue=""
          placeholder="email"
          name={EMAIL}
          errors={errors}
          disabled={false}
        />
      </Field>
      <Field>
        <Label text="First Name" />
        <Input
          control={control}
          defaultValue=""
          placeholder="First Name"
          name={FIRST_NAME}
          errors={errors}
          disabled={false}
        />
      </Field>
      <Field>
        <Label text="Last Name" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Last Name"
          name={LAST_NAME}
          errors={errors}
          disabled={false}
        />
      </Field>
      <Button
        type="tertiary"
        text="Submit"
        actionButton={handleSubmit(onSubmit)}
        dataTestId="submitForm"
      />
    </>
  );
};
export default AddUser;
