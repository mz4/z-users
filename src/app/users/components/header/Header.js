import { Button } from '../../../library/index';

import styles from './Header.module.scss';

const Header = ({ sortUsers, toggleNewUser }) => {
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
    </div>
  );
};
export default Header;
