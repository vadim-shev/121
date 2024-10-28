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
		currentSectionTO(numb) {
            if(this.currentSection = '' ) this.currentSection = this.Item[numb] 
            window.scrollTo(0,0)
        }
	},
    mounted() {
        
    }
}