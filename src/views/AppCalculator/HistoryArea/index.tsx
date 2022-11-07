import React, { FC, ReactElement } from 'react';

interface Props {
  updateHistory: () => void;
}

const HistoryArea: FC<Props> = (): ReactElement => {
  return (
    <div>
      HistoryArea
    </div>
  );
};

export default HistoryArea;