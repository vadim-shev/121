export default {
	data() {
		return {
			isScrolled: false,
            currentSection: 'Главная',
            
        }
	},
    computed: {

    },
	methods: {
		handleScroll(event) {           
            for (const sectionId in this.sectionNames) {
                if (this.sectionNames.hasOwnProperty(sectionId)) {
                    const sectionName = this.sectionNames[sectionId]
                    const element = document.getElementById(sectionId)
                    const elementRect = element.getBoundingClientRect()
                    const windowTopPos = this.$refs.scrollContainer.scrollTop
                    const windowBottomPos = windowTopPos + window.innerHeight

                    const isTopVisible = elementRect.top >= 0 && elementRect.top < window.innerHeight / 2

                    if (isTopVisible) {
                        this.currentSection = sectionName
                        break
                    }
                }
            }
            console.log('12')
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        fetchAPI(pathToFile) {
            return fetch(pathToFile)
                .then(response => {
                    if (!response.ok) throw new Error('NOT ok!');
                    return response.json();
                });
        },
	},
    mounted() {

        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
  console.log(START_LOCATION)
    }
}