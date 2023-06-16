import React, { useEffect } from 'react';

const withLanguage = (WrappedComponent) => {
  const WithLanguage = (props) => {
    useEffect(() => {
      const language = localStorage.getItem('language') || 'ru';
      // Передаем выбранный язык в пропсы оборачиваемого компонента
      props.setLanguage(language);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLanguage;
};

export default withLanguage;
