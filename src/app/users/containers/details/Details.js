import { Avatar, Title } from '../../../library/index';
import Charts from '../../components/details/Charts';
import styles from './Details.module.scss';
import Orders from '../../components/details/Orders';
import Personal from '../../components/details/Personal';

const Details = ({ user }) => {
  const { first_name, avatar } = user;
  return (
    <div className={styles.container}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={styles.avatar}>
        <Avatar alt={first_name} src={avatar} />
      </div>
      <div className={styles.personal}>
        <Personal user={user} />
      </div>
      <Orders />
      <Charts />
    </div>
  );
};

export default Details;
