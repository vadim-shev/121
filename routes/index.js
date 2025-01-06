

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
		                    <highlight 	name='Модели памятников' 
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
		                    			pathTo="/prod/1"
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
            <footer class="menuItem"  id='contact'>
            	<footer-part></footer-part>
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