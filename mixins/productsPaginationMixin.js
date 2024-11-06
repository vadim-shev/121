export default {
	data() {
    	return {
      products: [],
      currentPage: 1, // Ensure this is only in data

                     itemsPerPage: 9,
    	}
	},
	computed: {
		  computedDisplayedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = this.currentPage * this.itemsPerPage;
            return this.products.slice(start, end);
        },
        pageCount() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        }
	},
	mounted() {
		
	},
	methods: {
		  	changePage(pageNumber) { // принимает номер страницы на которую нужно переключиться
		  		window.scrollTo(0, 0)
		  		this.updateDisplayedProducts(pageNumber)
				this.setCurrentPage(pageNumber)
			},
			updateDisplayedProducts(pageNumber) {
	  			const startIndex = (pageNumber - 1) * this.itemsPerPage // вычисляем индекс начального элемента, учитывая кол-во элементов на каждой странице. Показывает с какого элемента начать отображение на текущей странице
	  			const endIndex = pageNumber * this.itemsPerPage // вычисляем индекс последнего элемента, учитывая кол-во элементов на каждой странице. Показывает на каком элементе закончить отображение на текущей странице
	  			const newProducts = this.products.slice(startIndex, endIndex)  // извлечения подмассива продуктов, который содержит продукты для текущей страницы

				this.computedDisplayedProducts.splice(0, this.computedDisplayedProducts.length, ...newProducts) // удаляем все элементы из массива displayedProducts. Затем добавляем новые продукты из newProducts с помощью оператора распространения (...newProducts)
			},
			setCurrentPage(pageNumber) {
				this.currentPage = pageNumber
				
			},
			hidePagination(src) {
				if(src.length < this.itemsPerPage) document.getElementById('saa').style.display = "none"
			},
		fetchAPI(pathToFile) {
			return fetch(pathToFile).then(response => {
				if( !response.ok ) throw new Error('NOT ok!')

				return response.json()
			})
		}
    },
	beforeRouteEnter(to, from, next) {
		window.scrollTo(0, 0)

		next()
	}
}