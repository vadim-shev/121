
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
                <div id="prime" class="whatwedo"  >
                    <h2>
                        Новые надгробия
                    </h2>
                    <h2>
                        Обрамление могил
                    </h2>
                    <h2>
                        Реновация существующих надгробий
                    </h2>
                    <h2>
                        Добавление дополнительных надписей
                    </h2>
                    <h2>
                        Уход и обслуживание могил
                    </h2>
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
            currentSection: ''
        }
    },
    mounted() {
        
    }
}