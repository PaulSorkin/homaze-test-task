import React, {useEffect} from 'react';
import styled from "styled-components";
import Stage from "./Stage";
import {converseDate} from "../utils/date";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 0.3rem;
`;

const Heading = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-light);
  letter-spacing: var(--letter-spacing)
`;

const Date = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;

const Price = styled.p`
  margin: 0;
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;





const MetaGroup = ({projectState, totalProject, updated_timestmp}) => {
    let money = new Intl.NumberFormat("en", {style: "currency", currency: "USD", minimumFractionDigits: 2}).format(totalProject)

    /*useEffect(() => {
        converseDate(updated_timestmp)
    }, [])*/

    return (
        <Wrapper>
            <Item>
                <Heading>Last updated</Heading>
                <Date>{converseDate(updated_timestmp)}</Date>
            </Item>
            <Item>
                <Heading>Total</Heading>
                <Price>{money}</Price>
            </Item>
            <Item>
                <Heading>Stage</Heading>
                <Stage projectState={projectState} />
            </Item>
        </Wrapper>
    );
};

export default MetaGroup;