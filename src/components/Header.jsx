import styled from "styled-components";
import React from 'react';
import {Container} from "./container";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1rem 0 0.8rem 0;
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: var(--fs-lg);
  text-decoration: none;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.436364px;
  
  @media (max-width: 1190px) {
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
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