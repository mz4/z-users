import { useEffect, useState } from 'react';
import { USERS_ENDPOINT } from '../../constants/constants';
import { useFetch, useSort } from '../../hooks/index';
import { Button, Modal, Title, Loader } from '../../library/index';
import { Details, Header, Users } from '../components/index';
import styles from './UsersManagement.module.scss';

const UsersManagement = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [data, loading] = useFetch(USERS_ENDPOINT);
  const [sortByName] = useSort(USERS_ENDPOINT);

  const showProfileDetails = (user) => {
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => {
    setProfileDetails(false);
  };

  const sortUsers = () => {
    const dataSorted = sortByName(users);
    setUsers(dataSorted);
  };

  const addNewUser = () => {
    setNewUser(true);
  };

  useEffect(() => {
    setUsers(data);
  }, [data]);

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
        <Modal action={hideProfileDetails}>
          <div>Add new user</div>
        </Modal>
      )}
    </div>
  );
};
export default UsersManagement;
