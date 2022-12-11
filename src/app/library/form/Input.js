import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './Input.module.scss';

export const Input = ({
  control,
  defaultValue,
  placeholder,
  name,
  errors,
  disabled,
  dataTestId,
  type = 'text'
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
            type={type}
            value={value}
            onChange={(evt) => {
              return onChange(evt);
            }}
            onBlur={onBlur}
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
