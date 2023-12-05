import { act } from "react-dom/test-utils";
import useTranslation from "./use-translation";
import { renderHook } from '@testing-library/react';

describe("UseTranslation Hook", () => {
    test("Uses fallback language when there is no a dictionary for current language", () => {
        const currentLanguage = "xx";
        const fallbackLang = "pt_br";

        const { result } = renderHook(() => useTranslation(currentLanguage, fallbackLang));

        // Should translate to pt br
        expect(result.current.translate("title")).toEqual("Testando - Use Translation");
    });

    test("Return the key when it not exists in any translation dictionary", ()=> {
        const currentLanguage = "pt_br";
        const fallbackLang = "en_us";

        const { result } = renderHook(() => useTranslation(currentLanguage, fallbackLang));

        expect(result.current.translate("xdf")).toEqual("xdf");
    });

    test("Translate a string", () => {
        const currentLanguage = "en_us";

        const { result } = renderHook(() => useTranslation(currentLanguage));

        expect(result.current.translate("title")).toEqual("Testing - Use Translation");
    });

    test("Change current language", ()=> {
        const currentLanguage = "en_us";
        const targetLanguage = "pt_br";

        const { result } = renderHook(() => useTranslation(currentLanguage));

        act(()=>{
            result.current.changeLanguage(targetLanguage);
        });

        expect(result.current.currentLanguage).toEqual(targetLanguage);
    });

    test("Change fallback language", ()=>{
        const fallbackLanguage = "pt_br";
        const targetFallbackLanguage = "en_us";

        const { result } = renderHook(() => useTranslation("en_us", fallbackLanguage));

        act(()=>{
            result.current.changeLanguage(targetFallbackLanguage);
        });

        expect(result.current.currentLanguage).toEqual(targetFallbackLanguage);
    })
});