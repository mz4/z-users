import { useState, useEffect } from "react";
import classnames from "classnames";
import User from "../components/user/User";
import Details from "../components/details/Details";
import { Button, Title, Modal } from "../../library/index";
import { useFetch, useSort } from "../../hooks/index";
import { USERS_ENDPOINT } from "../../constants/constants";
import styles from "./Users.module.scss";

const Users = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [profileDetails, setProfileDetails] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [data, loading] = useFetch(USERS_ENDPOINT);
  const [sortByName] = useSort(USERS_ENDPOINT);

  const showProfileDetails = (user) => {
    setUser(user);
    setProfileDetails(true);
  };

  const hideProfileDetails = () => {
    setProfileDetails(false);
  };

  const sortUsers = () => {
    const dataSorted = sortByName(users);
    setUsers(dataSorted);
  };

  const addNewUser = () => {
    setNewUser(true);
  };

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div className={styles.pageContainer}>
      <Title text="Users List" />
      <div className={classnames(styles.headOptionsContainer, styles.headOptions, styles.marginTop24)}>
        <Button actionButton={sortUsers} text={"Sort By Name"} type="primary" />
        <Button actionButton={addNewUser} text={"Add new"} type="secondary" />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.usersContainer}>
          {users.length &&
            users.map((user) => {
              return (
                <User
                  user={user}
                  showProfileDetails={showProfileDetails}
                  key={user.id}
                />
              );
            })}
        </div>
      )}
      {profileDetails && (
        <Modal action={hideProfileDetails}>
          <Details user={user} />
        </Modal>
      )}
      {newUser && (
        <Modal action={hideProfileDetails}>
          <div>Add new user</div>
        </Modal>
      )}
    </div>
  );
};
export default Users;
