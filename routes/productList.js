

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'

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
    // this.fetchProduct('./data/vertical.json', 'vertical')
  },
  watch: {
    '$route.params.id': function () {
      // this.fetchProduct('./data/complex.json', 'complex')
      // this.fetchProduct('./data/vertical.json', 'vertical')
    },
  },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
};
