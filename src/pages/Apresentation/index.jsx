import React, { useEffect } from "react";
import { useHistory } from "react-router";
import SlidesWrapper from "../../components/Slides";
import { useAuth } from "../../context/Auth";

import * as S from "./styles";

function Apresentation() {
  const history = useHistory();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      history.push("/");
    }
  }, []);

  return (
    <S.Container>
      <SlidesWrapper />
    </S.Container>
  );
}

export default Apresentation;
