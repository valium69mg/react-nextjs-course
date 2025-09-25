import React, { Component, useState } from 'react';
import './App.css';
import Accordion from './Accordion';

let initialData = [
  {
    id:1,
    number:"01",
    title: "Lorem Ipsum",
    body:"Vestibulum blandit metus quis sem pretium, eget auctor eros pellentesque. In hac habitasse platea dictumst. Cras mattis, metus sed tristique mattis, ex enim mollis leo, ut egestas neque arcu vitae metus. Phasellus pellentesque augue lacus, eu convallis nulla egestas non. Proin condimentum pharetra nibh id lobortis. Donec vulputate eu nulla eu fringilla. Fusce hendrerit quam pretium purus fermentum gravida. Duis vel est dui.",
    hidden: true
  },
  {
    id:2,
    number:"02",
    title: "Lorem Ipsum",
    body:"Vestibulum blandit metus quis sem pretium, eget auctor eros pellentesque. In hac habitasse platea dictumst. Cras mattis, metus sed tristique mattis, ex enim mollis leo, ut egestas neque arcu vitae metus. Phasellus pellentesque augue lacus, eu convallis nulla egestas non. Proin condimentum pharetra nibh id lobortis. Donec vulputate eu nulla eu fringilla. Fusce hendrerit quam pretium purus fermentum gravida. Duis vel est dui.",
    hidden: true
  },
  {
    id:3,
    number:"03",
    title: "Lorem Ipsum",
    body:"Vestibulum blandit metus quis sem pretium, eget auctor eros pellentesque. In hac habitasse platea dictumst. Cras mattis, metus sed tristique mattis, ex enim mollis leo, ut egestas neque arcu vitae metus. Phasellus pellentesque augue lacus, eu convallis nulla egestas non. Proin condimentum pharetra nibh id lobortis. Donec vulputate eu nulla eu fringilla. Fusce hendrerit quam pretium purus fermentum gravida. Duis vel est dui.",
    hidden: true
  }
]

class App extends Component {
  render() {
    return (
      <AccordionList/>
    );
  }
}

function AccordionList() {
  const [data, setData] = useState(initialData);

    function expand(id) {
      const updatedData = data.map(item =>
        item.id === id
          ? { ...item, hidden: false }
          : { ...item, hidden: true }
      );
      setData(updatedData);
    }

    function collapse(id) {
      const updatedData = data.map(item =>
        item.id === id
          ? { ...item, hidden: true }
          : item
      );
      setData(updatedData);
    }


    return (
      <div className="main-container">
        {
          data.map((item) => (
          <Accordion id={item.id} number={item.number} title={item.title} body={item.body} hidden={item.hidden} expand={expand} collapse={collapse}/>
          ))
        }
      </div>
    );
}

export default App;
