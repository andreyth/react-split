import loadable from '@loadable/component'

const Home = loadable(() => import('pages/Home'))
const Teste = loadable(() => import('pages/Teste'))

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/teste', exact: true, component: Teste }
]

export default routes
