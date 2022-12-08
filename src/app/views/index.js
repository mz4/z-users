import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../views/auth/store/authSlice';
import Login from './auth/containers/login/Login';
import Users from './users/containers/usersManagement/UsersManagement';

export const Views = () => {
  const isAuth = useSelector(isAuthenticated);
  console.log('isAuth: ', isAuth);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/login" />} />
      <Route exact path="/login" element={isAuth ? <Users /> : <Login />} />
      <Route exact path="/users" element={isAuth ? <Users /> : <Login />} />
    </Routes>
  );
};

export default Views;
