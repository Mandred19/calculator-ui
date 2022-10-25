import React, { FC, ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../Providers/LocaleContext.provider';

const SetLocale: FC = (): ReactElement => {
  const { t, i18n } = useTranslation(['common']);
  const [locale, setLocale] = React.useState<Locale>(Locale.EN_US);

  const handleSetLocale = (event: SelectChangeEvent) => {
    const locale: Locale = event.target.value as Locale;
    setLocale(locale);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={'set-locale'}>
        {'test'}
      </InputLabel>

      <Select
      labelId={'set-locale'}
      id={'set-locale'}
      value={locale}
      onChange={handleSetLocale}
      autoWidth
      label={'test'}>
        <MenuItem value={Locale.EN_US}>
          English
        </MenuItem>

        <MenuItem value={Locale.RU_RU}>
          Русский
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SetLocale;