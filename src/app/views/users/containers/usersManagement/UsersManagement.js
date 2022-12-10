import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersContext } from '../../../../context/Context';
import {
  PROFILES_ENDPOINT,
  POST,
  PRIMARY,
  SECONDARY,
  AVATAR_LINK
} from '../../../../constants/constants';
import { useFetch } from '../../../../hooks/index';
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
  getUsers,
  getUsersFilters,
  usersList,
  usersListSort,
  deleteUser,
  filterUsers
} from '../../store/usersSlice';
import styles from './UsersManagement.module.scss';

const UsersManagement = () => {
  const dispatch = useDispatch();
  const usersContext = useContext(UsersContext);
  const users = useSelector(getUsers);
  const filters = useSelector(getUsersFilters);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { getData, data, loading } = useFetch(PROFILES_ENDPOINT);
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

  const setTheme = () => {
    usersContext.toggleTheme();
  };

  const handleDeleteAction = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleFilterAction = (filter) => {
    dispatch(filterUsers(filter));
  };

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
      getData(PROFILES_ENDPOINT);
    });
  };

  useEffect(() => {
    dispatch(usersList(data));
  }, [data, dispatch]);

  return (
    <div className={styles.pageContainer}>
      <Title text="Users List" />
      <Header
        sortUsers={handleSortUsers}
        toggleNewUser={toggleNewUser}
        setTheme={setTheme}
      />
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
