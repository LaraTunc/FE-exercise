import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
	const cartItems = useSelector((state) => state.cartReducer);
	let sumCart = 0;
	cartItems.forEach((item) => (sumCart += item.tradePrice));

	return (
		<div className="cart-wrapper">
			<div className="cart-items-wrapper">
				{cartItems &&
					cartItems.map((cartItem) => (
						<CartItem key={cartItem._id} cartItem={cartItem} />
					))}
			</div>
			<div className="cart-total">
				<div>Total:</div>
				<div>${sumCart}</div>
			</div>
			<button className="button wide">CHECKOUT</button>
		</div>
	);
};

export default Cart;
