import React, { useState } from 'react';

const Dropdown = ({setCount, count}) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = Array.from({ length: 100 }, (_, i) => i + 1);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {count || 'Select number of items'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {options.map(num => (
            <div
              key={num}
              className="dropdown-item"
              onClick={() => {
              setCount(num);
              setIsOpen(false);
              }}
            >
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
