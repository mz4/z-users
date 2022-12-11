import { Button } from '../../../../library';
import styles from './Header.module.scss';

const Header = ({ setTheme, handleLogout }) => {
  return (
    <div className={styles.header}>
      <Button
        actionButton={handleLogout}
        text={'Logout'}
        type="primary"
        dataTestId="btnLogout"
      />
      <Button
        actionButton={setTheme}
        text={'Toggle Theme'}
        type="primary"
        dataTestId="btnTheme"
      />
    </div>
  );
};

export default Header;
