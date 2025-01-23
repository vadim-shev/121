

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
                <div style="background-color: white; height: 100%;  width: 100vw; height: auto; z-index: 1000;" class="prod_container menuItem"  id="prod">
                    <!-- <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%;"> -->
                        <img style="width: 150px; height: 300px; padding: 40px 25px;" :src="Imagee" />

                    <!-- </div> -->
                    

                    <div class="prod_cover">
                        <div class="prod_cover_info">

                            <div class="prod_arrows_container">
                                <span>
                                    <b>{{ Price }}</b>
                                </span>
                                <button>Купить</button>
                            </div> 

                           <div class="prod_arrows_container"> 
                                <router-link class="tombstone-routerLink" :to="'/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) - 1)">
                                    <img src="./assets/catalog/left-arrow.svg" />
                                    <b>Предыдущий мемориал</b>
                                </router-link>
                                <router-link class="tombstone-routerLink" :to="'/'+this.$route.params.product+'/'+Math.abs(Number($route.params.id) + 1)">
                                    <b>Следующий мемориал</b>
                                    <img src="./assets/catalog/right-arrow.svg" />
                                </router-link> 
                            </div> 

                            <div > 
                                 <div class="dropdown" :class="computedClasses" @click="this.toggleClass" >
    
      
        <b>Текущий раздел: {{ selectedMemorial }}</b>
    
    
    <div  class="dropdown-content" >
      <a 
        v-for="(memorial, index) in this.memorials" 
        :key="index" 
        
        class="dropdown-item"  :class="{ active: selectedIndex === index }"
        @click="selectMemorial(memorial, index)"
      >
        {{ memorial }}

      </a>
    </div>
  </div>
                            </div>  

                            <div class="prod_cover_container"    >
                                <div style="display: flex; width: 100%; height: auto; padding: 3rem 1rem;  
    flex-direction: column; 
    justify-content: space-between; ">
                                <div style="display: flex; flex-direction: row; justify-content: space-between; width: 85vw;">
                        <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start;">
                            <p> Каталог: 
                                        <b> {{ Category }} </b>
                                        <br />
                                    </p>
                                    <p> Модель: 
                                        <b> {{ Model }} </b>
                                    </p>
                                    <p> Материал: 
                                        <b> Гранит </b>
                                        <br />
                                    </p>
                                    <p> Наличие: 
                                        <b style="color: green;"> Есть </b>
                                        <br />
                                    </p>
                                        <router-link class="prime_btn"  :to="'/'" >Перейти на главную   </router-link>
                        </div>
                                    <!-- <img :src="Ds" style="width: 40%; height: 35%; float: left;" /> -->

                                </div>
                        
                                    

                                    <!-- <div></div> -->
                                        <!-- <router-link  >Перейти в каталог</router-link> -->
                                </div>
                                    <div style="width: 100%; height: auto;">
                                        <div style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100vw;">
                                           <img 
        v-for="(item, index) in products" 
        :key="index" 
        :src="item.description"  
        style="width: 150px; max-height: 350px; height: 100%;" 
    />
                                            
                                        </div>
                                    </div>
                               

                                
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
            selectedIndex: null,
    isActive: false,
    currentSection: '',
    currentPageKey: 'prodIndex',
    Name: '',
    Imagee: '',
    Price: '',
    ID: '',
    Category: '',
    Model: '',
    Serial: '',
    products: [], // <-- Initialize Ds here
    memorials: ['формы', 'резка сердца', 'резка крест', 'резка розы', 'резка деревьев', 'резка винограда'],
    selectedMemorial: 'Выберите раздел'
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
        },
        toggleClass() {
      this.isActive = !this.isActive;
    }
    },
     mounted() {
        // document.querySelector('.main-prod').classList.add('nested-enter-from') 
        this.fetchProduct(`${'./data/'+this.$route.params.product}.json`, `${this.$route.params.product}`)
        // if (true) {}
        // this.fetchProduct('./data/vertical.json', 'vertical')
       
        this.fetchAPI('./data/vertical.json')
            .then(data => {
                  const productId = Number(this.$route.params.id);  // Преобразуем id в число

        if (0 <= this.$route.params.id && this.$route.params.id <= 5) {
            console.log(`Fetching products for id between 0 and 5:`);
            this.products = data.slice(0, 5);  // Загружаем первые 5 продуктов
             this.products.forEach(product => {
            product.description = product.description;  // Дополнительная обработка
        });
        } else if (this.$route.params.id > 5 && this.$route.params.id <= 15) {
            console.log(`Fetching products for id between 0 and 5:`);
            this.products = data.slice(6, 15);  // Загружаем первые 5 продуктов
        } else if (this.$route.params.id > 15 && this.$route.params.id <= 30) {
            console.log(`Fetching products for id between 0 and 5:`);
            this.products = data.slice(31, 70);  // Загружаем первые 5 продуктов
        } else if (this.$route.params.id > 30 && this.$route.params.id <= 70) {
            console.log(`Fetching products for id between 0 and 5:`);
            this.products = data.slice(71, 78);  // Загружаем первые 5 продуктов
        } else if (this.$route.params.id > 70 && this.$route.params.id <= 78) {
            console.log(`Fetching products for id between 0 and 5:`);
            this.products = data.slice(79, 87);  // Загружаем первые 5 продуктов
        }else if (this.$route.params.id >= 78 && this.$route.params.id <= 86) {
            // console.log(`Fetching products for id between 0 and 5:`);
            // this.products = data.slice(78, 5);  // Загружаем первые 5 продуктов
        }

        this.products.forEach(product => {
            product.description = product.description;  // Дополнительная обработка
        });
  })
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
    },
  computed: {
    computedClasses() {
      return {
        'is-active': this.isActive
      };
    }
  },
  methods: {
    

    
  }
};
