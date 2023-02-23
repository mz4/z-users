import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Title } from '../../../../library/index';
import { Filters, Header } from '../../../users/components/index';
import {
  filterUsers,
  getUsers,
  selectLoading,
  usersListSort,
} from '../../store/usersSlice';
import styles from './Meetings.module.scss';

const Meetings = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { first_name, avatar } = user;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const toggleNewUser = (isNewUser) => setNewUser(isNewUser);

  const handleSortUsers = () => dispatch(usersListSort());

  const handleFilterAction = (filter) => dispatch(filterUsers(filter));

  return (
    <div className={styles.pageContainer} datatestid="list">
      <Title text="Users List" />
      <Header sortUsers={handleSortUsers} toggleNewUser={toggleNewUser} />
      <div className={styles.bodyContainer}>
        <Filters handleFilterAction={handleFilterAction} />
        <div className={styles.users}>
          {loading ? (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <div>AAAA</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Meetings;
