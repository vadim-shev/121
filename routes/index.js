

import FooterPart from './../templates/staticParts/Footer.js'
// import Clouds from './../components/clouds/script.js'
// import TagLine from './../components/tagline/script.js'
// import Btn from './../components/button/script.js'
import Card from './../components/card/script.js'
// import MaterialObject from './../components/materials_object.js'
// import Card from './../components/card/script.js'
import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
// import fetchMixin from './../mixins/fetchMixin.js'

// import { ref } from 'https://unpkg.com/vue@3.4.27/dist/vue.global.js';                <div class="background-image-tombstone background-image-tombstone-transform "></div>



export default {
    mixins: [scrollMixin],
    components: { NavigationPart, Card, FooterPart },
  props: {
  },
    template: `
           <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: 55px;" >
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <div id="prime" class="menuItem"  >
		            <div style="position: relative;" class="prime" >		
		            	<div class="prime_background" >
    								<video preload="none" id="video" style="height: 100%; width:100%; z-index: 10; object-fit: cover; opacity: .6;" autoplay="autoplay" muted="muted" loop="loop" playsinline="" loading="lazy" ><source src="https://ronniethompson.co.uk/app/uploads/2023/03/ICON_5220_RT_Website-Video-Mobile.mp4" type="video/mp4"></video>
		            	</div>    
		            	<div style="background: rgba(0,0,0,0.95); width: 100vw; height: 75vh; z-index: 100; display: flex; flex-direction: column; justify-content: space-around; align-content: center; align-items: center;">
		            		<h1 class="tagline" style=" width: 100vw; height: 35vh;">granitblizkim</h1>
                                    <router-link   style="font-size: 35px; color: black; width: auto; height: auto; z-index: 200; background: rgba(255, 255, 255, 1.0); padding: 20px 40px ; margin: 200px 0 0 0 ;"  >Каталог</router-link>
		            	</div> 
		            </div>
		        </div> 
		            <div class="menuItem" id='whatwedo'>
		                <section id="highlight" class='vt-container' >
		                    <card 	name='Модели памятников' 
		                    			src='./assets/tombstone.png'
		                    			concept='Поделимся какими бывают 
		                    					мемориалы/памятники, для чего они служат и весь спектр наших услуг, которые мы готовы вам предоставить по работе с ними.' 
		                    			value='Перейти на страницу' 
		                    			pathTo="/catalog"
		                    ></card>
		                    <card 	name='Наши услуги' 
		                    			src='./assets/bg_tombstone.png' 
		                    			concept='Ознакомтесь со всеми видами памятников, с 
		                    					которыми мы работаем и дальнейшими необходимыми услугами, которые мы предоставляем ' 
		                    			value='Перейти на страницу' 
		                    			pathTo="/care"
		                    ></card>
		                    <card 	name='Посчитать стоимость изделия' 
		                    			src='./assets/calculate.png'
		                    			concept='Расщитайте итоговую стоимость заказа 
		                    				самостоятельно' 
		                    			value='Перейти на страницу' 
		                    			pathTo="/countPrice"
		                    ></card>
		                </section>
		            </div>
		            <div class="menuItem" id="materials">
					
		            	<div   class="materials_object 1 " 
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="menuItem materials_image " :src="this.materialSrc[0]" />
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