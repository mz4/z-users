import { Avatar, Title } from '../../../library/index';
import Charts from './Charts';
import styles from './Details.module.scss';
import Orders from './Orders';
import Personal from './Personal';

const Details = ({ user }) => {
  const { first_name, avatar } = user;
  return (
    <div className={styles.bodyContainer}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={styles.box1}>
        <Avatar alt={first_name} src={avatar} classnames={styles.box1} />
      </div>
      <div className={styles.box2}>
        <Personal user={user} />
      </div>
      <Orders />
      <Charts />
    </div>
  );
};

export default Details;
