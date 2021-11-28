import styled from "styled-components";
import ImgResidencial from "../../../assets/images/residencial2.jpg";

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
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  padding: 24px;
  padding-top: 68px;

  @media (min-width: 768px) {
    min-height: 100vh;
    padding-top: 0;
    padding: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 980px) {
    padding: 48px 48px 48px 80px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 918px) {
    width: 50%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    line-height: 2rem;
    margin-bottom: 14px;
    font-weight: 800;
  }

  h3 {
    color: var(--primary);
    font-size: 1rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 718px) {
    h1 {
      color: var(--primary);
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 24px;
      font-weight: 800;
    }

    h3 {
      color: var(--primary);
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }

  @media screen and (min-width: 980px) {
    h1 {
      color: var(--primary);
      font-size: 5.5rem;
      line-height: 5rem;
      margin-bottom: 24px;
      font-weight: 800;
    }

    h3 {
      color: var(--primary);
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  h2 {
    color: var(--primary);
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    width: 70%;
    color: var(--accent);
    font-size: 0.8rem;
    line-height: 1rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      color: var(--primary);
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    p {
      width: initial;
      color: var(--accent);
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &:not(:last-of-type) {
      margin-bottom: 58px;
    }
  }

  @media screen and (min-width: 980px) {
    h2 {
      color: var(--primary);
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    p {
      color: var(--accent);
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
`;

export const Aside = styled.div`
  width: 100vw;
  min-height: 30vh;
  background-color: var(--black-200);
  position: relative;
  background: url(${ImgResidencial}) no-repeat center 10%;
  background-size: cover;
  transition: all 200s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 50vw;
    min-height: 100vh;

    background-size: auto 100%;

    &:hover {
      background-size: auto 130%;
    }
  }

  @media screen and (min-width: 980px) {
    width: 40vw;
    min-height: 100vh;
  }
`;
