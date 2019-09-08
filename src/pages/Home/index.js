import React, {Component} from 'react';
import {FlatList} from 'react-native';
import propTypes from 'prop-types';

import api from '../../services/api';

import {Container} from '../../Components/Container';
import LoadFailed from './styles';
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
    headerTitle: () => <Header navigate={() => navigation.navigate('Cart')} goBack={() => navigation.navigate('Home')} />,
  });

  componentDidMount() {
    this.loadStoreItems();
    console.tron.log(this.state.products.length);
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
        {
          products.length === 0
            ? <LoadFailed>Failed to load products. Please check your internet connection</LoadFailed>
            : <FlatList horizontal={true} data={products} keyExtractor={(_, index) => index.toString()} renderItem={({item}) => <StoreItem id={item.id} title={item.title} price={item.price} image={item.image} />} />
        }
      </Container>
    );
  }
}
