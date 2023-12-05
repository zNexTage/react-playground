import { useState } from "react"
import * as translation from "./translations";


const useTranslation = (language = "") => {    
    const navigatorLang = navigator.language || navigator.userLanguage;
    const lang = !language ? navigatorLang : language;
    
    /**
     * Ensures that the name of the language is the same as the name of the translation modules;
     * @param {*} lang 
     */
    const normalizeLang = lang => lang.replace("-", "").toLowerCase();

    const [currentLanguage, setCurrentLanguage] = useState(normalizeLang(lang));
    
    /**
     * Find the translation json in translations directory and uses the key to get the translated string
     * @param {string} key 
     * @returns 
     */
    const translate = key => {
        const translationDict = translation[currentLanguage];

        return translationDict[key];
    }

    /**
     * Change the current language
     * @param {string} lang 
     * @returns 
     */
    const changeLanguage = lang => setCurrentLanguage(normalizeLang(lang));

    return {
        currentLanguage,
        changeLanguage,
        translate
    };
}

export default useTranslation;