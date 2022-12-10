import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Title, Subtitle, Label, Input, Button, Field } from '../../../library';
import { EMAIL, PASSWORD } from '../../../constants/constants';
import { LoginFormSchema } from './LoginFormSchema';
import styles from './LoginForm.module.scss';

const LoginForm = ({ submit }) => {
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      [EMAIL]: 'johndoeb@example.com',
      [PASSWORD]: 'password123'
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
    <div className={styles.container}>
      <>
        <Title text="Welcome" customClassName={styles.title} />
        <Subtitle text="Sign In" customClassName={styles.subtitle} />
        <Field>
          <Label text="Email" />
          <Input
            control={control}
            placeholder="E-mail"
            name={EMAIL}
            errors={errors}
            disabled={false}
            dataTestId={EMAIL}
          />
        </Field>
        <Field>
          <Label text="Password" />
          <Input
            control={control}
            placeholder="Password"
            name={PASSWORD}
            errors={errors}
            disabled={false}
            dataTestId={PASSWORD}
            type="password"
          />
        </Field>
        <Button
          type="tertiary"
          text="Submit"
          actionButton={handleSubmit(onSubmit)}
          dataTestId="submitForm"
        />
      </>
    </div>
  );
};

export default LoginForm;
