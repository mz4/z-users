import User from '../user/User';
import { Dialog } from '../../../library/index';
import styles from './Users.module.scss';

const Users = ({ users, showProfileDetails, handleAction, handleDismiss }) => {
  const textHeader = 'Delete User';
  const textBody = 'Are you sure you want to delete user?';
  const textAction = 'Delete';
  const textDismiss = 'Dismiss';
  return (
    <div className={styles.usersContainer} data-testid="usersList">
      {users.length &&
        users.map((user) => {
          return (
            <User
              user={user}
              showProfileDetails={showProfileDetails}
              key={user.id}
              dialog={
                <Dialog
                  textHeader={textHeader}
                  textBody={textBody}
                  textAction={textAction}
                  textDismiss={textDismiss}
                  handleAction={handleAction}
                  handleDismiss={handleDismiss}
                />
              }
            />
          );
        })}
    </div>
  );
};

export default Users;
