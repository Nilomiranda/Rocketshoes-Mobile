/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

function StoreItem() {
  return (
    <Container>
      <Image
        source={require('../../assets/images/show_product.png')}
        style={{ width: 200, height: 200, borderTopLeftRadius: 6 }}
      />
      <ProductDetails>
        <ProductTitle>Smooth Confortable Walking Shoes</ProductTitle>
        <ProductPrice>$179,90</ProductPrice>
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

export default StoreItem;
