import { useState } from 'react';
import logo1 from './assets/logo1.png';
import shoe1 from './assets/shoe1.jpeg';
import shoe2 from './assets/shoe2.jpeg';
import shoe3 from './assets/shoe3.jpeg';
import shoe4 from './assets/shoe4.jpeg';
import shoe5 from './assets/shoe5.jpeg';
import shoe6 from './assets/shoe6.jpeg';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const shoes = [
    { id: 1, name: "Urban Runner Sneakers", price: 85, image: shoe1 },
    { id: 2, name: "Trailblazer Hiking Boots", price: 110, image: shoe2 },
    { id: 3, name: "Sporty High-Top Kicks", price: 95, image: shoe3 },
    { id: 4, name: "Classic Leather Loafers", price: 120, image: shoe4 },
    { id: 5, name: "Shoe 5", price: 150, image: shoe5 },
    { id: 6, name: "Elite Performance Trainers", price: 130, image: shoe6 },
  ];

  const add_to_cart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const remove_from_cart = (shoeId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === shoeId);
      if (existingItem) {
        return prevCart
          .map(item =>
            item.id === shoeId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0);
      } else {
        return prevCart;
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav className='nav1'>
        <img id='logo' src={logo1} alt="Logo" />
        <ul className='nav2'>
          <li className='ele1'>Home</li>
          <li className='ele1'>About Us</li>
          <li className='ele1'>Contact Us</li>
        </ul>
      </nav>
      <div id='main_page'>
        <div id='left_sec'>
          {shoes.map(shoe => (
            <div className="shoeBox" key={shoe.id}>
              <img className="shoe-img" src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <div className="priceCart">
                <p>💲{shoe.price}</p>
                <button className="Addtocart" onClick={() => add_to_cart(shoe)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="rightdiv">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img className="cart-img" src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => remove_from_cart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => add_to_cart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
