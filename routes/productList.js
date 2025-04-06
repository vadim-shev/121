import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'
// import ModalBtn from './../components/modal.js'

import scrollMixin from './../mixins/scrollMixin.js'
import groupProducts from './../mixins/groupProducts.js'
// import groupProducts from './../mixins/groupProducts.js'
export default {
        mixins: [scrollMixin, groupProducts],
        components: { NavigationPart, FooterPart },
        template: `
                <div ref="scrollContainer" :key="currentPageKey" id="p">
                        <header style="position: relative; height: auto;" class="menuItem" id="header">
                                <navigation-part style="width: 100vw;" :newItem="this.Imagee[0]?.category"></navigation-part>
                        </header>
                        <main class="main-prod">
                                <div style="background-color: white; margin: 10vh 0 0 0; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: auto;" class="prod_container menuItem" id="prod">
                                        <div v-for="(group, name) in groupedImages" :key="name" >
                                                <div>
                                                        <h3 style="margin: 2vh 2vw; text-align: center; color: var(--color-5); font-size: 30px;">{{ name }}</h3>
                                                        <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 2vh 0vw;">
                                                                <router-link    
            
                                                                        v-for="(image, index) in group" 
                                                                        :key="index" 
                                                                        :to="'/' + $route.params.product + '/' + image.id" 
                                                                        :style="{ backgroundImage: 'url(' + image.image + ')', height: '120px', width: '80px' }" 
                                                                        id="Imagee1">
                                                                </router-link>
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
                        s: '',
                        // k: 5,
                        currentPageKey: this.$route.params.product,
                        Imagee: [],
                        Groups: [],
                        groupArr: ['Форма', 'Резка сердце', 'Резка крест', 'Резка розы', 'Резка ветки', 'Резка виноград']
                };
        },
        methods: {
                async fetchProducts(url) {
                        try {
                                const response = await fetch(url);
                                const data = await response.json();
                                if (Array.isArray(data) && data[0] && data[0].hasOwnProperty('inStock')) {
                                        return data;
                                } else {
                                        throw new Error('Invalid product data or missing "inStock" property');
                                }
                        } catch (error) {
                                console.error('Error fetching product data:', error);
                                return [];
                        }
                },
        },
         mounted() {
                // try {
                //         const productParam = this.$route.params.product;
                //         if (!productParam) {
                //                 throw new Error('Product parameter is missing in the route');
                //         }
                //         const url = `./data/${productParam}.json`;
                //         const response = await this.fetchProducts(url);
                //         if (response && response.length > 0) {
                //                 this.Imagee = response;
                //         } else {
                //                 console.error('No products found in the fetched data');
                //         }
                // } catch (error) {
                //         console.error('Error during mounted hook:', error.message);
                //         this.$emit('error', error.message); // Emit an error event for better handling
                // }
console.log(this.$route.params.currentPageKEY)
                
            // this.$route.params.groups = this.groupArr
            // console.log(this.getGroupByIndex(11))
            // console.log(this.countGroupsAmount())
            // console.log(this.getGroupByIndex(this.$route.params.id))
                // console.log(this.$route)
                // console.log(this.countChosenGroup(this.groupArr[0]))
                // console.log(`${this.groupArr[1]}`+this.countChosenGroup(this.$route.params.group[1]))
                // console.log(this.countChosenGroup(this.groupArr[2]))
                // console.log(this.countChosenGroup(this.groupArr[3]))
                // console.log(this.countChosenGroup(this.groupArr[4]))
                // console.log(this.countChosenGroup(this.groupArr[5]))
                // console.log(this.countTotalItems())
                // console.log(this.getGroupByIndex(72))
                // console.log(this.groupedImages[this.groupArr[5]].length)
                // console.log(this.countGroupsAmount())
        },
        computed: {
                

        },
        beforeRouteEnter(to, from, next) {
                window.scrollTo(0, 0);
                next();
        },
};
