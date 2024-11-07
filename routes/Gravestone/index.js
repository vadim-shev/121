import NavigationPart from './../../templates/staticParts/Navigation/script.js'
import FooterPart from './../../templates/staticParts/Footer.js'
import CustomLink from './../../components/router-link/script.js'
import Clouds from './../../components/clouds/script.js'
import scrollMixin from './../../mixins/scrollMixin.js'
import paginationMixin from './../../mixins/productsPaginationMixin.js'

export default {
    mixins: [scrollMixin, paginationMixin,],
    components: { NavigationPart, FooterPart, CustomLink, Clouds },
    template: `
        <div ref="scrollContainer" id="p">
            <header style="position: relative; height: 55px; top: 0;" class="menuItem" id="up">
                <navigation-part   :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <div style="position: relative;">
                    <clouds speedValue="x1, x2, x3, x4, x5" scaleValue="0.2" colorValue="--granit-blue"></clouds>
                    <custom-link  parentClass="mid" pathTo="/" childClass="btn" value="На главную" id="prime"></custom-link>
                    <h1 class="tagline" style="text-align: center; font-weight: 100;">Памятники</h1>
                    <div>
                        <div id="product" class="menuItem" style="position: relative;">
                            <div class="product-catalog">
                                <router-link @click="updateMenu()"  :to="product.path" class="product product-item" v-for="(product, index) in computedDisplayedProducts" :key="index">
                                    <div class="product-img-container">
                                        <img :src="product.image" :alt="product.name" class="product-image">
                                    </div>
                                    <div class="product-details">
                                        <button class="add-to-cart-button">Заказать</button>
                                        <h3 class="product-name">{{ product.name }}</h3>
                                        <p class="product-price">{{ product.price }}</p>
                                    </div>
                                </router-link>
                            </div>
                            <!-- Пагинация -->
                            <div class="pagination-container">
                                <div class="pagination" id="saa">
                                    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)">{{ pageNumber }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
            <footer class="menuItem" id="contact">
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
            currentPageKey: 'gravestone',
            path: '/gravestone/',
            products: [],
            currentPage: 1,
            itemsPerPage: 9
        }
    },
    mounted() {
        this.fetchAPI('./data/gravestones.json')
            .then(data => {
                this.products = data;
                // this.updateDisplayedProducts(this.currentPage);
                this.products.forEach(product => {
                    product.path = '/gravestone/' + product.id;
                });
                // this.computedDisplayedProducts = this.products; // Assign products to the renamed computed property
                this.hidePagination(data)
                // console.log(this.products.length)
                // console.log(this.displayedProducts.length)
            })
            .catch(error => {
                console.error('Problem:', error);
            });
    }
}