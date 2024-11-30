
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
                    <h4>Тип надгробия: {{ type_selected }}</h4> 
                    <select v-model="type_selected">
                        <option>Вертикальный</option>
                        <option>Горизонтальный</option>
                    </select>
                    <h3>Гравиеровка: {{ message_picked }}</h3>
                <ul>
                    <input id="message_COUNT" value="450" placeholder="100 грн за букву"  v-model="message_picked"  />

                </ul>
                    <h3>Материал: {{ material_picked }}</h3>
                <ul>
                    
                    <li>
                        <input type="radio" id="material_RED" value="100" v-model="material_picked" />
                        <label for="material_RED">Красный</label>
                    </li>
                    <li>
                        <input type="radio" id="material_BLACK" value="120" v-model="material_picked" />
                        <label for="material_RED">Черный</label>
                    </li>
                    <li>
                        <input type="radio" id="material_GRAY" value="110" v-model="material_picked" />
                        <label for="material_RED">Серый</label>
                    </li>
                    <li>
                        <input type="radio" id="material_BLUE" value="200" v-model="material_picked" />
                        <label for="material_RED">Синий</label>
                    </li>
                    <li>
                        <input type="radio" id="material_" value="300" v-model="material_picked" />
                        <label for="material_RED">Мрамор</label>
                    </li>
                    <li>
                        <input type="radio" id="material_" value="600" v-model="material_picked" />
                        <label for="material_RED">Бронза</label>
                    </li>
                     
                    
                    
                    

                </ul>
                    <h3>Установка: {{ installation_picked }}</h3>
                <ul>
                    <li>
                        <input type="radio" id="installation_RANDOM" value="250" v-model="installation_picked" />
                        <label for="material_RED">Стандартная</label>
                    </li>
                    <li>
                        <input type="radio" id="installation_CHOOSE" value="500" v-model="installation_picked" />
                        <label for="material_RED">С бетонным основанием</label>
                    </li>
                    
                    

                </ul>
                    <h3>Обслуживание: {{ maintenance_picked }}</h3>
                <ul>
                    <li>
                        <input type="radio" id="maintenance_CLEANING" value="200" v-model="maintenance_picked" />
                        <label for="maintenance">Уборка</label>
                    </li>
                    <li>
                        <input type="radio" id="maintenance_CLEARING" value="340" v-model="maintenance_picked" />
                        <label for="maintenance">Очистка</label>
                    </li>
                    
                    


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
            currentSection: '',
            type_picked: '',
            message_picked: "",
            material_picked : "",
            maintenance_picked : "",
            installation_picked : ""
        }
    },
    mounted() {
        
    }
}