import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'shared/store'
import App from 'shared/components/App'

const renderer = (req, res) => {
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const markup = renderToString(app)

  let html = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>

      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `

  res.send(html)
}

export default renderer
