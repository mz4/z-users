import { Title } from '../../../../library/index';
import Charts from '../../components/details/Charts';
import Orders from '../../components/details/Orders';
import Skills from '../../components/details/Skills';
import styles from './Details.module.scss';

const Details = ({ avatar, personal }) => {
  return (
    <div className={styles.container}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.personal}>{personal}</div>
      <Title text="Skills" customClassName={styles.title} />
      <Skills />
      <Title text="History" customClassName={styles.title} />
      <Orders />
      <Title text="Profile" customClassName={styles.title} />
      <Charts />
    </div>
  );
};

export default Details;
