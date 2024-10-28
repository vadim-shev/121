export default {
	data() {
		return {
            Item: [],
            isScrolled: false,
            currentSection: ''            
        }
	},
	methods: {
		handleScroll() {           
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
        },
        scrollAction(elementId) {
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        updateMenu() {
            document.querySelectorAll(".menuItem").forEach((item) => {
                this.Item.push(item.id)
            })
        },
        clickTarget(clickedItem) {
            this.currentSectionPosition !== clickedItem ? this.scrollAction(clickedItem) : this.scrollAction(this.items[0])
            this.toggleClass()
        },
        toggleClass() {
            this.isActive = !this.isActive
        },
        fetchAPI(pathToFile) {
            return fetch(pathToFile).then(response => {
                if (!response.ok) throw new Error('NOT ok!')
                    return response.json()
            })
        },
    },
    mounted() {
        this.updateMenu()
        // this.currentSectionTO(0)SSS

        window.addEventListener("load", this.handleScroll)
        window.addEventListener("scroll", this.handleScroll)

    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    }
}