import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f6f6f6;
`;

export const ProductContent = styled.View`
  align-self: stretch;
  margin: 20px;
  padding: 20px;
  align-items: center;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const Description = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #535353;
`;

export const Brand = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #bdbdbd;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #00ccb5;
`;

export const ButtonCart = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  background-color: #00ccb5;
  align-self: stretch;
  align-items: center;
  border-radius: 3px;
`;

export const ButtonCartText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
