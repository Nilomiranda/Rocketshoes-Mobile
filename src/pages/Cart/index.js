import React from 'react';
import { Text } from 'react-native';

import { Container } from '../../Components/Container';

export default function Cart() {
  return (
    <Container>
      <Text>Hello from cart</Text>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'ROCKETSHOES',
};
