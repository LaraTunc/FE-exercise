import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/actions';
import capitalizeFirstLetter from '../utils/function';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	return (
		<div className="cart-item-wrapper">
			<div className="cart-item-img">
				<img
					src={cartItem.imageURLs[0]}
					alt={cartItem.itemName}
					className="item-img"
				/>
			</div>
			<div className="cart-item-details">
				<div>
					<p>{capitalizeFirstLetter(cartItem.itemName)}</p>
					<p className="smaller">{cartItem.vendorName.toUpperCase()}</p>
				</div>
				<div>${cartItem.tradePrice}</div>
			</div>
			<button
				className="cart-item-remove"
				onClick={() => dispatch(removeItem(cartItem))}
			>
				X
			</button>
		</div>
	);
};

export default CartItem;
