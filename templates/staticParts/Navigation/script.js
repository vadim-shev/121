export default {
    props: {
        newItem: String
    },
    data() {
        return {
            items: ['Главная', 'Достижения', 'Продукция', 'Контакты'],
            isActive: false,
            currentSectionPosition: 'Главная'
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
        this.currentSectionPosition = this.newItem || 'Главная'
    },
    computed: {
        computedClasses() {
            return {
                'is-active': this.isActive
            }
        }
    },
    methods: {
        toggleClass() {
            this.isActive = !this.isActive
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        clickTarget(clickedItem) {
            let sectionId = ''

            switch (clickedItem) {
                case this.items[0]:
                    sectionId = 'prime'
                    break;
                case this.items[1]:
                    sectionId = 'whatwedo'
                    break;
                case this.items[2]:
                    sectionId = 'pricing'
                    break;
                case this.items[3]:
                    sectionId = 'contact'
                    break;
                default:
                    sectionId = 'prime'
            }

            this.currentSectionPosition !== clickedItem ? this.scrollAction(sectionId) : this.scrollAction('prime')
            this.toggleClass()
        }
    }
}