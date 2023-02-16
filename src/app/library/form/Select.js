import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Select.module.scss';

export const Select = ({ control, name, errors }) => {
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
            <option value="">Select Role</option>
            <option value="1">Backend</option>
            <option value="2">Frontend</option>
            <option value="3">Quality Analyst</option>
            <option value="4">Product Owner</option>
            <option value="5">UX/UI Designer</option>
            <option value="6">Data Analyst</option>
            <option value="7">DevOps</option>
            <option value="8">Scrum Master</option>
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
