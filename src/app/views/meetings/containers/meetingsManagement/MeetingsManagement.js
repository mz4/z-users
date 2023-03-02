import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SECONDARY } from '../../../../constants/constants';
import { columnsTable } from '../../../../data/data';
import { Loader, Modal, Title } from '../../../../library/index';
import { Header } from '../../../meetings/components/index';
import { Filters } from '../../../users/components/index';
import AddMeeting from '../../components/addMeeting/AddMeeting';
import { Meetings } from '../../components/index';
import {
  getMeetings,
  selectGetMeetings,
  selectLoading,
} from '../../store/meetingsSlice';
import styles from './MeetingsManagement.module.scss';

const MeetingsManagement = () => {
  const dispatch = useDispatch();
  const [newMeeting, setNewMeeting] = useState(false);
  const meetings = useSelector(selectGetMeetings);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getMeetings());
  }, [dispatch]);

  const handleSubmit = (data) => {
    console.log(data);
  };

  const columns = useMemo(() => columnsTable, []);

  const toggleNewMeeting = (isNewMeeting) => setNewMeeting(isNewMeeting);

  const handleFilterAction = () => null;

  return (
    <div className={styles.pageContainer} datatestid="list">
      <Title text="Meetings List" />
      <Header toggleNewMeeting={toggleNewMeeting} />
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
      {newMeeting && (
        <Modal action={() => toggleNewMeeting(false)} modalType={SECONDARY}>
          <AddMeeting submit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
};
export default MeetingsManagement;
