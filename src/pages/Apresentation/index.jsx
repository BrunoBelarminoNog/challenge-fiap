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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <SlidesWrapper />
    </S.Container>
  );
}

export default Apresentation;
