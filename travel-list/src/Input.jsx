import React from "react";
import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

export default function Input() {
    return <section className="input">
        <h2> What do you need for your trip? 😍 </h2>
        <Dropdown/>
        <input className="input-item" type="text" name="trip-item" placeholder="Item..."/>
        <button className="button"> Add </button>
    </section>
}

