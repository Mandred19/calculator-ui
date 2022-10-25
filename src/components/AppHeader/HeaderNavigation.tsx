import React, { FC, ReactElement } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const HeaderNavigation: FC = (): ReactElement => {
  const { t } = useTranslation(['common']);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ButtonGroup variant={'outlined'} aria-label={t('test', { ns: 'common' })}>
      <Button
      startIcon={<CalculateIcon/>}
      size={'large'}>
        {'test'}
      </Button>

      <Button
      startIcon={<PublishedWithChangesIcon/>}
      size={'large'}
      disabled={true}>
        {'test'}
      </Button>

      <Button
      startIcon={<PublishedWithChangesIcon/>}
      size={'large'}
      disabled={true}>
        {'test'}
      </Button>
    </ButtonGroup>
  );
};

export default HeaderNavigation;
