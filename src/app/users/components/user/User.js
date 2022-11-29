import { useState } from 'react';
import { Avatar, Button, Dialog } from '../../../library/index';
import styles from './User.module.scss';

const User = ({ user, showProfileDetails, dialog }) => {
  const [modalDialog, setModalDialog] = useState(false);
  const handleDelete = (e) => {
    e.stopPropagation();
    setModalDialog(true);
  };
  return (
    <div
      className={styles.container}
      onClick={() => showProfileDetails(user)}
      data-testid="userDetails"
    >
      <div className={styles.userProfile}>
        <div>
          <Avatar alt={user.first_name} src={user.avatar} />
          <div className={styles.textProfile}>
            <div className={styles.cardName}>
              {user.first_name} {user.last_name}
            </div>
            <div className={styles.cardText}>{user.description}</div>
          </div>
          <div className={styles.cardAction}>
            <Button
              type="quinary"
              text="Delete"
              actionButton={handleDelete}
              dataTestId="submitForm"
            />
          </div>
        </div>
      </div>
      {modalDialog && dialog}
    </div>
  );
};
export default User;
