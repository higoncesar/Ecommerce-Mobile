import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Title, BackButon } from './styles';

const Header = ({ title, navigation }) => (
  <Container>
    {navigation && !navigation.isFirstRouteInParent() && (
      <BackButon
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="angle-left" size={25} color="#535353" />
      </BackButon>
    )}
    <Title>{title}</Title>
  </Container>
);

export default Header;
