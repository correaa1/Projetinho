import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: whitesmoke;
  height: 100%;
  padding: 15px;
`;

export const ViewInput = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CampoInput = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 35px;
  font-size: 17px;
  padding: 3px 10px 3px;
  border-radius: 5px;
`;
export const ButtonBack = styled.TouchableOpacity`
  width: 25%;
  height: 20px;
  font-size: 17px;
  margin-top: 27px;
  background-color: whitesmoke;
  padding: 2px 5px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
