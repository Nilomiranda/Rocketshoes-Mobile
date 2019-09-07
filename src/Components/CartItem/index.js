/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
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

function CartItem() {
  return (
    <Container>
      <ProductDetails>
        <Image
          source={require('../../assets/images/show_product.png')}
          style={{ width: 80, height: 80 }}
        />
        <ProductInfo>
          <ProductTitle>Smooth and Confortable Walking Shoe</ProductTitle>
          <ProductPrice>$179,90</ProductPrice>
        </ProductInfo>

        <Icon name="delete-forever" size={24} color="#7159c1" />
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

export default CartItem;
