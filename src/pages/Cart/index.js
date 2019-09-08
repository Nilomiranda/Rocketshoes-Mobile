/* eslint-disable quote-props */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../../Components/CartItem';

import { Container } from '../../Components/Container';
import Header from '../../Components/Header';
import {
  CardList,
  Footer,
  Total,
  TotalLabel,
  PurchaseButton,
  CartTotal,
  ButtonLabel,
} from './styles';

class Cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Header goBack={() => navigation.navigate('Home')} />,
    headerLeft: null,
  });

  componentDidMount() {
    console.tron.log(this.props.products);
  }

  render() {
    const { products } = this.props;

    return (
      <Container>
        <CardList>
          {
            products.map(product => (
              <CartItem title={product.title} price={product.price} image={product.image}/>
            ))
          }
          {/* <CartItem />
          <CartItem />
          <CartItem /> */}
          <Footer>
            <Total>
              <TotalLabel>Total</TotalLabel>
              <CartTotal>$1619,10</CartTotal>
            </Total>
            <PurchaseButton>
              <ButtonLabel>Place Order</ButtonLabel>
            </PurchaseButton>
          </Footer>
        </CardList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.items,
})

export default connect(mapStateToProps)(Cart);
