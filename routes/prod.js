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
            <main class="main-prod">
                <div class="prod_container menuItem" style=" padding-top: 55px ;"  id="prod">
                	<img :src="this.Imagee"/>
                	<div class="prod_cover">
                		{{this.Name}}<br/>
                		<span>{{ this.Price }}</span>
                		<div class="prod_cover_container">    
                		<div style="width: 100vw; height: 10vh; display: flex; flex-direction: row; justify-content: space-around; align-items: center;">
                			<router-link class="tombstone-routerLink" :to="'/prod/' + this.ID_" >Предыдущая</router-link>
<router-link class="tombstone-routerLink" :to="'/prod/' + this.ID" style="position: absolute; left: 50%;">Слeдующая</router-link>
                		</div>
                    	
                		</div>
                	</div>
                </div>
            </main>
            <footer class="menuItem" id="contact" >
                <footer-part></footer-part>
            </footer>
        </div>
    `,
    data() {
        return {
            currentSection: '',
      currentPageKey: 'prodIndex',
      		Name: '',
      		Imagee: '',
      		Price: '',
      		ID: '',
      		ID_: '',
        }
    },
    mounted() {
        this.fetchAPI('./data/gravestones.json')
            .then(data => {
                this.ID = data[this.$route.params.id - 1].id + 1
                this.ID_ = data[this.$route.params.id - 1].id - 1
                this.Name = data[this.$route.params.id - 1].name
                this.Imagee = data[this.$route.params.id - 1].image
                this.Price = data[this.$route.params.id - 1].price

            })
            .catch(error => {
                console.error('Problem:', error);
            });
    }
}