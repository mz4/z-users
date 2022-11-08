import { useState, useEffect } from "react";
import classnames from "classnames";
import User from "../components/user/User";
import Details from "../components/details/Details";
import { Button, Title, Modal } from "../../library/index";
import { useFetch, useSort } from "../../hooks/index";
import styles from "./Users.module.scss";

const Users = () => {
  //const endpoint = "https://reqres.in/api/users?per_page=30";
  const endpoint = "https://u60psg-3001.preview.csb.app/userslist";
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [profileDetails, setProfileDetails] = useState(false);
  const [data, loading] = useFetch(endpoint);
  const [sortByName] = useSort(endpoint);

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

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div className={styles.pageContainer}>
      <Title text="Users List" />
      <div className={classnames(styles.pageOptions, styles.marginTop24)}>
        <Button actionButton={sortUsers} text={"Sort By Name"} />
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
    </div>
  );
};
export default Users;
