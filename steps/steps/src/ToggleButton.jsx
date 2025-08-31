import React from "react";
import { VscClose, VscMenu } from "react-icons/vsc";

export default function ToggleButton({ open, onClick }) {
  return (
    <button className="close-button" onClick={onClick}>
      {open ? <VscClose/> : <VscMenu/>}
    </button>
  );
}
