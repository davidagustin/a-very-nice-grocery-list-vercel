'use client';

import React, { RefObject } from 'react';
import ListItems from './ListItems';

interface ListProps {
  groceryItems: string[];
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  formListRef: RefObject<HTMLDivElement | null>;
}

const List = ({ groceryItems, handleClick, formListRef }: ListProps) => {
  return (
    <div>
      <div className="list" id="formList" ref={formListRef}>
        <div className="listTitle">Grocery Items:</div>
        <ListItems groceryItems={groceryItems} handleClick={handleClick} />
      </div>
      <p className="smallText">Note: Click on item to delete.</p>
    </div>
  );
};

export default List; 