
import Home from '../components/home'
import Page1 from '../components/page1'
import userManagement from '../components/userManagement'
import Expamle from '../example/inedx'

export const routes = [
    { path: "/home", component: Home },
    { path: '/page1', component: Page1 },
    { path: '/user_management', component: userManagement },
    { path: '/example', component: Expamle }
]

export default routes;