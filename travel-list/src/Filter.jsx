import React from "react";
import { useState } from "react";

export default function Filter() {
    return <section className="filter-section">
        <DropdownFilter/>
        <button className="button"> Clear List </button>
    </section>
}

const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const options = ["Sort by input order", "Sort by name"]

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected || 'Select filter'}
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