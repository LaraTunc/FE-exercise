const initialState = [];

export default function cartReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'ADD_ITEM': {
			return [...state, payload];
		}
		case 'REMOVE_ITEM': {
			const index = state.indexOf(payload);
			const newArray = [...state];
			if (index > -1) {
				newArray.splice(index, 1);
			}
			return newArray;
		}
		case 'CLEAR_ITEMS': {
			return [];
		}
		default: {
			return state;
		}
	}
}
