import React, { FC, ReactElement, MouseEvent, useState, useMemo } from 'react';
import { Stack } from '@mui/material';
import ControlButton from './ControlButton';
import { baseButtons } from './baseButtons';
import { ControlsValues } from './types';
import { advancedButtons } from './advancedButtons';

enum ControlsMode {
  BASE = 'base',
  ADVANCED = 'advanced',
}

const ControlsArea: FC = (): ReactElement => {
  const [mode, setMode] = useState<ControlsMode>(ControlsMode.BASE);
  const currentButtons = useMemo(() => mode === ControlsMode.BASE ? baseButtons : advancedButtons, [mode]);

  const handleSetMode = (): void => {
    setMode(mode === ControlsMode.BASE ? ControlsMode.ADVANCED : ControlsMode.BASE);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const buttonValue = e.currentTarget.value;
    // eslint-disable-next-line no-console
    console.log(111, e.currentTarget.value);

    switch (buttonValue) {
      case ControlsValues.TOGGLE_MODE: handleSetMode(); break;
      default: break;
    }
  };

  return (
    <Stack height={'100%'} spacing={2} direction={'column'}>
      {
        currentButtons.map((rowItem, idx) => {
          return <Stack key={`${idx}`} spacing={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            {
              rowItem.map((buttonItem) => {
                const {key, title, tooltipTitle, startIcon, value} = buttonItem;

                return <ControlButton
                  key={key}
                  handleClick={(e) => handleClick(e)}
                  value={value}
                  title={title}
                  tooltipTitle={tooltipTitle}
                  startIcon={startIcon}/>;
              })
            }
          </Stack>;
        })
      }
    </Stack>
  );
};

export default ControlsArea;