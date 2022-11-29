import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  USERS_ENDPOINT,
  POST,
  PRIMARY,
  SECONDARY,
  AVATAR_LINK
} from '../../../constants/constants';
import { useFetch, useSort } from '../../../hooks/index';
import { Button, Loader, Modal, Title } from '../../../library/index';
import Request from '../../../service/request';
import { AddUser, Details, Header, Users } from '../../components/index';
import { getUsers, usersList, usersListSort } from '../../store/usersSlice';
import styles from './UsersManagement.module.scss';

const UsersManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { getData, data, loading } = useFetch(USERS_ENDPOINT);
  const { sortByName } = useSort(USERS_ENDPOINT);

  const showProfileDetails = (user) => {
    console.log('action4 showprofiledetails');
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => {
    setProfileDetails(false);
  };

  const toggleNewUser = (isNewUser) => {
    setNewUser(isNewUser);
  };

  const sortUsers = () => {
    const dataSorted = sortByName(users);
    dispatch(usersListSort(dataSorted));
  };

  const handleAction = () => {
    console.log('action1 delete');
    alert('delete');
  };

  const handleDismiss = () => {
    console.log('action2 dismiss');
    alert('dismiss');
  };

  const handleClickOutside = (e) => {
    console.log('action3 outside');
    alert('click outside');
  };

  const submit = (data) => {
    const newUser = {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      avatar: AVATAR_LINK
    };
    const submitPost = new Request(newUser, USERS_ENDPOINT, POST);
    submitPost.post().then(() => {
      toggleNewUser(false);
      getData(USERS_ENDPOINT);
    });
  };

  useEffect(() => {
    dispatch(usersList(data));
  }, [data, dispatch]);

  return (
    <div className={styles.pageContainer}>
      <Title text="Users List" />
      <Header>
        <Button
          actionButton={sortUsers}
          text={'Sort By Name'}
          type="primary"
          dataTestId="btnSort"
        />
        <Button
          actionButton={() => toggleNewUser(true)}
          text={'Add new'}
          type="secondary"
          dataTestId="btnNew"
        />
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <Users
          users={users}
          showProfileDetails={showProfileDetails}
          handleAction={handleAction}
          handleDismiss={handleDismiss}
          handleClickOutside={handleClickOutside}
        />
      )}
      {profileDetails && (
        <Modal action={hideProfileDetails} modalType={PRIMARY}>
          <Details user={user} />
        </Modal>
      )}
      {newUser && (
        <Modal action={() => toggleNewUser(false)} modalType={SECONDARY}>
          <AddUser submit={submit} />
        </Modal>
      )}
    </div>
  );
};
export default UsersManagement;
