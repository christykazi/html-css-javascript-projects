import { useState, useEffect } from 'react';

const myData = [
  {
    key1: 'value1',
    key2: 'value2',
    // ... other data
  }
];

const MyComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const settingMenuToggle = () => {
    // Handle your setting menu toggle logic here
  };

  const toggleDarkTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return {
    myData,
    settingMenuToggle,
    toggleDarkTheme,
  };
};

export default MyComponent;
