import { Subtitle, Text, Item } from '../../../../library/index';
import styles from './Personal.module.scss';

const Personal = ({ user }) => {
  const { first_name } = user;
  return (
    <div className={styles.detailsContainer}>
      <Item>
        <Subtitle text="Name" />
        <Text text={first_name} />
      </Item>
      <Item>
        <Subtitle text="Request No." />
        <Text text="2000839625936" />
      </Item>
      <Item>
        <Subtitle text="Connection Name" />
        <Text text="Angela Valdez" />
      </Item>
      <Item>
        <Subtitle text="Date Request" />
        <Text text="23/10/2021" />
      </Item>
      <div className={styles.description}>
        <Item>
          <Subtitle text="Description" />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ac ante varius, vestibulum urna id, tincidunt enim.
                  Vestibulum maximus risus dolor, dapibus finibus velit euismod
                  eget."
          />
        </Item>
      </div>
    </div>
  );
};

export default Personal;
