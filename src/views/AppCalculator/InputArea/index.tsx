import React, { FC, ReactElement } from 'react';

interface Props {
  expression: string;
}

const InputArea: FC<Props> = ({expression}): ReactElement => {
  return (
    <div>
      {expression}
    </div>
  );
};

export default InputArea;