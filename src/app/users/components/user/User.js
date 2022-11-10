import { Avatar } from '../../../library/index';
import styles from './User.module.scss';

const User = ({ user, showProfileDetails }) => {
  return (
    <div
      className={styles.userProfile}
      onClick={() => showProfileDetails(user)}
    >
      <div className={styles.userProfileContainer}>
        <div>
          <Avatar alt={user.first_name} src={user.avatar} />

          <div className={styles.textProfile}>
            <div className={styles.cardName}>
              {user.first_name} {user.last_name}
            </div>
            <div className={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
        <div className={styles.footerProfile}>
          <div className={styles.cardFooter}>
            <i className={'fa-regular fa-envelope'}></i>
            <i className={'fa-regular fa-star'}></i>
            <i className={'fa-brands fa-whatsapp'}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
