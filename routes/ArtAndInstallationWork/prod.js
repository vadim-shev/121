import NavigationPart from './../../templates/staticParts/Navigation/script.js'
import FooterPart from './../../templates/staticParts/Footer.js'
import scrollMixin from './../../mixins/scrollMixin.js'
import paginationMixin from './../../mixins/productsPaginationMixin.js'

export default {
    mixins: [scrollMixin, paginationMixin],
    components: {
        NavigationPart,
        FooterPart
    },
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: 55px; top: 0;">
                <navigation-part></navigation-part>
            </header>
            <main>
                <div style="position: relative;">
                    <h1 class="tagline" style="text-align: center; font-weight: 100;">{{ productName }}</h1>
                    <div class="product-img-container">
                        <img :src="productImage" 
                             :alt=""
                              class="product-image">
                    </div>
                    <div class="product-details">
                            <h3 class="product-name">
                                {{ productName }}
                            </h3>
                            <p class="product-price">
                                {{ productPrice }}
                            </p>
                    </div>
                </div>
            </main>
            <footer id="contact">
                <div>
                    <section class='vt-container'>
                        <footer-part></footer-part>
                    </section>
                </div>
            </footer>
        </div>
    `,
    data() {
        return {
            currentPageKey: this.$route.params.id || 'default',
            productName: "",
            productPrice: "",
            productImage: ""
        }
    },
    watch: {
        '$route.params.currentPageKey': {
            immediate: true,
            handler(newVal) {
                this.currentPageKey = newVal || 'default';
            }
        }
    },
    mounted() {
        this.fetchAPI('./data/arts.json')
            .then(data => {
                this.products = data;
                this.products.forEach(product => {
                    product.path = '/art/' + product.id;
                });
                this.computedDisplayedProducts = this.products; // Assign products to the renamed computed property
                if( this.computedDisplayedProducts[this.$route.params.id - 1].id == this.$route.params.id) {
                    console.log("true") 
                    this.productName = this.computedDisplayedProducts[this.$route.params.id - 1].name
                    this.productImage = this.computedDisplayedProducts[this.$route.params.id - 1].image
                    this.productPrice = this.computedDisplayedProducts[this.$route.params.id - 1].price
                } else {
                    console.log("false")
                }
                // console.log(this.computedDisplayedProducts[0].id)

            })
            .catch(error => {
                console.error('Problem:', error);
            });
    }
}