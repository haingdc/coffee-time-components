import clsx from 'clsx/lite';
import React from 'react';
import './list.css';

export type UlListProps = React.DetailsHTMLAttributes<HTMLUListElement> & React.PropsWithChildren;

const UnOrderList: React.FC<UlListProps> = ({ className,...rest }) => {
  return (
    <ul {...rest} className={clsx('un-order-list', className)} />
  );
};

export default UnOrderList;