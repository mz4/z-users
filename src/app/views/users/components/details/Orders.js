import { Subtitle } from '../../../../library/index';
import styles from './Orders.module.scss';

const Orders = () => {
  return (
    <>
      <div className={styles.box}>
        <Subtitle text="Total Orders Today" />
        <div className={styles.orderValue}>12.450 $</div>
      </div>
      <div className={styles.box}>
        <Subtitle text="Total Clients Today" />
        <div className={styles.orderValue}>25</div>
      </div>
      <div className={styles.box}>
        <Subtitle text="Revenue Day Ratio" />
        <div className={styles.orderValue}>25%</div>
      </div>
    </>
  );
};

export default Orders;
