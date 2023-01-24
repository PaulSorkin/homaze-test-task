import React from 'react';
import styled from "styled-components";
import Room from "./Room";
import MetaGroup from "./MetaGroup";

const CardContent = styled.div`
display: flex;
  flex-direction: column;
`;

const Address = styled.p`
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;

const RoomsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const CardBody = () => {
    return (
        <CardContent>
            <Address>249 Bowery, New York, NY 10002, USA</Address>
            <RoomsGroup>
                <Room />
                <Room />
                <Room />
            </RoomsGroup>
            <MetaGroup />
        </CardContent>
    );
};

export default CardBody;