import { Button } from '../../../../library/index';

import styles from './Header.module.scss';

const Header = ({ sortUsers, toggleNewUser }) => {
  return (
    <div className={styles.header}>
      <Button
        actionButton={sortUsers}
        text={'Sort By Name'}
        type="one"
        dataTestId="btnSort"
      />
      <Button
        actionButton={() => toggleNewUser(true)}
        text={'Add new'}
        type="two"
        dataTestId="btnNew"
      />
    </div>
  );
};
export default Header;
