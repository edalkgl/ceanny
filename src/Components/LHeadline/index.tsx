import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
  title: string;
  desc: string;
  className?: string | undefined;
  type?: 'type1';
}

const LHeadline = ({ title, desc, type, className }: IProps) => {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.type1]: type === 'type1'
      })}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.desc}>{desc}</h3>
    </div>
  );
};

export default LHeadline;
