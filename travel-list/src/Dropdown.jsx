import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const options = Array.from({ length: 100 }, (_, i) => i + 1);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected || 'Select number of items'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {options.map(num => (
            <div
              key={num}
              className="dropdown-item"
              onClick={() => handleSelect(num)}
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
