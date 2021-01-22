import React from 'react';

import {Text} from 'react-native';

import {Container, ViewInput} from './styles';

const HealthData = () => {
  return (
    <Container>
      <ViewInput>
        <Text>Nome: </Text>
        <CampoInput
          placeholder="Preencha seu nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>{' '}
    </Container>
  );
};

export default HealthData;
