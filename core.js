
import Home from './routes/index.js'
import NotFound from './routes/NotFound/index.js'
import Gravestone from './routes/Gravestone/index.js'
import graveProd from './routes/Gravestone/prod.js'
import artProd from './routes/ArtAndInstallationWork/prod.js'
import tableProd from './routes/TableAndBench/prod.js'
import platformProd from './routes/Platform/prod.js'
import ArtAndInstallation from './routes/ArtAndInstallationWork/index.js'
import TableAndBench from './routes/TableAndBench/index.js'
import Platform from './routes/Platform/index.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        // { path: '/404', name: '404', component: NotFound },
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
router.beforeEach((to, from, next) => {
  // Проверка пути "/" на допустимость
  if (to.path === '/#' && to.path === '/') {
    const validPaths = ['/gravestone', '/art', '/table', '/platform'];
    if (!validPaths.includes(to.path)) {
      // Если путь не соответствует допустимым, перенаправляем на 404
      return next({ path: '/404' });
    }
  }

  // Проверка маршрута с параметром ID (например, gravestone/:id)
  if (to.params.id) {
    // Здесь добавьте вашу логику проверки существования ID
    // Например, проверка ID через API или локальный список
    const isValidId = checkIfIdExists(to.params.id);  // Псевдофункция для проверки ID

    if (!isValidId) {
      // Если ID не существует, перенаправляем на 404
      return next({ path: '/404' });
    }
  }

  // Если все проверки пройдены, разрешаем переход
  next();
});
Vue.createApp({
    data() {
        return {
            mess: "ciao mondo"
        }
    }
}).use(router).mount('#app')
function checkIfIdExists(id) {
    this.fetchAPI('./data/gravestones.json')
            .then(data => {
                console.log(data.length)
            })
            .catch(error => {
                console.error('Problem:', error);
            });
  // Вставьте сюда вашу логику проверки существования ID
  // Например, можно проверить локальный массив, сделать запрос к API и т.д.
  const validIds = data.length  // Пример с заранее заданными ID
  return validIds.includes(Number(id));  // Преобразуем id в число
}