import Users from "./users/container/Users";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <Users />
    </div>
  );
}
