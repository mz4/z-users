import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_ENDPOINT, POST } from '../../constants/constants';
import { useFetch, useSort } from '../../hooks/index';
import { Button, Loader, Modal, Title } from '../../library/index';
import { Request } from '../../service/request';
import { AddUser, Details, Header, Users } from '../components/index';
import { getUsers, usersList, usersListSort } from '../store/usersSlice';
import styles from './UsersManagement.module.scss';

const UsersManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [getData, data, loading] = useFetch(USERS_ENDPOINT);
  const [sortByName] = useSort(USERS_ENDPOINT);

  const showProfileDetails = (user) => {
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => {
    setProfileDetails(false);
  };

  const hideNewUser = () => {
    setNewUser(false);
  };

  const sortUsers = () => {
    const dataSorted = sortByName(users);
    dispatch(usersListSort(dataSorted));
  };

  const addNewUser = () => {
    setNewUser(true);
  };

  const submit = (data) => {
    const newUser = {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=male'
    };
    const submitPost = new Request(newUser, USERS_ENDPOINT, POST);
    submitPost.post().then(() => {
      hideNewUser();
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
        <Button actionButton={sortUsers} text={'Sort By Name'} type="primary" />
        <Button actionButton={addNewUser} text={'Add new'} type="secondary" />
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <Users users={users} showProfileDetails={showProfileDetails} />
      )}
      {profileDetails && (
        <Modal action={hideProfileDetails}>
          <Details user={user} />
        </Modal>
      )}
      {newUser && (
        <Modal action={hideNewUser}>
          <AddUser submit={submit} />
        </Modal>
      )}
    </div>
  );
};
export default UsersManagement;
