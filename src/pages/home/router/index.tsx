import Page1 from '@home/pages/page1'
import userManagement from '@home/pages/userManagement'
import Expamle from '@home/pages/example/inedx'

interface Route {
    path: String,
    component: any,
    redirect?: String
}

export const routes: Array<Route> = [
    { path: '/page1', component: Page1,},
    { path: '/options', component: Page1, redirect: "/page1"},
    { path: '/user_management', component: userManagement },
    { path: '/example', component: Expamle },
]

export default routes;