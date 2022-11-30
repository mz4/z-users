import User from '../user/User';
import styles from './Users.module.scss';

const Users = ({ users, showProfileDetails, handleAction }) => {
  return (
    <div className={styles.usersContainer} data-testid="usersList">
      {users.length &&
        users.map((user) => {
          return (
            <User
              user={user}
              showProfileDetails={showProfileDetails}
              handleAction={handleAction}
              key={user.id}
            />
          );
        })}
    </div>
  );
};

export default Users;
