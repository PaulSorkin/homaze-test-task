import React from 'react';
import styled from "styled-components";
import Stage from "./Stage";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Heading = styled.p`
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-light);
`;

const Date = styled.p`
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;

const Price = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;





const MetaGroup = ({projectState, totalProject, updated_timestmp}) => {
    return (
        <Wrapper>
            <Item>
                <Heading>Last updated</Heading>
                <Date>{updated_timestmp}</Date>
            </Item>
            <Item>
                <Heading>Total</Heading>
                <Price>{`\$${totalProject}`}</Price>
            </Item>
            <Item>
                <Heading>Stage</Heading>
                <Stage projectState={projectState} />
            </Item>
        </Wrapper>
    );
};

export default MetaGroup;