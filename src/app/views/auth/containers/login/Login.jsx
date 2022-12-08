import React from "react";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  return (<div className={styles.container}>
    <div className={styles.left} />
    <div className={styles.right}>
      <LoginForm />
    </div>
  </div>)
}

export default Login;