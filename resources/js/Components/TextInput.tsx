import classNames from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextInputProps } from '@/Components/ComponentTypes';

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  props,
  ref
) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm',
        props.className
      )}
    />
  );
};

export default forwardRef(TextInput);
