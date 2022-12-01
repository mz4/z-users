import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Title,
  Label,
  Input,
  Button,
  Field,
  Checkbox
} from '../../../library/index';
import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  DESCRIPTION,
  GENDER,
  FAVORITE
} from '../../../constants/constants';
import { AddUserSchema } from './Schema';
import styles from './AddUser.module.scss';

const AddUser = ({ submit }) => {
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(AddUserSchema),
    defaultValues: {
      [EMAIL]: '',
      [FIRST_NAME]: '',
      [LAST_NAME]: '',
      [DESCRIPTION]: '',
      [GENDER]: '',
      [FAVORITE]: false
    }
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues
  } = methods;

  const onSubmit = () => {
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
          dataTestId={EMAIL}
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
          dataTestId={FIRST_NAME}
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
          dataTestId={LAST_NAME}
        />
      </Field>
      <Field>
        <Label text="Description" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Description"
          name={DESCRIPTION}
          errors={errors}
          disabled={false}
          dataTestId={DESCRIPTION}
        />
      </Field>
      <Field>
        <Label text="Favorite" />
        <Checkbox
          control={control}
          name={FAVORITE}
          errors={errors}
          disabled={false}
          dataTestId={FAVORITE}
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
