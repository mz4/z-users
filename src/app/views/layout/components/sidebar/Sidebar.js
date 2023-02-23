import { Title, Text } from '../../../../library';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Title text="Menu" />
      <ul className={styles.menu}>
        <li>
          <Link to="/users" className={styles.menuItem}>
            <Text text="Users" />
          </Link>
        </li>
        <li>
          <Link to="/meetings" className={styles.menuItem}>
            <Text text="Meetings" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
