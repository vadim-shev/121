

import FooterPart from './../templates/staticParts/Footer.js'
import Clouds from './../components/clouds/script.js'
import TagLine from './../components/tagline/script.js'
import Btn from './../components/button/script.js'
import Highlight from './../components/highlight/script.js'
import Card from './../components/card/script.js'
import NavigationPart from './../templates/staticParts/Navigation/script.js'


import scrollMixin from './../mixins/scrollMixin.js'
import fetchMixin from './../mixins/fetchMixin.js'

// import { ref } from 'https://unpkg.com/vue@3.4.27/dist/vue.global.js';                <div class="background-image-tombstone background-image-tombstone-transform "></div>



export default {
    mixins: [scrollMixin],
    components: { NavigationPart, Clouds, TagLine, Btn, Highlight, Card, FooterPart },
    template: `
           <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: 55px;" >
                <navigation-part  :newItem="currentSection"></navigation-part>
            </header>
            <main>
                 <div id="background-wrap" style="visibility: hidden;">
                    <clouds  speedValue="x1, x2, x3, x4, x5" scaleValue="0.2" colorValue="--granit-blue"></clouds>
                </div>                 
                	<div id="prime" class="menuItem">
		                <div style="position: relative;">
		                        <section id="hero" class='vt-container'>
		                            <tag-line text="granitblizkim"></tag-line>
		                            <btn @click="scrollAction('pricing')" style="margin-top: 20px;" name="перейти к каталогу"></btn>

		                    </section>
		                </div>
		                <div class="menuItem" id='whatwedo'>
		                    <section id="highlight" class='vt-container' >
		                        <highlight 	name='Памятники и мемориалы' 
		                        			concept='Поделимся какими бывают 
		                        					мемориалы/памятники, для чего они служат и весь спектр наших услуг, которые мы готовы вам предоставить по работе с ними.' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        				pathTo="/tombstone"
		                        ></highlight>
		                        <highlight 	name='Выбор памятника' 
		                        			concept='Ознакомтесь со всеми видами памятников, с 
		                        					которыми мы работаем и дальнейшими необходимыми услугами, которые мы предоставляем ' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        			pathTo="/memorial"
		                        ></highlight>
		                        <highlight 	name='Гравировка' 
		                        			concept='Ознакомтесь с условиями  предоставления данной 
		                        					услуги' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        			pathTo="/lettering"
		                        ></highlight>
		                        <highlight 	name='Выбор материала' 
		                        			concept='Подскажим какие материалы мы можем вам 
		                        					предложить, в зависимости от вашего бюджета, а так же предупредим о возможных проблемах таких решений ' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        			pathTo="/materials"
		                        ></highlight>
		                        <highlight 	name='Уход и обслуживание могил' 
		                        			concept='Ознакомтесь с нашими условиями обслуживания и 
		                        					ухода за могилами перед оформлением вышеупомянутых услуг ' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        			pathTo="/care"
		                        ></highlight>
		                        <highlight 	name='Посчитать стоимость изделия' 
		                        			concept='Расщитайте итоговую стоимость заказа 
		                        				самостоятельно' 
		                        			value='Нажмите, чтобы перейти на страницу' 
		                        			pathTo="/countPrice"
		                        ></highlight>
		                        
		                    </section>
		                </div>

		                <div class="menuItem" id='material'>
		                	<section class="material_flex">
			                	<div class="material_exhibit dimovsky">
			                		Dimovsky
			                	</div>
			                	<div class="material_exhibit gabbro_diass">
			                		Gabbro Diass
			                	</div>
			                	<div class="material_exhibit green_gabbro_diass">
			                		Green Gabbro
			                	</div>
		                		
		                	</section>
		                	<section class="material_flex">
			                	<div class="material_exhibit korelsky">
			                		Korelsky
			                	</div>
			                	<div class="material_exhibit korelsky2">
			                		Korelsky2
			                	</div>
			                	<div class="material_exhibit sopka_bentina">
			                		Sopka Bentina
			                	</div>
		                		
		                	</section>
		                </div>
		               <!-- <div class="menuItem" id='pricing'>
		                    <section style="position: relative;" class='vt-container'>            
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
		                </div>-->
		               
		                	

		                </div> 
		                    <!-- <div class="container"> -->
   
		                	
		                <!-- </div>  -->

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
            currentPageKey: 'home'
        }
    }
}