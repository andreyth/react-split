import loadable from '@loadable/component'
import requiresAuth from 'client/hoc/requiresAuth'
import { testeLoad } from 'shared/ducks/initialData'

const Home = loadable(() => import('pages/Home'))
const Login = loadable(() => import('pages/Login'))
const Teste = loadable(() => import('pages/Teste'))
const NotFound = loadable(() => import('pages/NotFound'))

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', exact: true, component: Login },
  { path: '/teste', exact: true, component: requiresAuth(Teste), loadData: testeLoad() },
  { path: '/*', exact: true, component: NotFound }
]

export default routes
