import Items from "./Items"



const ItemsList = ({products}) => { 
  
  return (
    
    <div className='ItemsList row'>
      {products.map((products, indice) => {
        return <Items key={indice} nombre={products.nombre} precio={products.precio} icon={products.icon} stock={products.stock}/>
      })}
    </div>

  )
}




export default ItemsList;
