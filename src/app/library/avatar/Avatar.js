import styles from './Avatar.module.scss';

export const Avatar = ({ alt, src }) => {
  return <img className={styles.imageProfile} alt={alt} key={src} src={src} />;
};
