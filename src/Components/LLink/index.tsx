import cn from 'classnames';
import styles from './index.module.scss';

import React from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
}

const LLink = ({ href, className, children }: IProps) => {
  return (
    <Link href={href} className={cn(styles.container, className)}>
      {children}
    </Link>
  );
};

export default LLink;
