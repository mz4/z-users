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
import styles from './Details.module.scss';

const Details = ({ user }) => {
  const { first_name, avatar } = user;
  return (
    <div className={styles.bodyContainer}>
      <Title text="User Details" customClassName={styles.title} />
      <div className={classnames(styles.box1, styles.avatar)}>
        <Avatar alt={first_name} src={avatar} />
      </div>
      <div className={classnames(styles.box2, styles.details)}>
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
      </div>
      <div className={classnames(styles.box, styles.box3, styles.orders)}>
        <Subtitle text="Total Orders Today" />
        <div className={styles.orderValue}>12.450 $</div>
      </div>
      <div className={classnames(styles.box, styles.box3, styles.orders)}>
        <Subtitle text="Total Clients Today" />
        <div className={styles.orderValue}>25</div>
      </div>
      <div className={classnames(styles.box, styles.box3, styles.orders)}>
        <Subtitle text="Revenue Day Ratio" />
        <div className={styles.orderValue}>25%</div>
      </div>
      <div className={classnames(styles.box4, styles.chart)}>
        <Subtitle text="Chart Area" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={dataA}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={classnames(styles.box4, styles.chart)}>
        <Subtitle text="Chart Billing" />
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataB}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Details;
