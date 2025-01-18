import NavigationPart from './../templates/staticParts/Navigation/script.js'

import scrollMixin from './../mixins/scrollMixin.js'
import FooterPart from './../templates/staticParts/Footer.js'


export default {
  mixins: [scrollMixin],
  components: { NavigationPart, FooterPart },
  template: `
    <h1>{{this.$route.params.product}}</h1>
  `,
  data() {
    return {
      currentSection: '',
      currentPageKey: 'prodIndex',
     Name: '',
            Imagee: '',
            Price: '',
            ID: '',
            Category: '',
            Model: '',
            Serial: ''
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
