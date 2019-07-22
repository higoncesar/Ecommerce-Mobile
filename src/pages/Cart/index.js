import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Creators as CartActions } from '~/store/ducks/cart';

import {
  Container,
  ListItem,
  Item,
  Image,
  ItemDetail,
  Name,
  Brand,
  Price,
  ItemActions,
  Quantity,
  DeleteButtom,
  TotalContainer,
  TotalTitle,
  TotalPrice,
} from './styles';

import Header from '~/components/Header';

class Cart extends Component {
  render() {
    const { cart, removeProductToCart, changeQuantityCart } = this.props;
    return (
      <Container>
        <Header title="Carrinho" />
        <ListItem
          showsVerticalScrollIndicator={false}
          data={cart.products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: product }) => (
            <Item>
              <Image source={{ uri: product.image }} />
              <ItemDetail>
                <Name>{product.name}</Name>
                <Brand>{product.brand}</Brand>
                <Price>{`R$ ${product.price}`}</Price>
              </ItemDetail>
              <ItemActions>
                <Quantity
                  keyboardType="numeric"
                  onChangeText={value => changeQuantityCart(product.id, value)}
                >
                  {product.quantity}
                </Quantity>
                <DeleteButtom onPress={() => removeProductToCart(product.id)}>
                  <Icon name="close" size={20} color="#d3d3d3" />
                </DeleteButtom>
              </ItemActions>
            </Item>
          )}
        />
        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>{`R$ ${cart.total.toFixed(2)}`}</TotalPrice>
        </TotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
