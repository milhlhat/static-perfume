import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CHANGE_SHIPPING } from '../constants/action-types';
import { findProductByIdAndSize, findIndex } from '../utils';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function cartReducer(
	state = {
		cart: [],
		shipping: 'free',
	},
	action
) {
	switch (action.type) {
		case ADD_TO_CART:
			const productId = action.product.id;
			const productSize = action.size;
			// state.cart =[];
			// if (findIndex(state.cart, (product) => product.id === productId && product.size === productSize) !== -1) {
			if (findProductByIdAndSize(state.cart, productId, productSize) !== -1) {
				const cart = state.cart.reduce((cartAcc, product) => {
					// if (product.size == productSize) {
					// 	cartAcc.push({
					// 		...product,
					// 		qty: parseInt(product.qty) + parseInt(action.qty),
					// 	});
					// } else {
					// 	cartAcc.push({
					// 		id: productId,
					// 		qty:  parseInt(action.qty),
					// 		size: productSize,
					// 	});
					// }
					cartAcc.push({
						...product,
						qty: parseInt(product.qty) + parseInt(action.qty),
					});
					return cartAcc;
				}, []);

				return { ...state, cart };
			}

			return {
				...state,
				cart: [
					...state.cart,
					{
						id: productId,
						qty: parseInt(action.qty),
						size: productSize,
					},
				],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.productId && item.size !== action.size),
			};

		case CHANGE_QTY:
			const cart = state.cart.reduce((cartAcc, product) => {
				if (product.id === action.productId) {
					cartAcc.push({ ...product, qty: action.qty });
				} else {
					cartAcc.push(product);
				}
				return cartAcc;
			}, []);

			return { ...state, cart };

		case CHANGE_SHIPPING:
			return { ...state, shipping: action.shipping };

		default:
			return state;
	}
}

const persistConfig = {
	keyPrefix: 'molla-',
	key: 'cartlist',
	storage,
};

export default persistReducer(persistConfig, cartReducer);
