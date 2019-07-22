import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CategoriesActions } from '~/store/ducks/categories';
import { Creators as ProductsActions } from '~/store/ducks/products';

import {
  Container,
  CategoriesContainer,
  Loading,
  CategoriesList,
  CategoryItem,
  Title,
  ProductsContainer,
  ProductsList,
  Product,
  ProductImage,
  ProductInfo,
  Name,
  Brand,
  Price,
} from './styles';

import Header from '~/components/Header';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title="GoCommerce" navigation={navigation} />,
  });

  async componentDidMount() {
    const { loadCategoriesRequest } = this.props;
    loadCategoriesRequest();
  }

  _categoryRender = (category) => {
    const { categories, changeCategoryCurrent } = this.props;
    return (
      <CategoryItem
        key={category.id}
        selected={categories.current.id === category.id}
        onPress={() => changeCategoryCurrent(category)}
      >
        <Title>{category.title}</Title>
      </CategoryItem>
    );
  };

  _selectProduct = (product) => {
    const { navigate } = this.props.navigation;
    const {setProductCurrent} = this.props;
    setProductCurrent(product)
    navigate('ProductDetail')
  };

  _productRender = (product) => {
    return (
      <Product onPress={() =>this._selectProduct(product) }>
        <ProductImage
          source={{
            uri: product.image,
          }}
        />
        <ProductInfo>
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>{`R$ ${product.price}`}</Price>
        </ProductInfo>
      </Product>
    );
  };

  render() {
    const { categories, products } = this.props;
    return (
      <Container>
        <CategoriesContainer>
        {categories.loading
        ?
          <Loading color="#fff"/>
        :
          <CategoriesList horizontal showsHorizontalScrollIndicator={false}>
            {categories.data.map(category => this._categoryRender(category))}
          </CategoriesList>
        }
        </CategoriesContainer>

        <ProductsContainer>
        {
          products.loading
          ?
          <Loading color="#111"/>
          :
          <ProductsList
          data={products.data}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => this._productRender(product)}
          />
        }
        </ProductsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({...CategoriesActions,...ProductsActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
