import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>oii</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit tur, earum?</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
