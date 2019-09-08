import React, {Component} from 'react';
import {FlatList} from 'react-native';
import propTypes from 'prop-types';

import api from '../../services/api';

import {Container} from '../../Components/Container';
import Header from '../../Components/Header';
import StoreItem from '../../Components/StoreItem';

export default class Home extends Component {
  state = {
    products: []
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = ({navigation}) => ({
    headerTitle: () => <Header navigate={() => navigation.navigate('Cart')} />,
  });

  componentDidMount() {
    this.loadStoreItems();
  }

  async loadStoreItems() {
    const { data } = await api.get(`/products`);
    this.setState({ products: [...data] }, () => console.tron.log(this.state.products));
  }

  render() {
    const { products } = this.state;
    const {navigation} = this.props;

    return (
      <Container>
        <FlatList horizontal={true} data={products} renderItem={({item}) => <StoreItem id={item.id} title={item.title} price={item.price} image={item.image} />} />
      </Container>
    );
  }
}
