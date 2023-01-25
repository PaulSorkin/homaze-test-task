import styled from "styled-components";
import React from 'react';

const Item = styled.div`
  padding: 0.1rem 0.4rem;
  background-color: var(--color-bg-rooms);
  border-radius: var(--radi-tag);
  border: none;
  cursor: pointer;
`;

const RoomName = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-canselled);
  padding: 0.35rem 0.8rem;
`;

const Room = ({room}) => {
    return (
        <Item>
            <RoomName>{room}</RoomName>
        </Item>
    );
};

export default Room;