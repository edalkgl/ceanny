import styles from './index.module.scss';

import {
  LButton,
  LCard,
  LDetails,
  LFooter,
  LHeader,
  LHeadline,
  LImage
} from '~/Components';
import { processMock, questionMock, servicesMock } from '~/Mocks/homeMock';
import AppLayout from '~/Layouts/appLayout';
import { Key } from 'react';

const HomePage = () => {
  return (
    <AppLayout>
      <LHeader />
      <main>
        <section className={styles.headlineSection}>
          <div className="container">
            <div className="row">
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <h1 className={styles.title}>
                    Software services customized for personal portfolio
                  </h1>
                  <h2 className={styles.text}>
                    Lets design Ceanny of distinguished modern software
                    together.
                  </h2>
                  <div className={styles.btnSide}>
                    <LButton className={styles.btn}>Get Started</LButton>
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.clientSide}>
                    <span className={styles.number}>12k</span>
                    <span className={styles.text}>Share</span>
                  </div>
                  <div className={styles.textSide}>
                    Bring your ideas to life
                  </div>
                  <div className={styles.marketSide}>
                    <span className={styles.number}>60%</span>
                    <span className={styles.text}>Pay</span>
                  </div>
                  <LImage
                    src={'https://i.hizliresim.com/b3paclu.jpeg'}
                    alt={'test'}
                    width={350}
                    height={350}
                    className={styles.image}
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.processSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LHeadline
                  title={'Follow-up of procedures'}
                  desc={'Monitoring of software and data processes.'}
                  className={styles.headline}
                />
                <div className={styles.processList}>
                  {processMock?.map((item, index: Key) => (
                    <div className={styles.item} key={index}>
                      <div
                        className={styles.circle}
                        style={{ background: item?.color }}>
                        {item?.icon}
                      </div>
                      <div className={styles.title}>{item?.title}</div>
                      <div className={styles.text}>{item?.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.storySection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.wrapper}>
                  <div className={styles.imageSide}>
                    <LImage
                      src={'https://i.hizliresim.com/b3paclu.jpeg'}
                      alt={'test'}
                      width={300}
                      height={350}
                      className={styles.image}
                      unoptimized
                      priority
                    />
                  </div>

                  <div className={styles.contentSide}>
                    <h1 className={styles.title}>Feature Design</h1>
                    <p className={styles.text}>
                      The improvements made in the webmaster process have
                      contributed to our lives with the new adventures they have
                      brought.
                    </p>
                    <LButton className={styles.btn}>Explorer</LButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.servicesSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LHeadline
                  title={'Consulting Services'}
                  desc={'Data and software development preparation services.'}
                  className={styles.headline}
                />
                <div className={styles.serviceList}>
                  {servicesMock?.map((item, index: Key) => (
                    <LCard
                      title={item?.title}
                      text={item?.text}
                      color={item?.color}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.questionSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LHeadline
                  title={'Frequently Asked Questions'}
                  desc={'If you have any further questions please contact us.'}
                  type={'type1'}
                />
                <div className={styles.questionList}>
                  {questionMock?.map((item, index: Key) => (
                    <LDetails
                      open={item?.open}
                      title={item?.title}
                      text={item?.text}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LFooter />
    </AppLayout>
  );
};

export default HomePage;
