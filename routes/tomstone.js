import NavigationPart from './../templates/staticParts/Navigation/script.js'

import FooterPart from '../templates/staticParts/Footer.js'

export default {
    mixins: [],
    components: { NavigationPart, FooterPart},
    template: `
        <div ref="scrollContainer" id="p">
            <header style="position: relative; height: 55px; top: 0;" class="menuItem" id="up">
                <navigation-part   :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <p>
                Не менее важным, а также исцеляюящим эяятапом в процессе тяжелой утраты является выбор подходящего памятника.
</p>
                <p>
Памятник обеспечивает длительную память о жизни родного человека
                </p>
                
                
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
            currentSection: ''
        }
    },
    mounted() {
        
    }
}