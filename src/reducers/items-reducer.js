const initialState = {
	status: 'idle',
	items: null,
	error: null,
};

export default function itemsReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'REQUEST_ITEMS': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'RECEIVE_ITEMS': {
			return {
				...state,
				items: payload,
				status: 'idle',
			};
		}
		case 'RECEIVE_ITEMS_ERROR': {
			return {
				...state,
				status: 'error',
				error: payload,
			};
		}
		default: {
			return state;
		}
	}
}
