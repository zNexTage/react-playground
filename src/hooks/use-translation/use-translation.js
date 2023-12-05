import { useState } from "react"
import * as translation from "./translations";


const useTranslation = (language = "", fallbackLang = "en-us") => {    
    const navigatorLang = navigator.language || navigator.userLanguage;
    const lang = !language ? navigatorLang : language;
    
    /**
     * Ensures that the name of the language is the same as the name of the translation modules;
     * @param {*} lang 
     */
    const normalizeLang = lang => lang.replace("-", "_").toLowerCase();

    const [currentLanguage, setCurrentLanguage] = useState(normalizeLang(lang));
    const [fallbackLanguage, setFallbackLanguage] = useState(normalizeLang(fallbackLang));
    
    /**
     * Find the translation json in translations directory and uses the key to get the translated string. First try to get the 
     * translated string using the current languange, if not work, try to get using the fallback language. Return the key when the translated string
     * is not founded.
     * @param {string} key -> Key is used to search the translated in translation json. Don't forget to add the key in your translation json  
     * @returns The translated value or the key.
     */
    const translate = key => {
        const translationDict = translation[currentLanguage] || translation[fallbackLanguage];

        if(!translationDict) return key;

        return translationDict[key];
    }

    /**
     * Change the current language
     * @param {string} lang 
     * @returns 
     */
    const changeLanguage = lang => setCurrentLanguage(normalizeLang(lang));

    /**
     * Change the fallback language
     * @param {string} lang 
     * @returns 
     */
    const changeFallbackLanguage = lang => setFallbackLanguage(normalizeLang(lang));

    return {
        currentLanguage,
        changeLanguage,
        changeFallbackLanguage,
        translate
    };
}

export default useTranslation;