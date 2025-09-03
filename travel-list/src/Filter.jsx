import React from "react";
import { useState } from "react";

export default function Filter({ sortOption, setSortOption }) {
    return <section className="filter-section">
        <DropdownFilter selected={sortOption} setSelected={setSortOption}/>
        <button className="button"> Clear List </button>
    </section>
}

const DropdownFilter = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Sort by input order", "Sort by name"];

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
          {options.map(option => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
