import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 50vw;
  padding: 24px;
  height: 40vh;
  transition: all 200ms ease-in-out;

  @media (min-width: 768px) {
    padding: 48px;
    height: 100vh;
  }

  @media screen and (min-width: 980px) {
    width: 100%;
    padding: 48px 48px 48px 80px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--primary);
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 800;
    transition: all 200ms ease-in-out;
  }

  h2 {
    color: var(--secondary);
    font-size: 1rem;
    transition: all 200ms ease-in-out;
  }

  &:not(:last-of-type) {
    margin-bottom: 58px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 980px) {
    h1 {
      font-size: 5rem;
      line-height: 5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Aside = styled.div`
  width: 100vw;
  min-height: 60vh;
  background-color: var(--black-200);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 50vw;
  }

  @media screen and (min-width: 980px) {
    width: 40vw;
    min-width: 380px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20vh;
  position: relative;

  label {
    margin-bottom: 8px;
  }

  div {
    display: flex;

    input {
      padding: 8px 12px;
      width: 100%;
      border: none !important;
      border-radius: 6px 0 0 6px;
    }

    button {
      background-color: var(--primary);
      border: none !important;
      border-radius: 0 6px 6px 0;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      &:hover {
        background-color: var(--primary-hover);
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }
`;

export const ErrorMensage = styled.span`
  color: var(--red);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  position: absolute;
  bottom: -24px;
  left: 0;
`;
