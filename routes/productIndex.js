import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import FooterPart from './../templates/staticParts/Footer.js'

export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart},
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: auto;"  class="menuItem" id="header">
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main class="main-tombstone">
                <div class="tombstone_container" style=" padding-top: 55px ;">
                    <h1>Изготовление и установка мемориальных изделий</h1>
                    <p>Устанавливка надгробия происходит не ранее, чем через год после похорон, так как грунту нужно время, чтобы просесть и укрепиться. <br/>Если произвести монтаж на свежий и не просевший грунт, памятник неизбежно покосится спустя некоторое время. В худшем случае памятник  может упасть.</p>               
                    <router-link class="tombstone-routerLink"  to="/" >На главную</router-link>

                </div>
                <div style="" class="menuItem" id="catalog">
                    <h2>Виды памятников</h2>
                    <ul class="category_container "   >
                        <li class="category_item">
                            <router-link to="/catalog/cheep/1">
                                <img src="./assets/catalog/cheep.svg">
                                <section>
                                    <h2>Недорогие модели</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/vertical/1">
                                <img src="./assets/catalog/vertical.svg">
                                <section>
                                    <h2>Вертикальные модели</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/horizontal/1">
                                <img src="./assets/catalog/horizontal.svg">
                                <section>
                                    <h2>Горизонтальные модели</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/complex/1">
                                <img src="./assets/catalog/complex.svg">
                                <section>
                                    <h2>Мемориальные комплексы</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/small/1">
                                <img src="./assets/catalog/small.svg">
                                <section>
                                    <h2>Маленькие модели</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/military/1">
                                <img src="./assets/catalog/military.svg">
                                <section>
                                    <h2>Модели для военных ЗСУ</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                        <li class="category_item">
                            <router-link to="/catalog/combined/1">
                                <img src="./assets/catalog/combined.svg">
                                <section>
                                    <h2>Комбинированные модели</h2>
                                    <span>
                                        Это стильные и практичные решения, 
                                        которые идеально подходят для создания 
                                        выразительных мемориалов.
                                    </span>
                                </section>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </main>
            <footer class="menuItem" id="contact">
                <footer-part></footer-part>
            </footer>
        </div>
    `,
    data() {
        return {
            currentSection: '',
      currentPageKey: 'tombstone',
        }
    },
    mounted() {
            // console.log(window.history.state)
        
        
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
}