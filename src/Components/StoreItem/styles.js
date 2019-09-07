import styled from 'styled-components/native';

export const Container = styled.View`
  height: 358px;
  width: 220px;
  background: #fff;
  color: #222;
  border-radius: 6px;
  margin: 10px;
`;

export const ProductDetails = styled.View`
  padding: 10px 20px;
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  color: #000;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  height: 42px;
  align-items: center;
  border-radius: 2px;
  margin-top: auto;
`;

export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  background: #5d4d91;
  padding: 13px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const Quantity = styled.Text`
  font-size: 14px;
  margin-left: 7px;
  color: #fff;
`;

export const ButtonLabel = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  /* padding: 13px 36px; */
  margin-left: 20px;
`;
