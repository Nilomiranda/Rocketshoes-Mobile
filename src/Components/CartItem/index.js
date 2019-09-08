/* eslint-disable global-require */
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ProductDetails,
  Footer,
  ChangeQuantity,
  ProductTotal,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  Quantity,
} from './styles';

Icon.loadFont();

class CartItem extends Component {
  static propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
  };

  handleDelete = (productId) => {
    const { removeItem } = this.props;

    removeItem(productId);
  }

  render () {
    const { id, title, price, image } = this.props;

    return (
      <Container>
        <ProductDetails>
          <Image
            source={{ uri: image }}
            style={{ width: 80, height: 80 }}
          />
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
          </ProductInfo>

          <Icon name="delete-forever" size={24} color="#7159c1" onPress={() => this.handleDelete(id)} />
        </ProductDetails>
        <Footer>
          <ChangeQuantity>
            <Icon
              name="minus-circle-outline"
              color="#7159C1"
              size={24}
              backgroundColor="transparent"
            />
            <Quantity />
            <Icon
              name="plus-circle-outline"
              color="#7159C1"
              size={24}
              backgroundColor="transparent"
            />
          </ChangeQuantity>
          <ProductTotal>$539,90</ProductTotal>
        </Footer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: (productId) => {dispatch({type: 'REMOVE_FROM_CART', productId})}
})

export default connect(null, mapDispatchToProps)(CartItem);
