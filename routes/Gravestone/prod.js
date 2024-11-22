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
            <header class="menuItem" id="up" style="position: relative; height: 55px; top: 0;">
                <navigation-part  :newItem="currentSection"></navigation-part>
            </header>
            <main class="menuItem" id="prod">
                <div style="position: relative;">
                    <h1 class="tagline" style="text-align: center; font-weight: 100;">{{ Name }}</h1>
                    <div class="product-img-container">
                        <img :src="Image" 
                             alt=""
							  class="product-image">
                    </div>
                    <div class="product-details">
                            <h3 class="product-name">
                            	{{ Name }}
                            </h3>
                            <p class="product-price">
                            	{{ Price }}
                            </p>
                    </div>
                </div>
            </main>
            <footer class="menuItem"  id="contact">
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
            Name: "",
            Price: "",
            Image: ""
        }
    },
    mounted() {    

        this.fetchAPI('./data/gravestones.json')
            .then(data => {
                this.products = data
                this.products.forEach(product => {
                    product.path = '/gravestone/' + product.id;
                });

                this.Name = this.productId.name
                this.Price = this.productId.price
                this.Image = this.productId.image
            })
            .catch(error => {
                console.error('Problem:', error);
            });
    }
}
