import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/actions';
import capitalizeFirstLetter from '../utils/function';

const Item = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<div className="item-wrapper">
			<img className="item-img" src={item.imageURLs[0]} alt={item.itemName} />
			<div className="item-details">
				<div className="description">
					<div className="item-name">
						{capitalizeFirstLetter(item.itemName)}
					</div>
					<div className="item-brand">{item.vendorName.toUpperCase()}</div>
				</div>
				<div className="subdescription">
					<button
						className="add-to-cart-button"
						onClick={() => dispatch(addItem(item))}
					>
						+ Add to Cart
					</button>
					<p className="item-price">{item.tradePrice}$</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
