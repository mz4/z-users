import classnames from 'classnames';
import {
  Bar,
  BarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts';
import { dataA, dataB } from '../../../data';
import { Avatar, Subtitle, Text, Title, Item } from '../../../library/index';
import Personal from './Personal';
import Orders from './Orders';
import Charts from './Charts';
import styles from './Details.module.scss';

const Details = ({ user }) => {
  const { first_name, avatar } = user;
  return (
    <div className={styles.bodyContainer}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={styles.box1}>
        <Avatar alt={first_name} src={avatar} classnames={styles.box1} />
      </div>
      <div className={styles.box2}>
        <Personal user={user} />
      </div>
      <Orders />
      <Charts />
    </div>
  );
};

export default Details;
