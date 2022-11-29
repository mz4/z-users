import { Button } from '../index';
import styles from './Dialog.module.scss';

export const Dialog = () => {
  console.log('dialog');
  return (
    <div className={styles.container}>
      <div className={styles.header}>aaa</div>
      <div className={styles.body}>bbb</div>
      <div className={styles.footer}>
        <Button>Confirm</Button>
        <Button>Dismiss</Button>
      </div>
    </div>
  );
};
