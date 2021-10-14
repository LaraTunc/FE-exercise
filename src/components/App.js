import '../css/App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	requestItems,
	receiveItems,
	receiveItemsError,
} from '../utils/actions';
import Navbar from './Navbar';
import Landing from './Landing';
import Items from './Items';
import Cart from './Cart';
import Spinner from './Spinner';

const App = () => {
	const dispatch = useDispatch();
	const { status, error } = useSelector((state) => state.itemsReducer);
	const [openCart, setOpenCart] = useState(false);

	useEffect(() => {
		dispatch(requestItems());
		fetch('https://main-api.fulhaus.com/fulhaus-tech-test/get-products')
			.then((res) => res.json())
			.then((json) => {
				dispatch(receiveItems(json));
			})
			.catch((err) => dispatch(receiveItemsError(err)));
	}, []);

	const handleClick = () => setOpenCart(!openCart);

	return (
		<div className="App">
			<Navbar handleClick={handleClick} />
			{openCart && <Cart />}
			<div className="main">
				<Landing />
				{status === 'loading' ? (
					<div style={{ textAlign: 'center' }}>
						<Spinner />
					</div>
				) : error ? (
					<div style={{ textAlign: 'center' }}>500- Bad request</div>
				) : (
					<Items />
				)}
			</div>
		</div>
	);
};

export default App;
