import React from "react";
import Logo from "../../Logo";

import * as S from "./styles";

// import ImgLequeArCondicionado from "../../../assets/images/leque.png";

const Slide01 = () => {
  return (
    <S.Container>
      <S.Section>
        <S.ContentWrapper>
          <S.Title>
            <h1>
              Intro
              <br />
              dução
            </h1>
            <h3>Nosso cliente</h3>
          </S.Title>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Content>
            <p>
              Multinacional japonesa <strong>líder</strong> em sistemas de
              ar-condicionados, a<strong>Daikin</strong> esta presente em 150
              países, e carrega a missão de apresentar ao mundo tecnologias que
              tragam mais conforto para a vida das pessoas e o seu cotidiano.
            </p>
          </S.Content>
          <S.Content>
            <h2>Clube dos Instaladores</h2>
            <p>
              Plataforma desenvolvida para mensurar o sellout dos equipamentos
              residenciais Daikin, através da indicação de instalações feitas
              pela rede credenciada de instaladores.
            </p>
          </S.Content>
        </S.ContentWrapper>
      </S.Section>
      <S.Aside></S.Aside>
      <Logo />
    </S.Container>
  );
};

export default Slide01;
