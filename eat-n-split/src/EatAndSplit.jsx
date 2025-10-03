import React, { useState } from "react";
import ListItem from "./ListItem";
import NumberInput from "./NumberInput";
import DropdownInput from "./DropdownInput";
import AddFriend from "./AddFriend";

function getBalance(friendExpense, myExpense, bill, friendPaying) {
  const totalExpense = friendExpense + myExpense;

  if (totalExpense === 0) {
    return 0;
  }

  return friendPaying ? -myExpense : friendExpense;
}


function getMessage(name, balance) {
    if (balance === 0) {
        return "You and " + name + " are even";
    } 
    if (balance > 0) {
        return name + " owes you " + concatDollarSign(balance)
    }
    return "You owe " + name + " " + concatDollarSign(balance)
}

function concatDollarSign(balance) {
    return "$" + Math.abs(balance).toFixed(2);
}

function whosPaying(data, id) {
  const person = data.find(item => item.id === id);
  return person.friendPaying ? "Friend" : "You";
}

function getPayerNameById(data, id) {
    const person = data.find(item => item.id === id);
    if (!person) return "Unknown";

    return person.name;
}


export default function EatAndSplit() {

    const [currentId, setCurrentId] = useState(1);
    const [data, setData] = useState(
        [{
            id: 1,
            name: "Tanjiro Kamado",
            friendExpense: 0,
            src: "/tanjiro.webp",
            myExpense: 0,
            bill: 0,
            friendPaying: true,
            message: ""
        }]
    );

    const [newFriend, setNewFriend] = useState({
            id: null,
            name: null,
            src: null,
            friendExpense: 0,
            myExpense: 0,
            bill: 0,
            friendPaying: true,
            message: ""
    });

    function handlePayerChange(payer) {
        setData(prevData =>
            prevData.map(item =>
                item.id === currentId
                    ? { ...item, friendPaying: payer == "Friend" }
                    : item
            )
        );
    }

    function setDataPropertyById(id, property, value) {
        setData(prevData =>
            prevData.map(item =>
                item.id === id
                    ? { ...item, [property]: value }
                    : item
            )
        );
    }

    function updateMessageById(id) {
    setData(prevData =>
        prevData.map(item => {
        if (item.id !== id) return item;
        const balance = getBalance(item.friendExpense, item.myExpense, item.bill, item.friendPaying);
        const message = getMessage(item.name, balance);
        return { ...item, message };
        })
    );
    }

    function updateNewFriend(property, value) {
        setNewFriend(
            {
                ...newFriend,
                [property]:value
            }
        )
    }

    function addFriend() {
    const newId = Date.now(); // generate a unique ID

    // Add new friend to the list
    setData(prevData => [
        ...prevData,
        { ...newFriend, id: newId }
    ]);

    // Reset newFriend state
    setNewFriend({
            id: null,
            name: null,
            src: null,
            friendExpense: 0,
            myExpense: 0,
            bill: 0,
            friendPaying: true,
            message: ""
    });
    }


    console.log(currentId);

    return (
        <div className="mainContainer">
            <div  className="listContainer">
                {
                data.map((data, index) => {
                    return (
                    <ListItem key={index} name={data.name} status={data.message} setCurrentId={setCurrentId} currentId={data.id} src={data.src}/>
                    );
                })
                }
                <AddFriend updateNewFriend={updateNewFriend}/>
                <AddFriendButton addFriend={addFriend}/>

            </div>
            <div className="cardContainer">
                <h1> SPLIT A BILL WITH {getPayerNameById(data, currentId)} </h1>
                <NumberInput
                name={"💸 Bill value"}
                property={"bill"}
                value={data.find(item => item.id === currentId).bill}
                setDataPropertyById={setDataPropertyById}
                currentId={currentId}
                />

                <NumberInput
                name={"🧍 Your expense"}
                property={"myExpense"}
                value={data.find(item => item.id === currentId).myExpense}
                setDataPropertyById={setDataPropertyById}
                currentId={currentId}
                />

                <NumberInput
                name={`🧑‍🤝‍🧑 ${data.find(item => item.id === currentId).name}'s expense`}
                property={"friendExpense"}
                value={data.find(item => item.id === currentId).friendExpense}
                setDataPropertyById={setDataPropertyById}
                currentId={currentId}
                />

                <DropdownInput
                    options={["You", "Friend"]}
                    value={whosPaying(data, currentId)}
                    onChange={handlePayerChange}
                />
                <Button action={"Split Bill"} currentId={currentId} updateMessageById={updateMessageById} />
            </div>
        </div>
    )

}

function Button({ action, currentId, updateMessageById }) {
  return (
    <button className="buttonContainer" onClick={() => updateMessageById(currentId)}>
      {action}
    </button>
  );
}

function AddFriendButton({ addFriend }) {
  return (
    <button className="buttonContainer" onClick={() => addFriend()}>
      Add Friend
    </button>
  );
}