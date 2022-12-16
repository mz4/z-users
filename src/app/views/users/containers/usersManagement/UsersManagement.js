import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROFILES_ENDPOINT,
  POST,
  PRIMARY,
  SECONDARY
} from '../../../../constants/constants';
import { formatNewUSer } from '../../../../utils/common/common';
import { Loader, Modal, Title, Avatar } from '../../../../library/index';
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
  filterUsers,
  postUser
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

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const showProfileDetails = (user) => {
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => setProfileDetails(false);

  const toggleNewUser = (isNewUser) => setNewUser(isNewUser);

  const handleSortUsers = () => dispatch(usersListSort());

  const handleDeleteAction = async (userId) => dispatch(deleteUser(userId));

  const handleFilterAction = (filter) => dispatch(filterUsers(filter));

  const handleSubmit = (data) => {
    const formatData = formatNewUSer(data);
    dispatch(postUser(formatData));
    toggleNewUser(false);
    /*     const submitPost = new Request(
      formatNewUser(data),
      PROFILES_ENDPOINT,
      POST
    );
    submitPost.post().then(() => {
      toggleNewUser(false);
      dispatch(getUsers());
    }); */
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
          <AddUser submit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
};
export default UsersManagement;
