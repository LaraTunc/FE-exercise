import React from 'react';

const Navbar = ({ handleClick }) => {
	return (
		<div className="navbar">
			<div className="logo">Fülhaus Shop</div>
			<button className="button" onClick={handleClick}>
				CART
			</button>
		</div>
	);
};

export default Navbar;
