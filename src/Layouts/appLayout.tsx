import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return <div className="bw-layout">{children}</div>;
};

export default AppLayout;
