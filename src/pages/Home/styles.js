import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    min-height: calc(100vh - 19px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black-200);

    h1 {
        font-weight: 600;
        font-size: 2rem;
    }
`;