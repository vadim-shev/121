
import NavigationPart from './../templates/staticParts/Navigation/script.js'

import FooterPart from '../templates/staticParts/Footer.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart},
    template: `
        <div ref="scrollContainer" id="p"  style="    background-color: var(--color-1);" >
            <header style="position: relative; height: 55px; top: 0;" class="menuItem" id="up">
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <div class="care_container">
                    <section class="care_section">
                        <h1 class="heading_1">
                            Установка памятников
                        </h1>
                        <div class="care_list_container">
                            <div>
                                <ul>
                                    <li>Новое надгробие</li>
                                    <li>Обрамление могил</li>
                                    <li>Реновация существующих надгробий </li>
                                    <li>Добавление дополнительных надписей </li>
                                    <li>Обновление существующих надписей </li>
                                </ul>
                            </div>
                            <div style="display: none;"> 

                                <div>
                                    <p style="    font-size: 16px; letter-spacing: .025em; line-height: 24px;">
                                        Вам нужно лишь предоставить мастерам следующую информацию:
                                    </p>
                                </div>
                                <ul style="    list-style-type: disc; margin-bottom: 1.25em; margin-top: 1.25em; padding-inline-start: 1.625em;">
                                    <li>название места захоронения</li>
                                    <li>номер участка под захоронение</li>
                                    <li>предпочтения по дизайну</li>
                                    <li>фотографии и информацию для нанесения на табличку или надгробие</li>
                                </ul>
                                <span style="font-weight: bold;">
                                    Важно помнить о том, что 
                                </span>
                                <p>
                                    не рекомендуется также спешить с установкой надгробия - осадка грунта происходит в течение года, и лишь после этого рекомендуется проводить монтаж мемориала на месте захоронения. 
                                </p>
                                
                            </div>
                            <button class="btn_order">Заказать памятник</button>
                        </div>
                    </section>
                    <section  class="care_section">
                        <h2 class="heading_1">
                            Уход и обслуживание могил
                        </h2>
                        <div  class="care_list_container">
                            <div>
                                <ul >
                                    <li>Реставрация и очистка мемориала</li>
                                    <li>Реставрация надписей</li>
                                    <li>Добавление надписей на мемориал</li>
                                    <li>Прополка и очистка лишней земли </li>
                                    <li>Повторное цементирование участка</li>
                                    <li>Перекладка и/или обновление могильного щебня</li>
                                </ul>
                            </div>
                            <button class="btn_order">Заказать уход</button>
                        </div>
                    </section>
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
        
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
}