import React from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(login({email: 'johndoeb@example.com', password: "password123"}))
  }

  return (<div className={styles.container}>
    <div className={styles.left} />
    <div className={styles.right}>
      <LoginForm submit={submit} />
    </div>
  </div>)
}

export default Login;