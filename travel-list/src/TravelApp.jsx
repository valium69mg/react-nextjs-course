import React, { useEffect, useState } from "react";
import Header from './Header';
import Input from './Input';
import List from './List';
import Filter from './Filter';
import Footer from './Footer';

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

export default function TravelApp() {

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [count, setCount] = useState(0);
    const [sortOption, setSortOption] = useState("Sort by input order");

    const checkedCount = items.filter(item => item.checked).length;

    useEffect(() => {console.log(items)});

    function addItems() {
      if (count === 0 || itemName === '') {
        return;
      }
      let item = {
        id: Date.now().toLocaleString(),
        name: itemName,
        quantity: count,
        checked: false
      }

      setItems([item, ...items]);
      setCount(0);
      setItemName('');
    }

    function deleteItem(id) {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }

    function checkItem(id) {
      const updatedItems = items.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      setItems(updatedItems);
    }

    let sortedItems = [...items];
    if (sortOption === "Sort by name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }


    return <div className="App">
        <Header/>
        <Input itemName={itemName} count={count} setCount={setCount} setItemName={setItemName} addItems={addItems}/>
        <List items={sortedItems} deleteItem={deleteItem} checkItem={checkItem}/>
        <Filter sortOption={sortOption} setSortOption={setSortOption} />
        <Footer itemQuantity={items.length} checked={checkedCount}/>  
      </div>
}