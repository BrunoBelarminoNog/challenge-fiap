import React from "react";

import * as S from "./styles";
import LogosMatch from "../../assets/images/logos_match.png";

const Logo = () => {
  return (
    <S.LogoWrapper>
      <img src={LogosMatch} alt="Code In Code mais Daikin" />
    </S.LogoWrapper>
  );
};

export default Logo;
