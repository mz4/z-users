import { Subtitle } from '../../../../library/index';
import styles from './Orders.module.scss';

const Orders = () => {
  return (
    <>
      <div className={styles.box}>
        <Subtitle text="Experience" />
        <div className={styles.orderValue}>5 years</div>
      </div>
      <div className={styles.box}>
        <Subtitle text="Level" />
        <div className={styles.orderValue}>Senior</div>
      </div>
      <div className={styles.box}>
        <Subtitle text="Projects" />
        <div className={styles.orderValue}>5</div>
      </div>
    </>
  );
};

export default Orders;
