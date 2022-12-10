import { Title } from '../../../../library';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Title text="Menu" />
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
