/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types';

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

function StoreItem({
  id, title, price, image,
}) {
  return (
    <Container>
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200, borderTopLeftRadius: 6 }}
      />
      <ProductDetails>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <AddButton>
          <ProductQuantity>
            <Icon size={12} color="#FFF" name="cart-plus" />
            <Quantity>1</Quantity>
          </ProductQuantity>
          <ButtonLabel>Adicionar</ButtonLabel>
        </AddButton>
      </ProductDetails>
    </Container>
  );
}

StoreItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
};

export default StoreItem;
