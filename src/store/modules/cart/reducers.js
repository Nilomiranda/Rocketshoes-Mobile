export default function Cart(state = { amount: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { amount: state.amount + 1 };
    default:
      return state;
  }
}
