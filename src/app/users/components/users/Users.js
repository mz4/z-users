import User from '../user/User';
import { Dialog, Button, Title, Subtitle } from '../../../library/index';
import styles from './Users.module.scss';

const Users = ({
  users,
  showProfileDetails,
  handleAction,
  handleDismiss,
  handleClickOutside
}) => {
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
                  header={
                    <Title
                      text={'Delete User'}
                      customClassName={styles.centerText}
                    />
                  }
                  body={
                    <Subtitle
                      text={'Are you sure you want to delete user?'}
                      customClassName={styles.centerText}
                    />
                  }
                  footer={
                    <>
                      <Button
                        type="quaternary"
                        text={'Delete'}
                        actionButton={handleAction}
                      />
                      <Button
                        type="tertiary"
                        text={'Dismiss'}
                        actionButton={handleDismiss}
                      />
                    </>
                  }
                  handleClickOutside={handleClickOutside}
                />
              }
            />
          );
        })}
    </div>
  );
};

export default Users;
