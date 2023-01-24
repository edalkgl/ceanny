import styles from './index.module.scss';

import LButton from '../LButton';
import LInput from '../LInput';
import { Base } from '~/Constants/base';

const LFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.wrapper}>
              <div className={styles.logoSide}>{Base.LogoName}</div>
              <div className={styles.menuSide}>
                <div className={styles.head}>Menu</div>
                <div className={styles.item}>Services</div>
                <div className={styles.item}>Works</div>
                <div className={styles.item}>About</div>
                <div className={styles.item}>Contact</div>
              </div>
              <div className={styles.menuSide}>
                <div className={styles.head}>Social</div>
                <div className={styles.item}>Linkedin</div>
                <div className={styles.item}>Twitter</div>
                <div className={styles.item}>Instagram</div>
                <div className={styles.item}>Facebook</div>
              </div>
              <div className={styles.subscribeSide}>
                <div className={styles.head}>Follow us!</div>
                <div className={styles.inputWrapper}>
                  <LInput
                    placeholder={'Your E-mail'}
                    className={styles.input}
                  />
                  <LButton className={styles.btn}>Information</LButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LFooter;
