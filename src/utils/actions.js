// ITEM GRID ACTION
export const requestItems = () => ({
	type: 'REQUEST_ITEMS',
});

export const receiveItems = (items) => ({
	type: 'RECEIVE_ITEMS',
	payload: items,
});

export const receiveItemsError = (error) => ({
	type: 'RECEIVE_ERROR_ITEMS',
	payload: error,
});

// CART ACTIONS

export const addItem = (item) => ({
	type: 'ADD_ITEM',
	payload: item,
});

export const removeItem = (item) => ({
	type: 'REMOVE_ITEM',
	payload: item,
});

export const clearItems = () => ({
	type: 'CLEAR_ITEMS',
});
