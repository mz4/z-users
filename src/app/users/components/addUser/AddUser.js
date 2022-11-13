import { useForm, FormProvider } from 'react-hook-form';
import { Title, Label, Input, Button, Field } from '../../../library/index';
import { EMAIL, FIRST_NAME, LAST_NAME } from '../../../constants/constants';
import styles from './AddUser.module.scss';

const AddUser = () => {
  const methods = useForm({
    mode: 'all',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: {
      [EMAIL]: '',
      [FIRST_NAME]: '',
      [LAST_NAME]: ''
    }
  });

  const { control, errors, handleSubmit, getValues } = methods;

  const onSubmit = () => {
    const data = getValues();
    console.log('dataform: ', JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.title}>
        <Title text="Add User" />
      </div>
      <Field>
        <Label text="email" />
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
      />
    </FormProvider>
  );
};
export default AddUser;
