import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-card-heading);
`;

const Name = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--color-text);
`;

const Id = styled.p`
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-light);
`;

const CardHeader = () => {
    return (
        <Wrapper>
            <Name>FMDJFKkvdfsv</Name>
            <Id>vfdsvsvfFRFSFV</Id>
        </Wrapper>
    );
};

export default CardHeader;