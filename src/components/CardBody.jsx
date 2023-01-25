import React from 'react';
import styled from "styled-components";
import Room from "./Room";
import MetaGroup from "./MetaGroup";

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem 2rem 1.8rem;
  gap: 1.75rem;
`;

const Address = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 323px;
  letter-spacing: var(--letter-spacing)
`;

const RoomsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
`;

const CardBody = ({address, projectState, totalProject, rooms, updated_timestmp}) => {
    return (
        <CardContent>
            <Address>{address}</Address>
            <RoomsGroup rooms={rooms}>
                {rooms.map((room) => {
                    return <Room room={room.name} key={room.name} />
                })}
            </RoomsGroup>
            <MetaGroup projectState={projectState} totalProject={totalProject}
                       updated_timestmp={updated_timestmp} />
        </CardContent>
    );
};

export default CardBody;