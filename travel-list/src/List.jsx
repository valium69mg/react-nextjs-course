import React from "react";

const items = [
  { id: 1, name: "toothpaste", checked: true, quantity: 2 },
  { id: 2, name: "shampoo", checked: false, quantity: 1 },
  { id: 3, name: "soap", checked: true, quantity: 3 },
  { id: 4, name: "conditioner", checked: false, quantity: 1 },
  { id: 5, name: "mouthwash", checked: true, quantity: 1 },
  { id: 6, name: "razor", checked: false, quantity: 4 },
  { id: 7, name: "deodorant", checked: true, quantity: 2 },
  { id: 8, name: "lotion", checked: false, quantity: 1 },
  { id: 9, name: "face wash", checked: true, quantity: 2 },
  { id: 10, name: "hand sanitizer", checked: false, quantity: 3 },
  { id: 11, name: "cotton swabs", checked: true, quantity: 1 },
  { id: 12, name: "tissue box", checked: false, quantity: 2 }
];

export default function List() {
  return (
    <section className="item-section">
      <ul className="items">
        {items.map(item => (
          <li key={item.id}>
            <ListItem name={item.name} checked={item.checked} quantity={item.quantity}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ListItem({ name, checked, quantity }) {
  return (
    <div className="item">
        <input className="brown-select" type="checkbox" defaultChecked={checked} />
        <p>{quantity} {name} </p>
        <button className="item-delete"> x </button>
    </div>
  );
}
