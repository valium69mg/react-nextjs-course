import React from "react";
import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

export default function Input({itemName, count, setCount, setItemName, addItems}) {
    return <section className="input">
        <h2> What do you need for your trip? 😍 </h2>
        <Dropdown setCount={setCount} count={count}/>
        <input 
            className="input-item" 
            type="text" name="trip-item" 
            placeholder="Item..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={addItems} className="button"> Add </button>
    </section>
}

