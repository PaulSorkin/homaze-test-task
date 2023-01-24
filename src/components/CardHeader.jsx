import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-card-heading);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 1.6rem;
  padding-left: 1.9rem;
`;

const Name = styled.p`
  margin: 0;
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  max-width: 319px;
  letter-spacing: var(--letter-spacing);
`;

const NoName = styled.p`
  margin: 0;
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  max-width: 319px;
  letter-spacing: var(--letter-spacing);
`;


const Id = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-light);
  letter-spacing: var(--letter-spacing);
`;

const CardHeader = ({projectId, customerName}) => {
    return (
        <Wrapper>
            {customerName ? (<Name>{customerName}</Name>) : (<NoName>Untitled</NoName>)}
            <Id>{`ID: ${projectId}`}</Id>
        </Wrapper>
    );
};

export default CardHeader;