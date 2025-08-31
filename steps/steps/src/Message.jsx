import React from "react";

const messages = [
    "Learn React 📚",
    "Apply for Jobs 💼",
    "Invest your new income 💸"
];


export default function Message({step}) {
    return (<h1 className="message"> {step}.- {messages[step - 1]} </h1>
)
}