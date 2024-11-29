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
                <h2>
                    Надгробие с основанием
                </h2>
                <h2>
                    Окружение могилы
                </h2>
                
                
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