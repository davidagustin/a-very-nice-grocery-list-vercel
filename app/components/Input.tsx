'use client';

import React from 'react';

interface InputProps {
  inputBarText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Input = ({ inputBarText, handleChange, handleSubmit }: InputProps) => {
  return (
    <div className="inputText">
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputGrocery">
          Add Grocery:
          <br />
          <input
            type="input"
            id="inputGrocery"
            name="inputBarText"
            value={inputBarText}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <input type="button" onClick={handleSubmit} value="Submit" />
        </label>
      </form>
    </div>
  );
};

export default Input; 