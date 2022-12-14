import React from "react";
import {
  useAppDispatch
} from '../../../../utils/tests/redux-hooks';
import { login } from '../../store/authSlice';
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useAppDispatch();

  const submit = (data) => {
    dispatch(login(data))
  }

  return (<div className={styles.container}>
    <div className={styles.left} />
    <div className={styles.right}>
      <LoginForm submit={submit} />
    </div>
  </div>)
}

export default Login;