import { useContext } from 'react'
import LanguageContext from './LanguageContext.js'

function Greeting() {
    const language = useContext(LanguageContext)

    return (
        <section>
            <p>{language === 'en' ? 'A little hello, in your language' : 'Un saludo en tu idioma'}</p>
            <h1>{language === 'en' ? 'Hello, world.' : 'Hola, mundo.'}</h1>
            <p>
                {language === 'en'
                    ? 'A warm welcome, wherever you call home.'
                    : 'Una cálida bienvenida, estés donde estés.'}
            </p>
        </section>
    )
}

export default Greeting