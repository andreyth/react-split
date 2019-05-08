import express from 'express'

import renderer from 'server/renderer'

const app = express()

app.get('*', renderer)

app.listen(3000, () => console.log('Rodando na 3000'))
