/* eslint-disable quote-props */
import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from '../../Components/Container';
import Header from '../../Components/Header';

export default function Cart() {
  return (
    <Container>
      <Text>Hello from cart</Text>
    </Container>
  );
}

Cart.navigationOptions = {
  headerTitle: <Header />,
  headerLeft: null,
  // prettier-ignore
};
