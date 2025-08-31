import React from "react";

export default function CircleStep({ step, active }) {
    return (
        <div className={`circle ${active ? 'active' : ''}`}>
            {step}
        </div>
    );
}
