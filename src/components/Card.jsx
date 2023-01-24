import React from 'react';
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardItem = styled.div`
  width: 100%;
  max-width: 350px;
  border: solid var(--color-card-border) 1px;
  border-radius: var(--radi-card);
  display: flex;
  flex-direction: column;
`;

const Card = ( {projectId, customerName, address, projectState, totalProject, updated_timestmp, rooms} ) => {
    return (
        <CardItem>
            <CardHeader projectId={projectId} customerName={customerName} />
            <CardBody address={address}
                      rooms={rooms} updated_timestmp={updated_timestmp}
                      totalProject={totalProject} projectState={projectState} />
        </CardItem>
    );
};

export default Card;