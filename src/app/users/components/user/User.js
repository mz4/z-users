import { useState } from 'react';
import { Avatar, Button, Dialog } from '../../../library/index';
import styles from './User.module.scss';

const User = ({ user, showProfileDetails, handleDelete }) => {
  const [dialog, setDialog] = useState(false);
  const handleDeleteUser = (e) => {
    e.stopPropagation();
    setDialog(true);
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
              type="quaternary"
              text="Delete"
              actionButton={handleDeleteUser}
              dataTestId="submitForm"
            />
          </div>
        </div>
      </div>
      {dialog && <Dialog />}
    </div>
  );
};
export default User;
