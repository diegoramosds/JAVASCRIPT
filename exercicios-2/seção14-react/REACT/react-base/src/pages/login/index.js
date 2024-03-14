import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispath = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispath(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>oii</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit tur, earum?</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
