import { useForm, FormProvider } from 'react-hook-form';
import { Title, Label, Input } from '../../../library/index';
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

  const { control, errors } = methods;

  return (
    <FormProvider {...methods}>
      <div className={styles.title}>
        <Title text="Add User" />
      </div>
      <div className={styles.field}>
        <Label text="email" />
        <Input
          control={control}
          defaultValue=""
          placeholder="email"
          name={EMAIL}
          errors={errors}
          disabled={false}
        />
      </div>
      <div className={styles.field}>
        <Label text="First Name" />
        <Input
          control={control}
          defaultValue=""
          placeholder="First Name"
          name={FIRST_NAME}
          errors={errors}
          disabled={false}
        />
      </div>
      <div className={styles.field}>
        <Label text="Last Name" />
        <Input
          control={control}
          defaultValue=""
          placeholder="Last Name"
          name={LAST_NAME}
          errors={errors}
          disabled={false}
        />
      </div>
    </FormProvider>
  );
};
export default AddUser;
