/* eslint-disable global-require */
import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductQuantity,
  Quantity,
  ButtonLabel,
} from './styles';

Icon.loadFont();

class StoreItem extends Component {
  static propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
  };

  addToCart = () => {
    const { addItem, title, price, image, id } = this.props;
    const product = {
      title,
      price,
      image,
      id
    }

    addItem(product);
  }

  render() {
    const { title, price, image, id } = this.props;

    return (
      <Container>
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, borderTopLeftRadius: 6 }}
        />
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
          <AddButton onPress={() => this.addToCart()}>
            <ProductQuantity>
              <Icon size={12} color="#FFF" name="cart-plus" />
              <Quantity>1</Quantity>
            </ProductQuantity>
            <ButtonLabel>Add to Cart</ButtonLabel>
          </AddButton>
        </ProductDetails>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    addItem: (product) => dispatch({ type: 'ADD_TO_CART', product })
  }
)

export default connect(null, mapDispatchToProps)(StoreItem);

