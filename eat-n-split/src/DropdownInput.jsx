import React from "react";

export default function DropdownInput({options}) {
    return (
        <div className="dropdownInput">
            <label for="payer"> 🤑 Who is paying? </label>
                <select id="payer" name="payer">
                {options.map((o, index) => (
                    <option key={index} value={o}>
                        {o}
                    </option>
                ))}

            </select>
        </div>
    )
}