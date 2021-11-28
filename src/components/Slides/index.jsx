import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { SLIDES_ON } from "./data";

const SlidesWrapper = () => {
  const [currentSlide] = useState(0);
  const [stepsMap] = useState([...SLIDES_ON]);

  useEffect(() => {}, []);

  return <S.SlidesWrapper>{stepsMap[currentSlide].slide}</S.SlidesWrapper>;
};

export default SlidesWrapper;
