import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f6f6;
`;

export const ListItem = styled.FlatList`
  margin: 0 20px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 100px;
`;

export const ItemDetail = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #535353;
`;

export const Brand = styled.Text`
  font-size: 14px;
  color: #bdbdbd;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #00ccb5;
`;
export const ItemActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.TextInput`
  border: solid 1px #bdbdbdbd;
  height: 30px;
  width: 45px;
  font-size: 14px;
  padding: 0 10px;
`;
export const DeleteButtom = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const TotalContainer = styled.View`
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #bdbdbdbd;
`;

export const TotalPrice = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #00ccb5;
`;
