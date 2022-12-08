import React from "react";
import { useDispatch } from 'react-redux';
import { loginSucess } from '../../store/authSlice';
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginSucess(true))
  }

  return (<div className={styles.container}>
    <div className={styles.left} />
    <div className={styles.right}>
      <LoginForm submit={submit} />
    </div>
  </div>)
}

export default Login;