import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Items = () => {
	const items = useSelector((state) => state.itemsReducer.items);

	return (
		<div className="items-wrapper">
			{items && items.map((item) => <Item key={item._id} item={item} />)}
		</div>
	);
};

export default Items;
