import React from 'react';
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardItem = styled.div`
  max-width: 350px;
  max-height: 235px;

  border: solid var(--color-card-border) 1px;
  border-radius: var(--radi-card);
  display: flex;
  flex-direction: column;
`;

const Card = () => {
    return (
        <CardItem>
            <CardHeader />
            <CardBody />
        </CardItem>
    );
};

export default Card;