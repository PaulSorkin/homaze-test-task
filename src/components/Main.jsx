import React from 'react';
import styled from "styled-components";
import {Search} from "./Search";
import {Container} from "./container";

const Wrapper = styled.main`
padding: 1.3rem 2rem;
  background-color: var(--color-bg);
  border: 1px solid #DDEDF4;
  border-radius: var(--radi-card);
`;

const Main = () => {
    return (
            <Container>
                <Wrapper>
                    <Search/>
                </Wrapper>
            </Container>
    );
};

export default Main;