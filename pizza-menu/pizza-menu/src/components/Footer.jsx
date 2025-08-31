import React from "react";
import { useState, useEffect } from "react";

export default function Footer() {

    const [isOpen, setIsOpen] = useState(true);
    const openHour = 12;
    const closeHour = 22; 

    useEffect(() => {
        const hour = new Date().getHours();
        const isOpenHours = hour >= openHour && hour <= closeHour;
        setIsOpen(isOpenHours); 
    }, []);


    return <footer className="footer"> 
                { isOpen ? (<Order openHour={openHour} />):(<Closed openHour={openHour} closeHour={closeHour}/>)}
            </footer>
}

const Order = (props) => {
    return <React.Fragment>
                        <p> We are currently open until {props.openHour}:00, come visit us or order online! </p>
                        <button className="orderNow"> Order Now! </button>
                    </React.Fragment>
}

const Closed = (props) => {
    return <React.Fragment>
                        <p> Sorry we are currently closed, We are happy to welcome you between
                            {props.openHour}:00 and {props.closeHour}:00 </p>
                    </React.Fragment>
}