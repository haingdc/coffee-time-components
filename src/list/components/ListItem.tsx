import React from 'react';
export type ListItemProps = React.DetailsHTMLAttributes<HTMLLIElement> & React.PropsWithChildren;

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <li {...props} />
  );
};

export default ListItem;
