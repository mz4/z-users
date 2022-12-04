import User from '../user/User';
import styles from './Users.module.scss';

const Users = ({ users, showProfileDetails, handleDeleteAction, filters }) => {
  const {
    parameters: { favorite },
    sorting: { asc }
  } = filters;
  const sorting = (a, b) =>
    asc
      ? a.first_name < b.first_name
        ? -1
        : 1
      : a.first_name < b.first_name
      ? 1
      : -1;
  const filtering = (user) => (favorite ? user.favorite === true : user);
  return (
    <div className={styles.usersContainer} data-testid="usersList">
      {users.length > 0 ? (
        users
          .slice()
          .sort(sorting)
          .filter(filtering)
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
        <>No users found</>
      )}
    </div>
  );
};

export default Users;
