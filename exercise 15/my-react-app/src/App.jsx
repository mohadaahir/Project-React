import { useState } from 'react'
import Greeting from './Greeting.jsx'
import LanguageContext from './LanguageContext.js'

function App() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((previousLanguage) => (previousLanguage === 'en' ? 'es' : 'en'))
  }

  return (
    <LanguageContext.Provider value={language}>
      <main>
        <button type="button" onClick={toggleLanguage}>
          {language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
        </button>
        <Greeting />
      </main>
    </LanguageContext.Provider>
  )
}

export default App
