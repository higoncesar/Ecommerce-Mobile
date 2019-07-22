import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';
import {
  Container,
  ProductContent,
  Image,
  Info,
  Description,
  Name,
  Brand,
  Price,
  ButtonCart,
  ButtonCartText,
} from './styles';

import Header from '~/components/Header';

const ProductDetail = ({ product, addProductToCart }) => (
  <Container>
    <ProductContent>
      <Image source={{ uri: product.image }} resizeMode="contain" />
      <Info>
        <Description>
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
        </Description>
        <Price>{`R$ ${product.price}`}</Price>
      </Info>
      <ButtonCart
        onPress={() => {
          addProductToCart(product);
        }}
      >
        <ButtonCartText>Adiconar ao Carrinho</ButtonCartText>
      </ButtonCart>
    </ProductContent>
  </Container>
);

ProductDetail.navigationOptions = ({ navigation }) => ({
  header: <Header title="Detalhe do produto" navigation={navigation} />,
});

const mapStateToProps = state => ({
  product: state.products.current,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
