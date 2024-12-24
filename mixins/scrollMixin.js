export default {
	data() {
		return {
            Item: [],     
            currentSection: ''     
        }
	},
    computed: {
        basePage() {
            return this.$router.options.history.base
        },
        prevPage() {
            return this.$router.options.history.state.back
        },
        currentPages() {
            return this.$router.options.history.state.current
        },
        nextPage() {
            return this.$router.options.history.state.forward
        },
        productId() {
            return this.products[this.$route.params.id - 1]
        }
            
    },
	methods: {
		handleScroll() {          
            this.displayViewportElement()
        },
        displayViewportElement() {
            this.currentSection = this.Item[0]
            this.Item.forEach(item => { // Перебирает каждый item в Item и для каждого выполняeт код
                if(document.getElementById(item)) { // Существует ли такой element
                    if(this.isElementInViewport(item)) this.currentSection = item // Eсли item в поле зрения
                }
            })

        },
        isElementInViewport(element) { // Проверяем, находится ли указанный element в поле зрения
            return  document.getElementById(element).getBoundingClientRect().top < window.innerHeight - 600 
                        && document.getElementById(element).getBoundingClientRect().bottom > 0 
        },
        scrollAction(elementId) { // Прокрутить страницу к указанному elementId 
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        updateMenu() {
            document.querySelectorAll(".menuItem").forEach((item) => {
                this.Item.push(item.id)
            })
        },
        clickTarget(clickedItem) {
            this.currentSectionPosition !== clickedItem ? this.scrollAction(clickedItem) : this.scrollAction(this.Item[0])
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
        }
    },
    mounted() {
       this.updateMenu()
        window.addEventListener("load", this.displayViewportElement)
        window.addEventListener("scroll", this.handleScroll)
        let arr = []
        console.log(document.querySelectorAll(".materials_object")[1])
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    }
}