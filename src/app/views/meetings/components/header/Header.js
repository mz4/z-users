import { Button } from '../../../../library/index';
import styles from './Header.module.scss';

const Header = ({ toggleNewMeeting }) => {
  return (
    <div className={styles.header}>
      <Button
        actionButton={() => toggleNewMeeting(true)}
        text={'Add new'}
        type="two"
        dataTestId="btnNew"
      />
    </div>
  );
};
export default Header;
