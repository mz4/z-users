import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Title } from '../../../../library/index';
import { Filters, Header } from '../../../users/components/index';
import {
  filterUsers,
  getUsers,
  selectLoading,
  usersListSort,
} from '../../store/usersSlice';
import Meetings from '../../components/meetings/Meetings';
import styles from './MeetingsManagement.module.scss';

const MeetingsManagement = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [user, setUser] = useState({});
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { first_name, avatar } = user;

  const columns = useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Organizer',
        accessor: 'organizer',
      },
      {
        Header: 'Participants',
        accessor: 'participant',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const data = [
    {
      id: 81,
      type: 'one-on-one',
      date: '2021-09-01T00:00:00.000Z',
      organizer: 'John Doe',
      participants: 'Mary Jane',
      status: 'complete',
    },
    {
      id: 82,
      type: 'one-on-one',
      date: '2021-09-01T00:00:00.000Z',
      organizer: 'Peter Parker',
      participants: 'Mike Wazowski',
      status: 'complete',
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
    return () => {};
  }, [dispatch]);

  const toggleNewUser = (isNewUser) => setNewUser(isNewUser);

  const handleSortUsers = () => dispatch(usersListSort());

  const handleFilterAction = (filter) => dispatch(filterUsers(filter));

  return (
    <div className={styles.pageContainer} datatestid="list">
      <Title text="Meetings List" />
      <Header sortUsers={handleSortUsers} toggleNewUser={toggleNewUser} />
      <div className={styles.bodyContainer}>
        <Filters handleFilterAction={handleFilterAction} />
        <div className={styles.users}>
          {loading ? (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <Meetings columns={columns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
};
export default MeetingsManagement;
