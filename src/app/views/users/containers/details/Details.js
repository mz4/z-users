import { Title } from '../../../../library/index';
import Charts from '../../components/details/Charts';
import styles from './Details.module.scss';
import Orders from '../../components/details/Orders';

const Details = ({ avatar, personal }) => {
  return (
    <div className={styles.container}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.personal}>{personal}</div>
      <Orders />
      <Charts />
    </div>
  );
};

export default Details;
