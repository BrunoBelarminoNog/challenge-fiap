import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  position: fixed;
  top: 24px;
  left: 24px;

  img {
    max-height: 20px;
    transition: all 200ms ease-in-out;
    transform-origin: bottom left;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    top: initial;
    bottom: 48px;
    left: 48px;

    img {
      max-height: 32px;
    }
  }

  @media (min-width: 980px) {
    bottom: 48px;
    left: 80px;
  }
`;
