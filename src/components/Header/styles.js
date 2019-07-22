import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background: #fff;
`;

export const Title = styled.Text`
  color: #ff989b;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1.5;
`;

export const BackButon = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  position: absolute;
  left: 20px;
`;
