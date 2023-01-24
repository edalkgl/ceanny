import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
  value?: string | ReadonlyArray<string> | number | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
}

const LInput = ({ value, placeholder, disabled, className }: IProps) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(styles.container, className)}
    />
  );
};

export default LInput;
