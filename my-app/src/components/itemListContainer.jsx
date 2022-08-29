import React from "react";
import ItemCount from "./ItemCount";


export function ItemListContainer () {
    function onAdd(count){
        alert(`Se ha seleccionado ${count} productos`)
    }
    return ( 
        <>
        <ItemCount stock={10} onAdd = {onAdd}/>
        </>

     );
}

