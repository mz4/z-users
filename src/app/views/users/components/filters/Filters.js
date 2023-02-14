import React, { useState } from 'react';
import { Title, Label } from '../../../../library/index';
import classNames from 'classnames';
import styles from './Filters.module.scss';

const Filters = ({ handleFilterAction }) => {
  const [filter, setFilter] = useState({ favorite: false });
  const handleChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      favorite: e.target.checked,
    }));
    handleFilterAction({ ...filter, favorite: e.target.checked });
  };
  return (
    <div className={styles.container}>
      <Title text="Filters" />
      <div className={classNames(styles.filters, styles.content)}>
        <input
          id="favorite"
          name="example_1"
          type="checkbox"
          onChange={handleChange}
          checked={filter.favorite}
        />
        <Label text={'Favorites'} htmlFor="favorite" />
      </div>
    </div>
  );
};

export default Filters;
