import React from "react";

export default function Footer({itemQuantity, checked}) {
    let percentage = 0;
    if (itemQuantity !== 0) {
        percentage = (checked/itemQuantity) * 100
    }
    return <section className="footer">
        <h2> You have {itemQuantity} items in your list. and you already packed {checked} ({percentage})%</h2>
    </section>
}