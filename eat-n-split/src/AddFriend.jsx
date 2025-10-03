import React from "react";

export default function AddFriend({ updateNewFriend }) {
  function handleChange(e) {
    const { name, value } = e.target;
    updateNewFriend(name, value);
  }

  return (
    <div className="addFriendContainer">
      <label className="inputContainer">
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label className="inputContainer">
        Image URL:
        <input type="text" name="src" onChange={handleChange} />
      </label>
    </div>
  );
}
