import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Title } from '../../../../library/index';
import { Filters, Header } from '../../../users/components/index';
import { Meetings } from '../../components/meetings/index';
import { columnsTable } from '../../../../data/data';
import {
  getMeetings,
  selectGetMeetings,
  selectLoading,
} from '../../store/meetingsSlice';
import styles from './MeetingsManagement.module.scss';

const MeetingsManagement = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectGetMeetings);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getMeetings());
  }, [dispatch]);

  const columns = useMemo(() => columnsTable, []);

  const toggleNewUser = () => null;

  const handleSortUsers = () => null;

  const handleFilterAction = () => null;

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
            <Meetings columns={columns} data={meetings} />
          )}
        </div>
      </div>
    </div>
  );
};
export default MeetingsManagement;
