import User from '../user/User';
import styles from './Users.module.scss';
import { sortUsers, favoriteUsers } from '../../../../utils/common/common';

const Users = ({ users, showProfileDetails, handleDeleteAction, filters }) => {
  const {
    parameters: { favorite },
    sorting: { asc },
  } = filters;
  return (
    <div className={styles.usersContainer} data-testid="usersList">
      {users.length > 0 ? (
        users
          .slice()
          .sort((a, b) => sortUsers(a, b, asc))
          .filter((user) => favoriteUsers(user, favorite))
          .map((user) => {
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
        <div className={styles.noUsersFound}>No users found</div>
      )}
    </div>
  );
};

export default Users;
