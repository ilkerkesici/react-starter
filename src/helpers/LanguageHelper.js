import { strings } from '../assets';

/**
 * Determine and change the system language
 */
class LanguageHelper{
    language = null;
    strLanguage = null;

    constructor(){
        const browserLanguage = navigator.language;
        const userSelectedLanguage = localStorage.getItem('language');
        const chosenLanguage = userSelectedLanguage || browserLanguage;
        this.strLanguage = chosenLanguage;
        if(chosenLanguage === 'tr')
            this.language = strings.tr;
        else this.language = strings.en;
    }

    /**
     * Get the current language strings
     */
    getLanguage(){
        return this.language;
    }

    /**
     * Set the current language and update from localStorage
     * @param {string} lang is selecting language
     */
    setLanguage(lang){
        localStorage.setItem('language', lang);
        if(lang === 'tr')
            this.language = strings.tr;
        else this.language = strings.en;

    }
}

export default new LanguageHelper();