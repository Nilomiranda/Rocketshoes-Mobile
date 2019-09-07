import React from 'react';
import { Text, Button } from 'react-native';
import propTypes from 'prop-types';

import { Container } from '../../Components/Container';
import Header from '../../Components/Header';

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Hello from Home</Text>
      <Button title="Go to cart" onPress={() => navigation.navigate('Cart')} />
    </Container>
  );
}

Home.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};

Home.navigationOptions = {
  headerTitle: <Header />,
};
