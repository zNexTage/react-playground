import useTranslation from "../../hooks/use-translation/use-translation";

const TranslationExample = () => {
    const { currentLanguage, translate, changeLanguage } = useTranslation();

    return (
        <section>
            <h1>{translate("title")}</h1>
            <h2>{currentLanguage}</h2>

            <p>
                {translate("description")}
            </p>

            <button onClick={() => changeLanguage("pt-br")}>pt-br</button>
            <button onClick={() => changeLanguage("en-us")}>en-us</button>
            <button onClick={() => changeLanguage("fr")}>fr</button>
        </section>
    )
}

export default TranslationExample;