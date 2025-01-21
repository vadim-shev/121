

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart },
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: auto;" class="menuItem" id="header">
                <navigation-part style="width: 100vw;" :newItem="currentSection"></navigation-part>
            </header>
            <main  class="main-prod"  >
                <div style="background-color: white; !important; width: 100vw; height: 1000vh; z-index: 1000;" class="prod_container menuItem"  id="prod">

                    <img :src="Imagee"/>

                    

                    <div class="prod_cover">
                        <div class="prod_cover_info">

                            <div class="prod_arrows_container">
                                <span>
                                    <b>{{ Price }}</b>
                                </span>
                                <button>Купить</button>
                            </div> 

                           <div class="prod_arrows_container"> 
                                <router-link class="tombstone-routerLink" :to="'/catalog/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) - 1)">
                                    <img src="./assets/catalog/left-arrow.svg" />
                                    <b>Предыдущий мемориал</b>
                                </router-link>
                                <router-link class="tombstone-routerLink" :to="'/catalog/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) + 1)">
                                    <b>Следующий мемориал</b>
                                    <img src="./assets/catalog/right-arrow.svg" />
                                </router-link> 
                            </div>  

                        </div>           
                               
                        
                            <div class="prod_cover_container"    >
                                <span> Каталог: 
                                    <b> {{ Category }} </b>
                                    <br />
                                </span>
                                <span> Модель: 
                                    <b> {{ Model }} </b>
                                </span>
                                <span> Материал: 
                                    <b> Гранит </b>
                                    <br />
                                </span>
                                <span> Наличие: 
                                    <b style="color: green;"> Есть </b>
                                    <br />
                                </span>
                            
                                
                                

                            <div class="prod_buttom_seeAll ">
                                <router-link class="prime_btn"  style="height: auto; width: auto; font-size: 1.5rem; color: var(--color-1); background: rgba(17, 33, 45, .8); padding: 10px 20px; z-index: 200;  " :to="'/catalog'" >Перейти к каталогу</router-link>
                                <!-- <router-link  >Перейти в каталог</router-link> -->
                            </div>
                        </div>
                    </div>
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
            Name: '',
            Imagee: '',
            Price: '',
            ID: '',
            Category: '',
            Model: '',
            Serial: '',
            Description: ''
        };
    },
    methods: {
        async fetchAPI(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return await response.json();
            } catch (error) {
                console.error('Fetch error:', error);
                throw error;
            }
        }
    },
    mounted() {
        // document.querySelector('.main-prod').classList.add('nested-enter-from') 
        this.fetchProduct(`${'./data/'+this.$route.params.product}.json`, `${this.$route.params.product}`)

        // if (true) {}
        // this.fetchProduct('./data/vertical.json', 'vertical')
        // this.fetchProduct('./data/cheep.json', 'cheep')
    },
    watch: {
        '$route.params.id': function () {
     
        this.fetchProduct(`${'./data/'+this.$route.params.product}.json`, `${this.$route.params.product}`)

            // this.fetchProduct('./data/vertical.json', 'vertical')
            // this.fetchProduct('./data/cheep.json', 'cheep')
        },
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
};
