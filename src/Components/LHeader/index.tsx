import styles from './index.module.scss';

import LButton from '../LButton';
import LLink from '../LLink';
import { Base } from '~/Constants/base';

const LHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoSide}>
          <span className={styles.logoText}>{Base.LogoName}</span>
        </div>
        <div className={styles.menuSide}>
          <LLink href={''} className={styles.item}>
            Product
          </LLink>
          <LLink href={''} className={styles.item}>
            Solutions
          </LLink>
          <LLink href={''} className={styles.item}>
            Resources
          </LLink>
          <LLink href={''} className={styles.item}>
            Pricing
          </LLink>
        </div>
        <LButton className={styles.subscribeSide}>Sign Up</LButton>
      </div>
    </header>
  );
};

export default LHeader;
