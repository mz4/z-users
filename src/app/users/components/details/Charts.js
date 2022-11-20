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
import { Subtitle } from '../../../library/index';
import styles from './Charts.module.scss';

const Charts = () => {
  return (
    <>
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
    </>
  );
};

export default Charts;
