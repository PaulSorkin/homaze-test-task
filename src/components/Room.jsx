import styled from "styled-components";
import React from 'react';

const Item = styled.div`
  padding: 0.1rem 0.4rem;
  background-color: var(--color-bg-rooms);
 // line-height: 2.5;
  border-radius: var(--radi-tag);
  
  border: none;
  //display: flex;
  //align-items: center;
  //gap: 0.75rem;
  
  cursor: pointer;
`;

const RoomName = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-meta);
  color: var(--color-text-canselled);
`;

const Room = ({room}) => {
    return (
        <Item>
            <RoomName>{room}</RoomName>
        </Item>
    );
};

export default Room;