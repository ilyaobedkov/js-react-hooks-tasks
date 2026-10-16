import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const Factorial = ({ number }) => {
  let result = 1;
  for (let factor = 2; factor <= number; factor += 1) {
    result *= factor;
  }
  return <div>{`Factorial of ${number} is ${result}`}</div>;
};
const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="btn-group mb-3" role="group">
      {['en', 'ru'].map((code) => (
        <button
          key={code}
          type="button"
          data-testid={code}
          className={`btn ${i18n.language === code ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => i18n.changeLanguage(code)}
        >
          {t(`languages.${code}`)}
        </button>
      ))}
    </div>
  );
};
const FactorialButtons = ({ onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="btn-group mb-3" role="group">
      {[1, 5, 10, 20].map((value) => (
        <button
          key={value}
          type="button"
          className="btn btn-outline-primary"
          onClick={() => onSelect(value)}
        >
          {t('factorial')} {value}
        </button>
      ))}
    </div>
  );
};
const App = () => {
  const [number, selectNumber] = useState(0);
  return (
    <div className="App">
      <LanguageSelector />
      <br />
      <FactorialButtons onSelect={selectNumber} />
      <Factorial number={number} />
    </div>
  );
};
export default App;
