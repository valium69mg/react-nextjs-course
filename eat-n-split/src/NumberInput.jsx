import React from "react";

export default function NumberInput({ name, property, value, setDataPropertyById, currentId }) {
    return (
        <div className="numberInput"> 
            <h2>{name}</h2>
            <input 
                type="text" 
                value={value}
                onChange={(e) => setDataPropertyById(currentId, property, e.target.value)} 
            />
        </div>
    );
}
