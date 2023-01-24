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