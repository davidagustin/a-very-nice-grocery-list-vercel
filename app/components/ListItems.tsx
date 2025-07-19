'use client';

import React from 'react';

interface ListItemsProps {
  groceryItems: string[];
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

let numericalId = 0;
const uniqueId = () => {
  numericalId += 1;
  return numericalId;
};

const ListItems = ({ groceryItems, handleClick }: ListItemsProps) => {
  const mappedItems = groceryItems.map(item => {
    const id = uniqueId();
    return (
      <li key={id}>
        <input
          type="button"
          className="listItems"
          value={`${item} `}
          name="listItem"
          onClick={handleClick}
        />
      </li>
    );
  });
  return <ul>{mappedItems}</ul>;
};

export default ListItems; 