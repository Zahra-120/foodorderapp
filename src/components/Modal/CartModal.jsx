import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Header/redux/CartSlice';
import Modal from './Modal';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const incrementQuantity = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        addToCart({
          ...item,
          quantity: -1,
        })
      );
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className='heading'>Cart</h2>
      <ul className="cartList">
        <div className='flex'>
        {cart.map((item) => (
          <React.Fragment key={item.id}>
          <li className="cartItem">
            <h3 className='cartName'>{item.name}</h3>
            <div className="cartControls">
              <button onClick={() => decrementQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
          </li>
            <span className="cartPrice">${(item.price * item.quantity).toFixed(2)}</span>
          <hr className='cartLine' />
          </React.Fragment>
        ))}
        </div>
      </ul>
      <div className="cartSummary">
        <p className='total'>Total Quantity : 
        <span className='value'>{totalQuantity}</span></p>
      </div>
      <div>
        <p className='total'>Total Price :
        <span className='value'>${totalPrice.toFixed(2)}</span></p> 
      </div>
      <div className="cartButtons">
        <button className='modalBtn' onClick={onClose}>Close</button>
        <button className='modalBtn' onClick={() => console.log("Order placed!")}>Order</button>
      </div>
    </Modal>
  );
};

export default CartModal;
