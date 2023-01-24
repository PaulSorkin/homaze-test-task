import styled from "styled-components";
import React from 'react';
import {Container} from "./container";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0.7rem 0;
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: var(--fs-lg);
  text-decoration: none;
  font-weight: 600;
  margin: 0;

  letter-spacing: 0.436364px;
`;

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Contracts</Title>
            </Wrapper>

        </Container>
    );
};

export default Header;