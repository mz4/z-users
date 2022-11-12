import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Input.module.scss';

export const Input = ({
  control,
  defaultValue,
  placeholder,
  name,
  errors,
  disabled
}) => {
  return (
    <div className={styles.inputContainer}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            disabled={disabled}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={(evt) => {
              return onChange(evt);
            }}
            onBlur={onBlur}
          />
        )}
      />
      {errors?.email && (
        <div className={styles.error}>{errors[name].message}</div>
      )}
    </div>
  );
};
