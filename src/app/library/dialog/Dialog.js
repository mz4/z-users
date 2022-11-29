import { Button, Title, Subtitle } from '../index';
import styles from './Dialog.module.scss';

export const Dialog = ({
  textHeader,
  textBody,
  textAction,
  textDismiss,
  handleAction,
  handleDismiss
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title text={textHeader} customClassName={styles.centerText} />
      </div>
      <div className={styles.body}>
        <Subtitle text={textBody} customClassName={styles.centerText} />
      </div>
      <div className={styles.footer}>
        <Button type="quaternary" text={textAction} onClick={handleAction} />
        <Button type="tertiary" text={textDismiss} onClick={handleDismiss} />
      </div>
    </div>
  );
};
