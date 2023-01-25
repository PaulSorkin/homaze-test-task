import styled from "styled-components";
import React from 'react';

const Item = styled.div`
  padding: 0.1rem 0.4rem;
  border-radius: var(--radi-button);
  border: none;
  cursor: pointer;

  background-color: ${props => {
    if (props.projectState === "Done") {
        return 'var(--color-bg-done)'
    }
    if (props.projectState === "Cancelled") {
            return 'var(--color-bg-canselled)'
    }
    if (props.projectState === "Negotiation") {
      return 'var(--color-bg-negotiation)'
    }
    return 'var(--color-card-heading)'
  }
};
`;

const CurrentStage = styled.p`
  margin: 0;
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  padding: 0.2rem 0.8rem;
  letter-spacing:var(--letter-spacing);

  color: ${props => {
    if (props.projectState === "Done") {
      return 'var(--color-text-done)'
    }
    if (props.projectState === "Cancelled") {
      return 'var(--color-text-canselled)'
    }
    if (props.projectState === "Negotiation") {
      return 'var(--color-text-negotiation)'
    }
    return 'var(--color-text)'
  }
  };
`;

const Stage = ({projectState}) => {
    return (
        <Item projectState={projectState}>
            <CurrentStage>{projectState}</CurrentStage>
        </Item>
    );
};

export default Stage;