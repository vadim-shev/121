export default {
	template: `
		<div>
	    <h1>{{ pageTitle }} </h1>
	    <!-- Контент страницы -->
	    <component :is="currentComponent"></component>
	  </div>
	`,
	data() {
		return {
			pageTitle: '',
      		currentComponent: null
		}
	},
	computed: {
		page() {
	      return this.$route.params.page;
	    }
	},
	watch: {
		page: 'loadPage'
	},
	mounted() {
		this.loadPage()
	},
	methods: {
		async loadPage() {
	      switch (this.page) {
	        case 'ArtAndInstallationWork':
	          this.pageTitle = 'Art and Installation Work';
	          this.currentComponent = () => import('./routes/ArtAndInstallationWork/index.js');
	          break;
	        case 'Gravestone':
	          this.pageTitle = 'Gravestone';
	          this.currentComponent = () => import('./routes/Gravestone/index.js');
	          break;
	        case 'Platform':
	          this.pageTitle = 'Platform';
	          this.currentComponent = () => import('./routes/Platform/index.js');
	          break;
	        case 'TableAndBench':
	          this.pageTitle = 'Table and Bench';
	          this.currentComponent = () => import('./routes/TableAndBench/index.js');
	          break;
	        default:
	          this.pageTitle = 'Page Not Found';
	          this.currentComponent = null;
	      }
	}
}
}