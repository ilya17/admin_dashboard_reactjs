import { Statuses } from "./constants";
import { StatusItem } from "./StatusItem";
import { v4 as uuidv4 } from "uuid";
import { StatusWrapperStyled } from "./styled";
import { useState } from "react";

export const Status = () => {
  const [active, setActive] = useState(1);

  return (
    <StatusWrapperStyled>
      {Statuses.map(({ title, number, id }) => (
        <StatusItem
          active={id === active}
          onClick={() => setActive(id)}
          key={uuidv4()}
          title={title}
          number={number}
        />
      ))}
    </StatusWrapperStyled>
  );
};
