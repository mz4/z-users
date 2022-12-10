import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../views/auth/store/authSlice';
import Login from './auth/containers/login/Login';
import Users from './users/containers/usersManagement/UsersManagement';

const RouteInterceptor = ({ isAuth, componentAuth, componentNotAuth }) => {
  return isAuth ? componentAuth : componentNotAuth;
};

export const Views = () => {
  const isAuth = useSelector(isAuthenticated);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/login" />} />
      <Route
        exact
        path="/login"
        element={
          <RouteInterceptor
            isAuth={isAuth}
            componentAuth={<Navigate replace to="/users" />}
            componentNotAuth={<Login />}
          />
        }
      />
      <Route
        exact
        path="/users"
        element={
          <RouteInterceptor
            isAuth={isAuth}
            componentAuth={<Users />}
            componentNotAuth={<Navigate replace to="/login" />}
          />
        }
      />
    </Routes>
  );
};

export default Views;
