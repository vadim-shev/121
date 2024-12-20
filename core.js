
import Home from './routes/index.js'
import Gravestone from './routes/Gravestone/index.js'
import graveProd from './routes/Gravestone/prod.js'
import artProd from './routes/ArtAndInstallationWork/prod.js'
import tableProd from './routes/TableAndBench/prod.js'
import platformProd from './routes/Platform/prod.js'
import ArtAndInstallation from './routes/ArtAndInstallationWork/index.js'
import TableAndBench from './routes/TableAndBench/index.js'
import Platform from './routes/Platform/index.js'
import Tombstone from './routes/tomstone.js'
import Memorial from './routes/memorial.js'
import Materials from './routes/materials.js'
import Lettering from './routes/lettering.js'
import Care from './routes/lettering.js'
import CountPrice from './routes/countPrice.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/tombstone", component: Tombstone },
        { path: "/memorial", component: Memorial },
        { path: "/materials", component: Materials },
        { path: "/lettering", component: Lettering },
        { path: "/care", component: Care },
        { path: "/countPrice", component: CountPrice },
        {   
            path: "/gravestone", 
            component: Gravestone
        },
        {   
            path: "/gravestone/:id", 
            component: graveProd,
            children: [{
                path: '1',
                component: graveProd
            }]
        },
        {
            path: "/art", 
            component: ArtAndInstallation
            
        },
        {   
            path: "/art/:id", 
            component: artProd,
            children: [{
                path: '1',
                component: artProd
            }]
        },
        {   
            path: "/table", 
            component: TableAndBench
            
        },
        {   
            path: "/table/:id", 
            component: tableProd,
            children: [{
                path: '1',
                component: tableProd
            }]
        },
        {   
            path: "/platform", 
            component: Platform
            
        },
        {   
            path: "/platform/:id", 
            component: platformProd,
            children: [{
                path: '1',
                component: platformProd
            }]
        }
    ]

})

Vue.createApp().use(router).mount('#app')
