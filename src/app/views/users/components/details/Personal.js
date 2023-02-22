import { Subtitle, Text, Item } from '../../../../library/index';
import styles from './Personal.module.scss';

const Personal = ({ user }) => {
  const { first_name, last_name, role } = user;
  const name = `${first_name} ${last_name}`;
  return (
    <div className={styles.detailsContainer}>
      <Item>
        <Subtitle text="Name" />
        <Text text={name} />
      </Item>
      <Item>
        <Subtitle text="Employee ID" />
        <Text text="2000839625936" />
      </Item>
      <Item>
        <Subtitle text="Role" />
        <Text text={role} />
      </Item>
      <Item>
        <Subtitle text="Length of Service" />
        <Text text="1 year 3 months" />
      </Item>
      <div className={styles.description}>
        <Item>
          <Subtitle text="Description" />
          <Text text="Developer, experienced in data-driven enterprise applications" />
        </Item>
      </div>
    </div>
  );
};

export default Personal;
