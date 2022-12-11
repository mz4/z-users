import { Title, Label } from '../../../../library';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Title text="Menu" />
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <Link to="/users">
            <Label text="Users" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
