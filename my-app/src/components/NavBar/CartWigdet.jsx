import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWigdet() {
    return ( 
        <div className="CarWigdet" style={{fontSize: '2em', color: 'white'}}>
        <FontAwesomeIcon icon={faCartShopping} />
        </div>
     );
}

export default CartWigdet;
