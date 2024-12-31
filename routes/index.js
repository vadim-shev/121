

import FooterPart from './../templates/staticParts/Footer.js'
import Clouds from './../components/clouds/script.js'
import TagLine from './../components/tagline/script.js'
import Btn from './../components/button/script.js'
import Highlight from './../components/highlight/script.js'
// import MaterialObject from './../components/materials_object.js'
import Card from './../components/card/script.js'
import NavigationPart from './../templates/staticParts/Navigation/script.js'
import Panel from './../components/panel/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import fetchMixin from './../mixins/fetchMixin.js'

// import { ref } from 'https://unpkg.com/vue@3.4.27/dist/vue.global.js';                <div class="background-image-tombstone background-image-tombstone-transform "></div>



export default {
    mixins: [scrollMixin],
    components: { NavigationPart, Clouds, TagLine, Btn, Highlight, Card, FooterPart, Panel },
  props: {
  },
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
		            <div class="menuItem" id="materials">
					
		            	<div  class="materials_object 1" @click="moveS"
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image" :src="this.materialSrc[0]" />
					    </div>
		            	<div  class="materials_object 2 " @click="moveS"
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image" :src="this.materialSrc[1]" />
					    </div>
		            	<div  class="materials_object transform_on 3" @click="moveS"
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image" :src="this.materialSrc[2]" />
					    </div>
		               
		            </div>
            </main>
            <footer class="menuItem"  id='cont'>
            	<div class="cont_info">
	            	<h1 style="font-size: 60px; font-weight: 900; text-align: center;">
	            		Контакты
	            	</h1>
	            	<a style="font-size: 24px; font-weight: 400;  border-bottom: 1px solid gray; width: 80vw; text-align: center;">vadim.shevchenko2016@gmail.com</a>
	            	<section style="display: flex; flex-direction; row; align-items: center; justify-content: space-around;">
	            		<img src="./assets/body.svg" style="width: 20vw; height: 20vh; ">

	            		<div style="display: flex; flex-direction: column;  text-align: center; width: 35vw;">
		            		<a href="" style="font-size: 20px; font-weight: 400; border-bottom: 1px solid gray;">+38(097)159-66-61</a>
		            		<span style="font-size: 12px; font-weight: 100;">ул. Александра Поля - 76Б</span>
	            			
	            		</div>
	            	</section>
            	<button style="width: 80%; margin: 20px auto 0; border: 1px solid hsla(0, 0%, 100%, .4); border-radius: 50px;
    box-sizing: border-box;
    color: hsla(0, 0%, 100%, .4); font-size: 18px;
    height: 90px;
    left: 50%;
    letter-spacing: -.5px;
    line-height: 88px;">Вернуться наверх</button>
            	</div>
            	<div style="height: 35vh; width: 100%; background-color: var(--color-6);">
            		<div class="copyright">
                <span>
                    © 2024 The JOY, s.r.o. All Rights Reserved. Bottova 1863/2A, 972 01 Bojnice, Slovakia (European Union)<br>By using this website, you agree to the use of cookies.
                    <br>

                    <a href="https://www.art4web.co/privacy-policy" target="_blank">
                        Cookies &amp; Privacy policy
                    </a>
                </span>
            </div>
            	</div>
            </footer>   
        </div>    
`,
  data() {
    return {
      currentPageKey: 'home',
      // src: this.materialSrc
    };
  },
  methods: {
    
  },
};