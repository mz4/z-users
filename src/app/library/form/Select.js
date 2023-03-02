import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Select.module.scss';

export const Select = ({ control, name, errors, options }) => {
  return (
    <div className={styles.selectContainer}>
      <Controller
        name={name}
        control={control}
        defaultValue={''}
        render={({ field: { onChange, onBlur } }) => (
          <select
            onChange={(evt) => {
              return onChange(evt);
            }}
            onBlur={onBlur}
            className={styles.select}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              );
            })}
          </select>
        )}
      />
      {errors[name] ? (
        <div className={styles.error}>{errors[name].message}</div>
      ) : (
        <div className={styles.emptyError} />
      )}
    </div>
  );
};
