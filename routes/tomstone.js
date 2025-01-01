import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import FooterPart from '../templates/staticParts/Footer.js'

export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart},
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: 55px;">
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main >
                <div id="prime" class="menuItem">
                    <div style="position: relative;" class="prime">     
                        <div class="prime_background"></div>                    
                        <tag-line text="granitblizkim"></tag-line>
                    </div>
                </div> 
                <h1>Виды памятников</h1>
                <ul class="category_container"  class="menuItem" id="main">
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
            </main>
            <footer class="menuItem" id="contact">
                        <footer-part></footer-part>
            </footer>
        </div>
    `,
    data() {
        return {
            currentSection: ''
        }
    },
    mounted() {
        
    }
}