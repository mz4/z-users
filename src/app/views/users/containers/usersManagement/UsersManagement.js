import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROFILES_ENDPOINT,
  POST,
  PRIMARY,
  SECONDARY,
  AVATAR_LINK
} from '../../../../constants/constants';
import { Loader, Modal, Title, Avatar } from '../../../../library/index';
import Request from '../../../../service/request';
import {
  AddUser,
  Details,
  Header,
  Users,
  Filters
} from '../../components/index';
import Personal from '../../components/details/Personal';
import {
  selectGetUsers,
  selectLoading,
  getUsersFilters,
  getUsers,
  usersListSort,
  deleteUser,
  filterUsers
} from '../../store/usersSlice';
import styles from './UsersManagement.module.scss';

const UsersManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectGetUsers);
  const loading = useSelector(selectLoading);
  const filters = useSelector(getUsersFilters);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { first_name, avatar } = user;

  const showProfileDetails = (user) => {
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => {
    setProfileDetails(false);
  };

  const toggleNewUser = (isNewUser) => {
    setNewUser(isNewUser);
  };

  const handleSortUsers = () => {
    dispatch(usersListSort());
  };

  const handleDeleteAction = async (userId) => {
    dispatch(deleteUser(userId));
    dispatch(getUsers());
  };

  const handleFilterAction = (filter) => {
    dispatch(filterUsers(filter));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const submit = (data) => {
    const { email, firstName, lastName, favorite, description } = data;
    const newUser = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      description: description,
      avatar: AVATAR_LINK,
      favorite: favorite
    };
    const submitPost = new Request(newUser, PROFILES_ENDPOINT, POST);
    submitPost.post().then(() => {
      toggleNewUser(false);
      dispatch(getUsers());
    });
  };

  return (
    <div className={styles.pageContainer} datatestid="list">
      <Title text="Users List" />
      <Header sortUsers={handleSortUsers} toggleNewUser={toggleNewUser} />
      <div className={styles.bodyContainer}>
        <Filters handleFilterAction={handleFilterAction} />
        <div>
          {loading ? (
            <Loader />
          ) : (
            <Users
              users={users}
              showProfileDetails={showProfileDetails}
              handleDeleteAction={handleDeleteAction}
              filters={filters}
            />
          )}
        </div>
      </div>
      {profileDetails && (
        <Modal action={hideProfileDetails} modalType={PRIMARY}>
          <Details
            avatar={<Avatar alt={first_name} src={avatar} />}
            personal={<Personal user={user} />}
          />
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
