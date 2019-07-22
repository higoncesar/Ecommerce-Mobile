import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f6f6;
`;

/**
 * Categories
 */
export const CategoriesContainer = styled.View`
  background-color: #ff989b;
  height: 60px;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

export const CategoriesList = styled.ScrollView``;

export const CategoryItem = styled.TouchableOpacity`
  height: 100%;
  padding: 15px;
  align-self: center;
  border-bottom-color: #fff;
  border-bottom-width: ${({ selected }) => (selected ? '10px' : '0')};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

/**
 * Products
 */

export const ProductsContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

export const ProductsList = styled.FlatList.attrs(props => ({
  numColumns: 2,
}))``;

export const Product = styled.TouchableOpacity`
  flex-grow: 1;
  align-items: center;
  margin: 10px 10px 0px;
  padding: 10px;
  background-color: #fff;
  flex-basis: 0;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 150px;
`;

export const ProductInfo = styled.View`
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #535353;
`;

export const Brand = styled.Text`
  font-size: 14px;
  color: #bdbdbd;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #00ccb5;
`;
