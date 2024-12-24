import React from 'react'
import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([{
    id: 0,
    name: "apple",
  },{
    id: 1,
    name: "milk",
  }])

  const [newItem, setNewItem] = useState("");

  const handleAddToCart = useCallback(() => {
    if(newItem.trim()){
      setItems((prevItem) => [
        ...prevItem, {id: prevItem.length, name: newItem}
      ]);
      setNewItem("")
    }
  }, [newItem]);

  const handledelete = useCallback((id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));

  }, []);

  const gotopay = useCallback(() => {
    setItems([]);

  }, []);

  return (
    <div className='parent'>
      <div className='child_1'>
        <input type='text' placeholder='enter the item' value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}></input>
        <button onClick={handleAddToCart}>Add to Cart</button>

      </div>

      <div className='child_2'>
        {items.map(item => <AddItem key = {item.id} name = {item.name} id = {item.id} onRemove = {handledelete}></AddItem>)}

      </div>

      <div className='child_3'>
        <button onClick={gotopay}>Procced to Pay</button>

      </div>
      
    </div>
  )
}

const AddItem = React.memo(({id, name, onRemove}) =>{
  return(
    <div>
      <h1>{name}</h1>
      <button onClick={() => onRemove(id)}>Remove from cart</button>
    </div>
  );

});

export default App
