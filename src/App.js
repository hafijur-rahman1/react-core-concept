import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Riaz','ferdus', 'Manna', 'Salman','Bappy','Shuvo1']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$55.22'},
    {name:'PDF Reader', price:'$20.33'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">
        <Product  product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name} {product.price}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }

        </ul>
        <Counter></Counter>
         <Users></Users>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1); 
    // const newCount = count + 1;
    // setCount(newCount);

  
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
   

}


function Product(props){
  const productStyle={
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    hight:'210px',
    width:'210px',
    margin:'5px',
    color:'red',
    

  }
   const {name, price} = props.product;
   console.log(name, price);
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}





export default App;
