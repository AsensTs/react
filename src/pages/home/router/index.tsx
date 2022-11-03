import Page1 from '@home/pages/page1'
import userManagement from '@home/pages/userManagement'
import Expamle from '@home/pages/example/inedx'

export const routes = [
    { path: '/page1', component: Page1 },
    { path: '/option', component: Page1 },
    { path: '/user_management', component: userManagement },
    { path: '/example', component: Expamle },
    
]

export default routes;