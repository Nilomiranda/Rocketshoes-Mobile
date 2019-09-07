import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 6px;
`;

export const ChangeQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfo = styled.View`
  width: 163px;
  height: 60px;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
`;

export const ProductTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const Quantity = styled.TextInput.attrs({
  value: '1',
})`
  background: #fff;
  width: 51px;
  height: 26px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
  color: #666;
  padding-left: 15px;
`;
