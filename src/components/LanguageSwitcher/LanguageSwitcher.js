import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('ru')}>Русский</button>
      <button onClick={() => handleLanguageChange('en')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
