import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import "../Home/Home.css";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <button className='bnt_translate' onClick={() => handleLanguageChange('ru')}>Русский</button>
      <button onClick={() => handleLanguageChange('en')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
