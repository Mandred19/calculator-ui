import React, { FC, ReactElement } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { AppPathNames } from '../../Router';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderNavigation: FC = (): ReactElement => {
  const { t } = useTranslation(['common']);
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const handleRouteChange = (path: AppPathNames) => {
    navigation(path);
  };

  return (
    <ButtonGroup variant={'outlined'} aria-label={t('test', { ns: 'common' })}>
      <Button
      onClick={() => handleRouteChange(AppPathNames.CALCULATOR)}
      variant={pathname === `/${AppPathNames.CALCULATOR}` ? 'contained' : 'outlined'}
      startIcon={<CalculateIcon/>}
      size={'large'}>
        {'test'}
      </Button>

      <Button
      onClick={() => handleRouteChange(AppPathNames.CONVERTER)}
      variant={pathname === `/${AppPathNames.CONVERTER}` ? 'contained' : 'outlined'}
      startIcon={<PublishedWithChangesIcon/>}
      size={'large'}
      disabled={true}>
        {'test'}
      </Button>
    </ButtonGroup>
  );
};

export default HeaderNavigation;
