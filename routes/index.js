

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
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main>
                 <div id="prime" class="menuItem">
		                <div style="position: relative;" class="prime">		
		                	<div class="prime_background"></div>                    
		                        <tag-line text="granitblizkim"></tag-line>
		                </div>
		                <div class="menuItem" id='whatwedo'>
		                    <section id="highlight" class='vt-container' >
		                        <highlight 	name='Памятники и мемориалы' 
		                        			src='./assets/tombstone.png'
		                        			concept='Поделимся какими бывают 
		                        					мемориалы/памятники, для чего они служат и весь спектр наших услуг, которые мы готовы вам предоставить по работе с ними.' 
		                        			value='Перейти на страницу' 
		                        				pathTo="/tombstone"
		                        ></highlight>
		                        <highlight 	name='Выбор памятника' 
		                        			src='./assets/bg_tombstone.png' 
		                        			concept='Ознакомтесь со всеми видами памятников, с 
		                        					которыми мы работаем и дальнейшими необходимыми услугами, которые мы предоставляем ' 
		                        			value='Перейти на страницу' 
		                        			pathTo="/memorial"
		                        ></highlight>
		                        <highlight 	name='Гравировка' 
		                        			src='./assets/grav.png'
		                        			concept='Ознакомтесь с условиями  предоставления данной 
		                        					услуги' 
		                        			value='Перейти на страницу' 
		                        			pathTo="/lettering"
		                        ></highlight>
		                        <highlight 	name='Уход и обслуживание могил' 
		                        			src='./assets/backgrounds/background-shovel-ground-diagonal-reverse.png'
		                        			concept='Ознакомтесь с нашими условиями обслуживания и 
		                        					ухода за могилами перед оформлением вышеупомянутых услуг ' 
		                        			value='Перейти на страницу' 
		                        			pathTo="/care"
		                        ></highlight>
		                        <highlight 	name='Посчитать стоимость изделия' 
		                        			src='./assets/calculate.png'
		                        			concept='Расщитайте итоговую стоимость заказа 
		                        				самостоятельно' 
		                        			value='Перейти на страницу' 
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