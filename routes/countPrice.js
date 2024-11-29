
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
                    Посчитать стоимость изделия
                </h2>
                <ul>
                    <h3>Тип надгробия</h3>
                    <p>Плоский</p>
                    <p>Волнистый</p>
                    <p>Срезанный</p>
                    <p>Закругленный</p>
                    <p>Нестандартный</p>
                </ul>
                <ul>
                    <h3>Гравиеровка</h3>
                    <p>100 грн за букву</p>

                </ul>
                <ul>
                    <h3>Материал</h3>
                    <p>Серый</p>
                    <p>Черный</p>
                    <p>Синий</p>

                </ul>
                <ul>
                    <h3>Установка</h3>
                    <p>Свободное место</p>
                    <p>Выбрать место</p>

                </ul>
                <ul>
                    <h3>Обслуживание</h3>
                    <p>Уборка</p>
                    <p>Очистка</p>

                </ul>
                
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