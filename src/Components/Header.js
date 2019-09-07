/* eslint-disable global-require */
import styled from 'styled-components/native';
import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types';

import shoe from '../assets/images/shoe.png';

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

export default function Header({ navigate, goBack }) {
  return (
    <MainView>
      <LogoContainer class="logo">
        <AppTitle onPress={goBack}>Rocketshoes</AppTitle>
        <Image source={require('../assets/images/shoe.png')} style={{ width: 34, height: 24 }} />
      </LogoContainer>
      <Icon name="basket" color="#FFF" size={30} onPress={navigate} />
      <Text style={{ color: '#FFF' }}>1</Text>
    </MainView>
  );
}

Header.propTypes = {
  navigate: propTypes.func.isRequired,
  goBack: propTypes.func.isRequired,
};
