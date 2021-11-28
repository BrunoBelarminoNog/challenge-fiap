import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { SLIDES_ON } from "./data";

const SlidesWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stepsMap, setStepsMap] = useState([...SLIDES_ON]);

  useEffect(() => {}, []);

  return <S.SlidesWrapper>{stepsMap[currentSlide].slide}</S.SlidesWrapper>;
};

export default SlidesWrapper;
