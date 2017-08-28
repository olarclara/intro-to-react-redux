import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import { flattenMessages } from './utils'
import messages from './messages'
import App from './components/App'
import reducer from './reducers'
import 'semantic-ui-css/semantic.min.css'

addLocaleData([...en, ...pt])
let locale = 
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US'

const store = createStore(reducer)

render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
)