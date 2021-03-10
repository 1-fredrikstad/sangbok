import React from 'react';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import ThemeToggler from '@components/atoms/ThemeToggler';

const Settings: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('settingsHeader')}</div>

      <ThemeToggler />

      <h3>Change lanuage</h3>

      <button type="button">en</button>

      <button type="button">no</button>
    </div>
  );
};

export default Settings;
