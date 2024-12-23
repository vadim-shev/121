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
        },
        parallax(e) {
            
    const elem = document.querySelector("#parallax");
     let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
        },
    },
    mounted() {
       this.updateMenu()
        window.addEventListener("load", this.displayViewportElement)
        window.addEventListener("scroll", this.handleScroll)
        window.addEventListener("mousemove", this.parallax)

    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    }
}