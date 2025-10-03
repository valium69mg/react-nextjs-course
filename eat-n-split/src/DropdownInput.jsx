import React from "react";

export default function DropdownInput({ options, value, onChange }) {
    return (
        <div className="dropdownInput">
            <label htmlFor="payer">🤑 Who is paying?</label>
            <select id="payer" name="payer" value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((o, index) => (
                    <option key={index} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}
