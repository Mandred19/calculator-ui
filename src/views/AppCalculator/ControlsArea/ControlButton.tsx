import React, { FC, ReactElement, MouseEvent } from 'react';
import { Button, Tooltip } from '@mui/material';
import { ButtonControl } from './types';

const ControlButton: FC<Props & ButtonControl> = (props: Props & ButtonControl): ReactElement => {
  const {title, tooltipTitle, handleClick, ...rest} = props;

  return (
    <Tooltip title={tooltipTitle}>
      <Button
      onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
      variant={'text'}
      fullWidth={true}
      size={'large'}
      {...rest}>
        {title}
      </Button>
    </Tooltip>
  );
};

export default ControlButton;

interface Props {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
