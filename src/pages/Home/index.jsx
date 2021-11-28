import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/Auth";
import * as S from "./styles.js";

function Home() {
  const [inputKey, setInputKey] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const { isAuth, handleAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push("/apresentacao");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const handleOpenApresentation = () => {
    const authentication = handleAuth(inputKey);

    if (!authentication) {
      setErrorLogin(true);
    }
  };

  return (
    <S.Container>
      <S.Section>
        <S.Content>
          <h2>Pitch Challenge 1TDSOS</h2>
          <h1>CHALLENGE DAIKIN</h1>
        </S.Content>
      </S.Section>
      <S.Aside>
        <S.Form>
          <label htmlFor="key_access">Digite a chave de acesso</label>
          <div>
            <input
              type="text"
              id="key_access"
              name="key_access"
              value={inputKey}
              onChange={(e) => {
                setInputKey(e.target.value);
                if (errorLogin) {
                  setErrorLogin(false);
                }
              }}
            />
            <button type="button" onClick={handleOpenApresentation}>
              <FaArrowRight />
            </button>
          </div>
          {errorLogin && (
            <S.ErrorMensage>
              Erro ao tentar entrar! Tente novamente
            </S.ErrorMensage>
          )}
        </S.Form>
        <S.Footer>
          <div>
            <p>
              <strong>Não sabe a chave?</strong>
            </p>
            <p>
              Envie um e-mail para nós e solicite:{" "}
              <a href="mailto:cedoincode@gmail.com">cedoincode@gmail.com</a>
            </p>
          </div>
        </S.Footer>
      </S.Aside>
      <Logo />
    </S.Container>
  );
}

export default Home;
