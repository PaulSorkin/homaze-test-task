import React from 'react';
import styled from "styled-components";

const CardContent = styled.div`
display: flex;
  flex-direction: column;
`;

const Adress = styled.p`
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;

const ButonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const MetaGroup = styled.div`

`;

const CardBody = () => {
    return (
        <CardContent>
            <Adress>HJGGHFKJJF</Adress>
            <ButonsGroup />
            <MetaGroup />
        </CardContent>
    );
};

export default CardBody;