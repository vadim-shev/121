import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import FooterPart from './../templates/staticParts/Footer.js'


export default {
  mixins: [scrollMixin],
  components: { NavigationPart, FooterPart },
  template: `
    <button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show" ref="show">привет</p>
</Transition>
  `,
  data() {
    return {
      show: true
    };
  },
  methods: {
    async fetchAPI(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
  },
  mounted() {
    // const show = ref(true)
    // this.fetchProduct('./data/complex.json', 'complex')
    this.fetchProduct('./data/vertical.json', 'vertical')
  },
  watch: {
    '$route.params.id': function () {
      // this.fetchProduct('./data/complex.json', 'complex')
      this.fetchProduct('./data/vertical.json', 'vertical')
    },
  },
};
