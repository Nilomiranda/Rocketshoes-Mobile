export default function Cart(state = { items: [], amount: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const foundItem = state.items.find((item) => item.id === action.product.id);
      if (foundItem) {
        return state;
      }
      return { amount: state.amount + 1, items: [...state.items, action.product] };
    }
    default:
      return state;
  }
}
