import classNames from 'classnames';
import React, {FC} from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => (
    <input
        type="checkbox"
        {...props}
        className={classNames(
            'rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800',
            className,
        )}
    />
);

export default Checkbox;
