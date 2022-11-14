import { useForm, FormProvider } from 'react-hook-form';
import { Title, Label, Input, Button, Field } from '../../../library/index';
import { EMAIL, FIRST_NAME, LAST_NAME } from '../../../constants/constants';
import styles from './AddUser.module.scss';

const AddUser = ({ submit }) => {
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
    submit(data);
  };

  /*   const onSubmit = async () => {
    const data = getValues();
    const newUser = {
      id: 100,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
    };
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };
    try {
      await fetch('http://localhost:3001/users', settings).then((res) =>
        res.json().then((res) => {
          console.log('done: ', res);
        })
      );
    } catch (e) {
      return e;
    }
  };
 */

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
