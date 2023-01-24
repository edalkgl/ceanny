import cn from 'classnames';
import styles from './index.module.scss';

import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const LButton = ({ className, children }: IProps) => {
  return (
    <button className={cn(styles.container, className)}>{children}</button>
  );
};

export default LButton;
