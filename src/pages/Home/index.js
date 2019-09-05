import React from 'react';
import { Text, Button } from 'react-native';
import propTypes from 'prop-types';

export default function Home({ navigation }) {
  return (
    <>
      <Text>Hello from Home</Text>
      <Button title="Go to cart" onPress={() => navigation.navigate('Cart')} />
    </>
  );
}

Home.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};
