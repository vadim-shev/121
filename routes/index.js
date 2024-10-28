
import NavigationPart from './../templates/staticParts/Navigation/script.js'

import Clouds from './../components/clouds/script.js'
import TagLine from './../components/tagline/script.js'
import Btn from './../components/button/script.js'
import Highlight from './../components/highlight/script.js'
import Card from './../components/card/script.js'
import FooterPart from './../templates/staticParts/Footer.js'

import scrollMixin from './../mixins/scrollMixin.js'
import fetchMixin from './../mixins/fetchMixin.js'

// import { ref } from 'https://unpkg.com/vue@3.4.27/dist/vue.global.js';

export default {
    mixins: [scrollMixin, fetchMixin],
    components: { NavigationPart, Clouds, TagLine, Btn, Highlight, Card, FooterPart },
    template: `
           <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: 55px;" >
                <navigation-part :class="{ 'highlighted': isScrolled }" :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <div style="position: relative;">
                    <div id="background-wrap">
                        <clouds  speedValue="x1, x2, x3, x4, x5" scaleValue="0.2" colorValue="--granit-blue"></clouds>
                    </div>
                    <div id="prime" class="menuItem">
                        <section id="hero" class='vt-container background-image-photo'>
                            <tag-line text="granitblizkim"></tag-line>
                            <btn @click="scrollAction('pricing')" style="margin-top: 20px;" name="перейти к каталогу"></btn>

                        </section>
                    </div>
                    <div class="menuItem" id='whatwedo'>
                        <section id="highlight" class='vt-container'>
                            <highlight name='от 100' concept='товаров на выбор' ></highlight>
                            <highlight name='80%' concept='клиентов обращаются повторно' ></highlight>
                            <highlight name='более 15' concept='лет на рынке' ></highlight>
                        </section>
                    </div>
                    <div class="menuItem" id='pricing'>
                        <section class='vt-container'>
                            <div class="product-items">
                                <card @click="updateMenu()"  specification='Description' 
                                      name="Надгробия" price="Перейти к каталогу" 
                                      imagePath="./assets/Gravestones/2mini.png" class='vt-box'
                                      pathTo="/gravestone"  ></card>
                                <card @click="updateMenu()"   specification='Description' 
                                      name="Изображения" price="Перейти к каталогу" imagePath="./assets/Art/hyd.png"  class='vt-box' 
                                      pathTo="/art"></card>
                                <card @click="updateMenu()"  specification='Description' 
                                      name="Площадки" price="Перейти к каталогу" imagePath="./assets/Platform/place_2.png" class='vt-box' 
                                      pathTo="/platform"></card>
                                <card @click="updateMenu()"  specification='Description' 
                                      name="Предметы" price="Перейти к каталогу" imagePath="./assets/Tables/2bench.png" class='vt-box' 
                                      pathTo="/table"></card>
                            </div>
                        </section>
                    </div> 
                </div>
            </main>
            <footer class="menuItem"  id='contact'>
                <div style="position: relative;">
                    <div>
                        <section class='vt-container'>
                            <footer-part></footer-part>
                        </section>
                        <section class='vt-container'>
                        
                        </section>
                    </div>
                </div>
            </footer>   
        </div>    
    `,    
    data() {
        return {
            currentPageKey: 'home',
            sectionNames: {
                prime: 'Главная',
                whatwedo: 'Достижения',
                pricing: 'Продукция',
                contact: 'Контакты'
            }
        }
    },
    mounted() {
        this.updateMenu()
        
    }
}