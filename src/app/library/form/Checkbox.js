import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Checkbox.module.scss';

export const Checkbox = ({ control, name, errors, disabled, dataTestId }) => {
  return (
    <div className={styles.inputContainer}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <input
            checked={value}
            disabled={disabled}
            type="checkbox"
            onChange={(evt) => {
              return onChange(evt);
            }}
            data-testid={dataTestId}
          />
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
