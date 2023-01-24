import cn from 'classnames';
import styles from './index.module.scss';

import IconX from '~/Assets/IconX';

interface IProps {
  title: string;
  text: string;
  open?: boolean;
  className?: string | undefined;
}

const LDetails = ({ title, text, open, className }: IProps) => {
  return (
    <details className={cn(styles.container, className)} open={open}>
      <summary className={styles.summary}>
        <div className={styles.title}> {title}</div>
        <IconX strokeWidth={2} className={styles.icon} />
      </summary>
      <div className={styles.text}>{text}</div>
    </details>
  );
};

export default LDetails;
