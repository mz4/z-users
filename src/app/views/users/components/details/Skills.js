import { Subtitle } from '../../../../library';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.containerSpan}>
      <div className={styles.container}>
        <div className={styles.containerSkill}>
          <div className={styles.skill}>
            <div className={styles.skillName}>
              <Subtitle text="Figma" />
            </div>
            <div className={styles.skillLevel}>
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStar />
            </div>
          </div>
        </div>
        <div className={styles.containerSkill}>
          <div className={styles.skill}>
            <div className={styles.skillName}>
              <Subtitle text="React" />
            </div>
            <div className={styles.skillLevel}>
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStar />
              <IconStar />
            </div>
          </div>
        </div>
        <div className={styles.containerSkill}>
          <div className={styles.skill}>
            <div className={styles.skillName}>
              <Subtitle text="Python" />
            </div>
            <div className={styles.skillLevel}>
              <IconStarFilled className={styles.skillFilled} />
              <IconStarFilled className={styles.skillFilled} />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
