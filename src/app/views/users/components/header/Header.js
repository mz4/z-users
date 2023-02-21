import { Button } from '../../../../library/index';
import Search from '../search/Search';
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
      <Search />
    </div>
  );
};
export default Header;
