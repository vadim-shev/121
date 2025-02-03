

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'
import ModalBtn from './../components/modal.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart, ModalBtn },
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: auto;" class="menuItem" id="header">
                <navigation-part style="width: 100vw;" :newItem="currentSection"></navigation-part>
            </header>
            <main class="main-prod">
                <div style="background-color: white; height: 100%; width: 100vw; height: auto; z-index: 1000;" class="prod_container menuItem" id="prod">
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%;">
                        <img id="Imagee" :src="Imagee" style="margin: 40px 25px; padding: 40px 25px; " />
                    </div>

                    <div class="prod_cover">
                        <div class="prod_cover_info">
                            <div class="prod_arrows_container">
                                <span><b>{{ Price }}</b></span>
                                <button @click="openModal">Купить</button>

                                <!-- Modal -->
                                <div v-if="isModalOpened" class="modal-mask" @click="closeModal">
                                    <modal-btn></modal-btn>
                                </div>
                            </div> 

                            <!-- Other content -->
                            <div class="prod_arrows_container"> 
                                <router-link class="tombstone-routerLink" :to="'/'+$route.params.product+'/'+Math.abs(Number($route.params.id) - 1)">
                                    <img src="./assets/catalog/left-arrow.svg" />
                                    <b>Предыдущий мемориал</b>
                                </router-link>
                                <router-link class="tombstone-routerLink" :to="'/'+$route.params.product+'/'+Math.abs(Number($route.params.id) + 1)">
                                    <b>Следующий мемориал</b>
                                    <img src="./assets/catalog/right-arrow.svg" />
                                </router-link>
                            </div>

                            <div class="dropdown" :class="computedClasses" @click="toggleClass">
                                <b>Текущий раздел: {{ selectedMemorial }}</b>
                                <div class="dropdown-content">
                                    <a v-for="(memorial, index) in memorials" :key="index" class="dropdown-item" :class="{ active: selectedIndex === index }" @click="selectMemorial(memorial, index)">
                                        {{ memorial }}
                                    </a>
                                </div>
                            </div>  

                            <div class="prod_cover_container">
                                <div style="display: flex; width: 100%; height: auto; padding: 3rem 1rem; flex-direction: column; justify-content: space-between;">
                                    <div style="display: flex; flex-direction: row; justify-content: space-between; width: 85vw;">
                                        <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start;">
                                            <p> Каталог: <b>{{ Category }}</b> </p>
                                            <p> Модель: <b>{{ Model }}</b> </p>
                                            <p> Материал: <b> Гранит </b></p>
                                            <p> Наличие: <b style="color: green;"> Есть </b> </p>
                                            <router-link class="prime_btn" :to="'/'">Перейти на главную</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 100%; height: auto;">
                                    <div style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100vw;">
                                        <img id="Imagee1" :src="Ds" style="margin: 10px 25px; padding: 0px 25px; " />
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
            isModalOpened: false, // Add this line

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
            Ds: '',
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
        },
        openModal() {
            this.isModalOpened = true; // Open the modal
        },
        closeModal() {
            this.isModalOpened = false; // Close the modal
        },
        selectMemorial(memorial, index) {
            this.selectedMemorial = memorial;
            this.selectedIndex = index;
        }
    },
    async mounted() {
        await this.fetchProduct(`${'./data/' + this.$route.params.product}.json`, `${this.$route.params.product}`);
    },
    watch: {
        '$route.params.id': function(newId, oldId) {
            this.fetchProduct(`${'./data/' + this.$route.params.product}.json`, `${this.$route.params.product}`);
        }
    },
    computed: {
        computedClasses() {
            return {
                'is-active': this.isActive
            };
        }
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0);
        next();
    },
    beforeRouteUpdate(to, from, next) {
        if (to.params.id !== from.params.id) {
            this.fetchProduct(`${'./data/' + to.params.product}.json`, `${to.params.product}`);
        }
        next();
    }
};
