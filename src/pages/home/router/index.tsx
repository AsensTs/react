import Index from '@index/view/Home'
import Home from '@index/components/home'
import Page1 from '@index/components/page1'
import userManagement from '@index/components/userManagement'
import Expamle from '@index/example/inedx'

export const routes = [
    { path: "/index", component: Index },
    { path: '/home', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/option', component: Page1 },
    { path: '/user_management', component: userManagement },
    { path: '/example', component: Expamle },
    
]

export default routes;