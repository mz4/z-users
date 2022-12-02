import React, { useState } from 'react';
import { Title } from '../../../library/index';
import styles from './Filters.module.scss';

const Filters = ({ handleFilterAction }) => {
  const [filter, setFilter] = useState({ favorite: false });
  const handleChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      favorite: e.target.checked
    }));
    handleFilterAction({ ...filter, favorite: e.target.checked });
  };
  return (
    <div className={styles.filterContainer}>
      <Title text="Filters" />
      <label>
        <input
          name="example_1"
          type="checkbox"
          onChange={handleChange}
          checked={filter.favorite}
        />
        Starred
      </label>
    </div>
  );
};

export default Filters;
