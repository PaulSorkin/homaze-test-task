import React from 'react';
import styled from "styled-components";
import {Search} from "./Search";
import {Container} from "./container";
import Card from "./Card";

const Wrapper = styled.main`
  padding: 1.3rem 2rem;
  background-color: var(--color-bg);
  border: 1px solid #DDEDF4;
  border-radius: var(--radi-card);
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Main = () => {
    return (
        <Container>
            <Wrapper>
                <Search/>
                <CardsContainer>
                    <Card/>
                </CardsContainer>
            </Wrapper>
        </Container>
    );
};

export default Main;