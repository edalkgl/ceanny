import cn from 'classnames';
import styles from './index.module.scss';

import LButton from '../LButton';
import IconArrowNarrowRight from '~/Assets/IconArrowNarrowRight';

interface IProps {
  title: string;
  text: string;
  color?: string | undefined;
  className?: string | undefined;
}

const LCard = ({ title, text, className, color }: IProps) => {
  return (
    <section
      className={cn(styles.container, className)}
      style={{ background: color }}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <LButton className={styles.btn}>
        Get Started
        <IconArrowNarrowRight
          className={styles.arrowIcon}
          width={20}
          height={18}
          strokeWidth={1.5}
        />
      </LButton>
    </section>
  );
};

export default LCard;
