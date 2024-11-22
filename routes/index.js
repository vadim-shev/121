
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
                <div class="background-image-tombstone background-image-tombstone-transform "></div>
                	<div id="prime" class="menuItem">
		                <div style="position: relative;">
		                        <section id="hero" class='vt-container'>
		                            <tag-line text="granitblizkim" style="index: 100;"></tag-line>
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
		               
		                	<!-- <section class="menuItem" id='pro' class="pro">
		                		<h2>Productss</h2>
		                		<div class="proList">
		                			<div class="proItem">
		                					<img src="./assets/cemetry-gates.png">
		                					<div class="proInfo">
		                						<h3>Gravestone</h3>
		                						<p>No matter what your personal style, we have just the 		right furniture for your living room..</p>
		                						<button>Deal</button>
		                				</div>
		                			</div>
		                			<div class="proItem">
		                				<div class="proInfo">
		                						<h3>Tables</h3>
		                						<p>No matter what your personal style, we have just the 		right furniture for your living room..</p>
		                						<button>Deal</button>
		                				</div>
		                				<img src="./assets/bg_tombstone.png">
		                			</div>
		                			<div class="proItem">
		                				<img src="./assets/tombstone-.png">
		                				<div class="proInfo">
				                				<h3>Drawer</h3>
				                				<p>No matter what your personal style, we have just the right furniture for your living room..</p>		
				                				<button>Deal</button>
		                				</div>
		                			</div>
		                		</div>
		                	</section> -->
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
            currentPageKey: 'home'
        }
    }
}