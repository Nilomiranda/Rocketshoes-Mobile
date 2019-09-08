export default function Cart(state = { items: [], amount: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const foundItem = state.items.find((item) => item.id === action.product.id);
      if (foundItem) {
        /**
         * if the item is already added, we won't add it again
         */
        return state;
      }
      return { amount: state.amount + 1, items: [...state.items, action.product] };
    }
    case 'REMOVE_FROM_CART': {
      const productIndex = state.items.findIndex((item) => item.id === action.productId);
      const newAmount = state.amount === 0 ? state.amount : state.amount - 1;
      state.items.splice(productIndex, 1);
      return { amount: newAmount, items: [...state.items] };
    }
    default:
      return state;
  }
}
