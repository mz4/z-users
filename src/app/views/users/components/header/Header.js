import { Button } from '../../../../library/index';

import styles from './Header.module.scss';

const Header = ({ sortUsers, toggleNewUser, setTheme }) => {
  return (
    <div className={styles.header}>
      <Button
        actionButton={sortUsers}
        text={'Sort By Name'}
        type="primary"
        dataTestId="btnSort"
      />
      <Button
        actionButton={() => toggleNewUser(true)}
        text={'Add new'}
        type="secondary"
        dataTestId="btnNew"
      />
      <Button
        actionButton={setTheme}
        text={'Toggle Theme'}
        type="primary"
        dataTestId="btnSort"
      />
    </div>
  );
};
export default Header;
