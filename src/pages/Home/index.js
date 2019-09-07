import React, {Component} from 'react';
import {FlatList} from 'react-native';
import propTypes from 'prop-types';

import {Container} from '../../Components/Container';
import Header from '../../Components/Header';
import StoreItem from '../../Components/StoreItem';

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
        <FlatList horizontal={true} data={['a', 'b']} renderItem={({item}) => <StoreItem />} />
      </Container>
    );
  }
}
