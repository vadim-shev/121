

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

                    <div class="prod_arrows_container"> 
                        <router-link class="tombstone-routerLink" :to="'/catalog/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) - 1)">
                            <img style=" left: -20px; top: 100px; " class="routerLink_img" src="./assets/catalog/left-arrow.svg" />
                        </router-link>
                        <router-link class="tombstone-routerLink" :to="'/catalog/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) + 1)">
                            <img style="right: -10px; top: 5px;" class="routerLink_img" src="./assets/catalog/right-arrow.svg" />
                        </router-link> 
                    </div> 

                    <div class="prod_cover">
                        <div class="prod_cover_info">
                                <b>{{ Name }}</b>
                                    <br />
                                    <span>
                                            <b>{{ Price }}</b>
                                    </span>
                                    <br />
                                    <span style="color: green;">
                                            Есть в наличии
                                    </span>
                            </div>
                            <div class="prod_cover_info">
                                    <button    >Купить</button>
                            </div>
                        
                            <div class="prod_cover_container"    >
                                <span> Материал: 
                                    <b> Гранит </b>
                            <br />
                                </span>

                                <span> Номер: 
                                    <b> {{ Serial }} </b>
                            <br />
                                </span>

                                <span> Каталог: 
                                    <b> {{ Category }} </b>
                            <br />
                                </span>

                                <span> Модель: 
                                    <b> {{ Model }} </b>
                            <br />
                            <br />
                                </span>

                                <span> Цветник: 
                                    <b> 80*40*10*5 </b>
                            <br />
                                </span>

                                <span> Подставка: 
                                    <b> 40*20*15 </b>
                            <br />
                                </span>

                                <span> Стела: 
                                    <b> 60*40*5 </b>
                            <br />
                            <br />
                                </span>

                                <span class="prod_cover_description-t"> 
                                    Описание
                            <br />
                                </span>

                                <p class="prod_cover_description">
                                   {{ Description }}
                                </p>
                                
                                <p style="width: 90vw;"><hr style="margin: 60px 0px 0px 0px;" /></p>

                            <div class="prod_buttom_seeAll ">
                                
                                <router-link :to="'/catalog'" >Перейти в каталог</router-link>
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
