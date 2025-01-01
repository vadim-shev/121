import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import FooterPart from '../templates/staticParts/Footer.js'

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
                    <router-link class="tombstone-routerLink"  to="/prod" >На главную</router-link>

                </div>
                <div style="" class="menuItem" id="catalog">
                    <h2>Виды памятников</h2>
                    <ul class="category_container "   >
                        <li class="category_item">
                            <img src="./assets/catalog/1.svg">
                            <section>
                                <h2>Недорогие модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/2.svg">
                            <section>
                                <h2>Модели для военных ЗСУ</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/3.svg">
                            <section>
                                <h2>Горизонтальные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/4.svg">
                            <section>
                                <h2>Вертикальные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/5.svg">
                            <section>
                                <h2>Комбинированные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/6.svg">
                            <section>
                                <h2>Маленькие модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/7.svg">
                            <section>
                                <h2>Мемориальные комплексы</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/8.svg">
                            <section>
                                <h2>Одинарные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/9.svg">
                            <section>
                                <h2>Двойные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/10.svg">
                            <section>
                                <h2>Модели с крестом</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/11.svg">
                            <section>
                                <h2>Модели с аркой</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
                        </li>
                        <li class="category_item">
                            <img src="./assets/catalog/12.svg">
                            <section>
                                <h2>Элитные модели</h2>
                                <span>
                                    Это стильные и практичные решения, 
                                    которые идеально подходят для создания 
                                    выразительных мемориалов.
                                </span>
                            </section>
                            
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
      currentPageKey: 'prodIndex',
        }
    },
    mounted() {
        
    }
}