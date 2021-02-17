import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: whitesmoke;
  height: 100%;
  padding: 15px;
`;

export const ViewInput = styled.View`
  display: flex;
  align-items: flex-start;
`;
export const CampoInput = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 40px;
  font-size: 17px;
  border-radius: 5px;
  padding: 2px 5px 2px;
`;
export const ButtonBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 30px;
  font-size: 25px;
`;
