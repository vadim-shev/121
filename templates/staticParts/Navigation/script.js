import scrollMixin from './../../../mixins/scrollMixin.js'

export default {
    mixins: [ scrollMixin],
    props: {
        newItem: String
    },
    data() {
        return {
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
                    <li v-for="(item, index) in this.Item" :key="index" :class="{ 'active': item}">
                        <a class="tgt" @click="clickTarget(item)">{{ item }}</a>
                    </li>
                </ul>
            </aside>
        </div>  
    `,
    computed: {
        computedClasses() {
            return {
                'is-active': this.isActive
            }
        }
    }
}