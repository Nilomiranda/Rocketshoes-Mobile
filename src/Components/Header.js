/* eslint-disable global-require */
import styled from 'styled-components/native';
import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types';

import shoe from '../assets/images/shoe.png';
import { connect } from 'react-redux';

Icon.loadFont();

const MainView = styled.View`
  background: #191914;
  width: 100%;
  height: 64px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
`;

const AppTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
`;

const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CartAmount = styled.Text`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #7159C1;
  color: #FFF;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 15;
  right: 23;
`;

class Header extends Component {
  static propTypes = {
    navigate: propTypes.func.isRequired,
    goBack: propTypes.func.isRequired,
  };

  render () {
    const { goBack, navigate, amount } = this.props;

    return (
      <MainView>
        <LogoContainer class="logo">
          <AppTitle onPress={goBack}>Rocketshoes</AppTitle>
          <Image source={require('../assets/images/shoe.png')} style={{ width: 34, height: 24 }} />
        </LogoContainer>
        <Icon name="basket" color="#FFF" size={30} onPress={navigate} />
        <CartAmount style={{ color: '#FFF' }}>{amount}</CartAmount>
        {/* <Badge containerStyle={{ position: 'absolute', top: -4, right: -4 }} value="1"/> */}
      </MainView>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.amount,
});

export default connect(mapStateToProps)(Header);
