import User from '../user/User';
import styles from './Users.module.scss';

const Users = ({ users, showProfileDetails, handleDeleteAction }) => {
  return (
    <div className={styles.usersContainer} data-testid="usersList">
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <User
              user={user}
              showProfileDetails={showProfileDetails}
              handleDeleteAction={handleDeleteAction}
              key={user.id}
            />
          );
        })
      ) : (
        <>No users found</>
      )}
    </div>
  );
};

export default Users;
