export default {
	data() {
		return {
			isScrolled: false,
            currentSection: '',
            
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

            // console.log(elementRect)
            // console.log(document.getElementById("prime").getBoundingClientRect())
            // console.log(document.getElementById("prising").getBoundingClientRect())
            // console.log(document.getElementById("contact").getBoundingClientRect())
                    if (isTopVisible) {
                        this.currentSection = sectionName
                        break
                    }
                }
            }
            console.log(window.scrollY ) 
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        Action(elementId) {
            if(document.getElementById(elementId).getBoundingClientRect().bottom - 55 >= 0) this.currentSection = 'U'
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
            let y = window.scrollY 
            
        
            // if(document.getElementById(this.items[1]).getBoundingClientRect().bottom - 55 >= 0) this.currentSection = 'Продукция'
            // if(document.getElementById(this.items[2]).getBoundingClientRect().bottom - 55 >= 0) this.currentSection = 'Контакты'
            // if(document.getElementById(this.items[3]).getBoundingClientRect().bottom - 55 >= 0) this.currentSection = 'Контакты'

        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
  // console.log(START_LOCATION)
    }
}