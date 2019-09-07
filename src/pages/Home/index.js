import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import propTypes from 'prop-types';

import {Container} from '../../Components/Container';
import Header from '../../Components/Header';
export default class Home extends Component {
  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = ({navigation}) => ({
    headerTitle: () => <Header navigate={() => navigation.navigate('Cart')} />,
  });

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <Text>Hello from Home</Text>
        <Button title="Go to cart" onPress={() => navigation.navigate('Cart')} />
      </Container>
    );
  }
}
