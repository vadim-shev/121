export default {
	data() {
		return {
            Item: [],
      isScrolled: false,
      currentSection: ''

            
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

                    this.checkElementsInViewport()
                }
            }
        },
        updateMenu() {
            document.querySelectorAll(".menuItem").forEach((item) => {
                this.Item.push(item.id)
            })
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },          
        checkElementsInViewport() {
            this.Item.forEach(item => {
                const element = document.getElementById(item)
                if (element) {
                    if (this.isElementInViewport(element)) {
                        this.currentSection = item

                    }
                }
            })

        },
        isElementInViewport(element) {
            const rect = element.getBoundingClientRect()
            return (
                rect.top < window.innerHeight - 200 && // Элемент частично или полностью в видимой части экрана
                rect.bottom > 0
            )
        }   
	},
    mounted() {
        window.addEventListener("load", this.checkElementsInViewport)
        window.addEventListener("scroll", this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener("load", this.checkElementsInViewport)
        window.removeEventListener("scroll", this.handleScroll)
    }
}