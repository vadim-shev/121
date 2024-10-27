import fetchMixin from './../../../mixins/fetchMixin.js'
import scrollMixin from './../../../mixins/scrollMixin.js'

export default {
    mixins: [fetchMixin, scrollMixin],
    props: {
        newItem: String
    },
    data() {
        return {
            items: [],
            isActive: false,
            currentSectionPosition: 'asd'
        }
    },
    template: `  
        <div class="nav-bar nav-bar-style">
            <div class="nav-bar-container">
                <span class="highlight">{{ newItem }}</span>
            </div>
            <button class="hamburger int-hamburger " :class="computedClasses" @click="toggleClass">
                <span class="hamburger-container">
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </span>
            </button>
            <aside :class="{ 'menu-open': isActive }" class="menu">
                <ul>
                    <li v-for="(item, index) in items" :key="index" :class="{ 'active': item}">
                        <a class="tgt" @click="clickTarget(item)">{{ item }}</a>
                    </li>
                </ul>
            </aside>
        </div>  
    `,
    mounted() {
        this.updateMenu();
        
        // Загружаем элементы
        this.items = this.Item.slice(0, 4);
        
        // Проверка видимости элементов
        this.checkElementsInViewport();
        
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("load", this.checkElementsInViewport); // Проверка при загрузке
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    computed: {
        computedClasses() {
            return {
                'is-active': this.isActive
            }
        }
    },
    methods: {
        checkElementsInViewport() {
            this.items.forEach(item => {
                const element = document.getElementById(item);
                if (element) {
                    const isInViewport = this.isElementInViewport(element);
                    if (isInViewport) {
                        console.log(`Элемент "${item}" в зоне видимости!`);
                        this.onElementInView(element); // Вызываем действие
                    }
                } else {
                    // console.warn(`Элемент с ID "${item}" не найден.`);
                }
            });
        },
        isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top < window.innerHeight - 200 && // Элемент частично или полностью в видимой части экрана
                rect.bottom > 0
            );
        },
        onElementInView(element) {
            // console.log(`Действие для элемента "${element.id}"!`);
            // Здесь можно добавить любые действия, например, анимацию или изменение стилей
        },
        toggleClass() {
            this.isActive = !this.isActive;
        },
        clickTarget(clickedItem) {
            this.currentSectionPosition !== clickedItem ? this.scrollAction(clickedItem) : this.scrollAction(this.items[0]);
            this.toggleClass();
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        handleScroll() {
            this.checkElementsInViewport(); // Проверяем видимость при прокрутке
        }
    }
}