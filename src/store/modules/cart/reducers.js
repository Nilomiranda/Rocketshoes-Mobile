export default function Cart(state = { items: [], amount: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { amount: state.amount + 1, items: [...state.items, action.product] };
    default:
      return state;
  }
}
