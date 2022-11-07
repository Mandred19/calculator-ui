import React, { FC, ReactElement, MouseEvent, useState, useMemo } from 'react';
import { Stack } from '@mui/material';
import ControlButton from './ControlButton';
import { baseButtons } from './baseButtons';
import { ControlsDecimalDot, ControlsNumbers, ControlsSigns, ControlsUtils } from './types';
import { advancedButtons } from './advancedButtons';

enum ControlsMode {
  BASE = 'base',
  ADVANCED = 'advanced',
}

interface Props {
  handleResetAll: () => void;
  handleBackspace: () => boolean;
  handleButtonNumber: (buttonValue: ControlsNumbers) => void;
  handleButtonDecimalDot: (buttonValue: ControlsDecimalDot) => void;
  handleButtonSign: (buttonValue: ControlsSigns) => void;
}

const ControlsArea: FC<Props> = (props): ReactElement => {
  const {
    handleBackspace,
    handleResetAll,
    handleButtonNumber,
    handleButtonDecimalDot,
    handleButtonSign,
  } = props;

  const [mode, setMode] = useState<ControlsMode>(ControlsMode.BASE);
  const currentButtons = useMemo(() => mode === ControlsMode.BASE ? baseButtons : advancedButtons, [mode]);

  const handleSetMode = (): void => {
    setMode(mode === ControlsMode.BASE ? ControlsMode.ADVANCED : ControlsMode.BASE);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const buttonValue = e.currentTarget.value;

    switch (buttonValue) {
      case ControlsUtils.TOGGLE_MODE: handleSetMode(); break;

      case ControlsUtils.BACKSPACE: handleBackspace(); break;

      case ControlsUtils.RESET_ALL: handleResetAll(); break;

      case ControlsNumbers.NULL:
      case ControlsNumbers.ONE:
      case ControlsNumbers.TWO:
      case ControlsNumbers.THREE:
      case ControlsNumbers.FOUR:
      case ControlsNumbers.FIVE:
      case ControlsNumbers.SIX:
      case ControlsNumbers.SEVEN:
      case ControlsNumbers.EIGHT:
      case ControlsNumbers.NINE: handleButtonNumber(buttonValue); break;

      case ControlsDecimalDot.DECIMAL_DOT: handleButtonDecimalDot(buttonValue); break;

      default: handleButtonSign(buttonValue as ControlsSigns);
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