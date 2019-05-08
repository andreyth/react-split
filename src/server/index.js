import express from 'express'

import renderer from 'server/renderer'

const app = express()

app.get('/favicon.ico', (req, res) => res.status(204))

app.get('*', renderer)

app.listen(3000, () => console.log('Rodando na 3000'))
