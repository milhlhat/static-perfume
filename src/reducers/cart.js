import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CHANGE_SHIPPING } from '../constants/action-types';
import { findProductInCartByIdAndSize } from '../utils';
// import { findProductByIdAndSize, findIndex } from '../utils';
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
			const findProductCart = findProductInCartByIdAndSize(state.cart, productId, productSize);
			if (findProductCart) {
				let cartTemp = [...state.cart];
				for (let i = 0; i < cartTemp.length; i++) {
					let item = cartTemp[i];
					if (Number(item.id) === Number(findProductCart.id) && Number(item.size) === Number(findProductCart.size)) {
						cartTemp[i].qty += parseInt(action.qty);
					}
				}

				return { ...state, cart: cartTemp };
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
			let cartTemp = [...state.cart].filter((item) => item.id !== action.id || item.size !== action.size);
			return {
				...state,
				cart: cartTemp,
			};

		case CHANGE_QTY:
			const qty =Math.abs(action.qty);
			const cart = state.cart.reduce((cartAcc, product) => {
				if (product.id === action.productId && product.size == action.size) {
					cartAcc.push({ ...product, qty: qty, size: action.size });
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
