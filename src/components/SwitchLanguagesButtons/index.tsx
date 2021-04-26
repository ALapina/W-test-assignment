//styles
import "./SwitchLanguagesButtons.scss";

// multi language react-i18next
import { useTranslation } from "react-i18next";

const languages: { [key: string]: { [key: string]: string } } = {
  en: { nativeName: "English", languageCode: "en" },
  es: { nativeName: "Spanish", languageCode: "es" },
};

const SwitchLanguagesButtons = () => {
  const { i18n } = useTranslation();
  return (
    <div className="switch-languages">
      {Object.keys(languages).map((language) => (
        <button
          key={language}
          type="submit"
          onClick={() => i18n.changeLanguage(language)}
          className={`switch-languages__language-button ${languages[language].languageCode}`}
          aria-label={`change page language to ${languages[language].nativeName}`}
        ></button>
      ))}
    </div>
  );
};

export default SwitchLanguagesButtons;
