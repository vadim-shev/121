export default {
    data() {
        return {
            
        
        }
    },
  computed: {
        currentPage() {
            return this.$route.path
        },
        prevPage() {
            return this.$router.options.history.state.back
        }
            
    },
	methods: {
		fetchAPI(pathToFile) {
            return fetch(pathToFile)
                .then(response => {
                    if (!response.ok) throw new Error('NOT ok!');
                    return response.json();
                });
        },
        updatePage() {

        }
	},
    mounted() {
        
    }
}