import React from "react";
/* import {
  useAppDispatch
} from '../../../../store/redux-hooks'; */
import { useDispatch } from "react-redux";
import { login } from '../../store/authSlice';
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(login(data))
  }

  return (<div className={styles.container}>
    <div className={styles.left} >
    <div className="backg">
		<div className="stars">
			<div className="s1"></div>
			<div className="s2"></div>
			<div className="s3"></div>
			<div className="s4"></div>
			<div className="s5"></div>
			<div className="s6"></div>
		</div>
		<div className="an">
			<div className="astro">
					<div className="helmet">
						<div className="glass">
							<div className="shine"></div>
						</div>
					</div>
					<div className="dress">
						<div className="c">
							<div className="btn1"></div>
							<div className="btn2"></div>
							<div className="btn3"></div>
							<div className="btn4"></div>
						</div>
					</div>
					<div className="handl">
						<div className="handl1">
							<div className="glovel">
								<div className="thumbl"></div>
								<div className="b2"></div>
							</div>
						</div>
					</div>
					<div className="handr">
						<div className="handr1">
							<div className="glover">
								<div className="thumbr"></div>
								<div className="b1"></div>
							</div>
						</div>
					</div>
					<div className="legl">
						<div className="bootl1">
							<div className="bootl2"></div>
						</div>
					</div>
					<div className="legr">
						<div className="bootr1">
							<div className="bootr2"></div>
						</div>
					</div>
				</div>
			</div>
    </div>
    </div>
    <div className={styles.right}>
      <LoginForm submit={submit} />
    </div>
  </div>)
}

export default Login;