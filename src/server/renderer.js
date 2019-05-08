import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'shared/store'
import App from 'shared/components/App'
import routes from 'shared/routes'

const renderer = (req, res, next) => {
  const activeRoute = routes.find(route => {
    let matchRoute = matchPath(req.url, route.path)
    if (matchRoute && matchRoute.isExact === true) {
      return route
    }
  })

  const promise = activeRoute.component.initialData ? store.dispatch(activeRoute.component.initialData()) : Promise.resolve()
  if (promise instanceof Promise) {
    promise.then(() => {
      console.log(store.getState())
      genStatic(req, res, store)
    }).catch(next)
  } else {
    genStatic(req, res, store)
  }
}

const genStatic = (req, res, store) => {
  const context = {}

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
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

  res.set('content-type', 'text/html')
  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.send(html)
  }
}

export default renderer
