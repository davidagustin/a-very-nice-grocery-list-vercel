'use client';

import React, { useState, useRef, useEffect } from 'react';
import Input from './Input';
import List from './List';

const App = () => {
  const [inputBarText, setInputBarText] = useState('');
  const [groceryItems, setGroceryItems] = useState<string[]>([]);
  const formListRef = useRef<HTMLDivElement>(null);

  const invalidInput = () => {
    setInputBarText('');
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const indexOfDelete = groceryItems.indexOf(e.currentTarget.value.trim());
    const newItemList = [...groceryItems];
    newItemList.splice(indexOfDelete, 1);
    setGroceryItems(newItemList);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputBarText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctedText = inputBarText.replace(/\s+/g, ' ').trim();
    if (correctedText) {
      if (groceryItems.includes(correctedText)) {
        invalidInput();
        return;
      }
      const updatedGroceryItems = [...groceryItems, correctedText];
      setGroceryItems(updatedGroceryItems);
      setInputBarText('');
    } else {
      invalidInput();
    }
  };

  useEffect(() => {
    if (formListRef.current) {
      formListRef.current.scrollTop = formListRef.current.scrollHeight;
    }
  }, [groceryItems]);

  return (
    <div className="everything">
      <div className="leftSide">
        <div className="title">
          <h1>A Very Nice Grocery List!</h1>
          <img src="/Logo.png" alt="Grocery List" />
          <Input
            handleChange={handleChange}
            inputBarText={inputBarText}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="rightSide">
        <List groceryItems={groceryItems} handleClick={handleClick} formListRef={formListRef} />
      </div>
    </div>
  );
};

export default App; 