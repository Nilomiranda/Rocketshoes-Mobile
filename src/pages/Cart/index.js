/* eslint-disable quote-props */
import React from 'react';

import CartItem from '../../Components/CartItem';

import { Container } from '../../Components/Container';
import Header from '../../Components/Header';
import {
  CardList,
  Footer,
  Total,
  TotalLabel,
  PurchaseButton,
  CartTotal,
  ButtonLabel,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <CardList>
        <CartItem />
        <CartItem />
        <CartItem />
        <Footer>
          <Total>
            <TotalLabel>Total</TotalLabel>
            <CartTotal>$1619,10</CartTotal>
          </Total>
          <PurchaseButton>
            <ButtonLabel>Place Order</ButtonLabel>
          </PurchaseButton>
        </Footer>
      </CardList>
    </Container>
  );
}

Cart.navigationOptions = {
  headerTitle: <Header />,
  headerLeft: null,
};
