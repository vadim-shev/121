export default { 
    props: ['src'],	
    data() {
		return {
            Item: [],     
            Maters: [],     
            hasMounted: false,
            currentSection: '',
            materialScale: "1",
            materialRotateY: "-30deg",
            materialRotateX: "45deg",
            materialTranslate: "4.5rem",     
                materialSrc: []
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
        }, 
        MaterialsList() {
            return {materialTransform: `transform: scale(${this.materialScale}) rotateY(${this.materialRotateY}) rotateX(${this.materialRotateX}) translateZ(${this.materialTranslate});`}
        }   
    },
	methods: {
        moveS() {
            document.querySelectorAll(".materials_object").forEach((items) => {
                this.Maters.push(items)
            console.log(this.Maters.length);
            })
        },
        controlMaterialObject(i, options) {
       
          const materialObject = document.querySelectorAll(".materials_object");
          if (!materialObject[i]) {
            console.error("materials_object not found!");
            return;
          }

          // Apply transformations dynamically
          if (options.scale) this.materialScale = options.scale;
          if (options.rotateY) this.materialRotateY = options.rotateY;
          if (options.rotateX) this.materialRotateX = options.rotateX;
          if (options.translateZ) this.materialTranslate = options.translateZ;

          // Apply dynamic styles to the materials_object
          materialObject[i].style.transform = `scale(${this.materialScale}) rotateY(${this.materialRotateY}) rotateX(${this.materialRotateX}) translateZ(${this.materialTranslate})`;

          // Add or remove classes dynamically
          if (options.addClass) materialObject[i].classList.add(options.addClass);
          if (options.removeClass) materialObject[i].classList.remove(options.removeClass);
        },
		handleScroll() {          
            this.displayViewportElement()

             // const materialObjectClass = document.querySelectorAll(".materials_object");

  if (this.isElementInViewport('materials')) {
    this.controlMaterialObject(0, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on",
      removeClass: "transform_off",
    });
    this.controlMaterialObject(1, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on1",
      removeClass: "transform_off1",
    });
    this.controlMaterialObject(2, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on2",
      removeClass: "transform_off2",
    });
  } else {
    this.controlMaterialObject(0, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off",
      removeClass: "transform_on",
    });
    this.controlMaterialObject(1, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off1",
      removeClass: "transform_on1",
    });
    this.controlMaterialObject(2, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off2",
      removeClass: "transform_on2",
    });
  }

                // document.querySelector('.materials_image').classList.add("transform_on")
            
            // else {
            // document.querySelectorAll(".materials_object").forEach((item, index) => {
            //     item.classList.remove("transform_on")
            //     item.style.marginTop = `${0 * 100}px`
            // })
                // document.querySelector('.materials_image').classList.remove("transform_on")
            
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
            return  document.getElementById(element).getBoundingClientRect().top < window.innerHeight - 400 
                        && document.getElementById(element).getBoundingClientRect().bottom > 0 
        },
        scrollAction(elementId) { // Прокрутить страницу к указанному elementId 
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        updateMenu() {
            document.querySelectorAll(".menuItem").forEach((item) => {
                this.Item.push(item.id)
            })
            document.querySelectorAll(".materials_object").forEach((items) => {
                this.Maters.push( document.getElementById("materials"))
            // console.log(this.Maters[0]);
            })
            // document.querySelectorAll(".materials_object").forEach((material) => {
            //     this.Maters.push(material)
            // })
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
    convertToArray(prop, symbol) {
      return prop.split(symbol);
    }
    },
   mounted() {
        this.updateMenu();
    if (!this.hasMounted) {
        this.hasMounted = true;
        window.addEventListener("load", this.displayViewportElement);
        window.addEventListener("scroll", this.handleScroll);
        this.materialSrc[0] = "./assets/materials/0.png"
        this.materialSrc[1] = "./assets/materials/1.png"
        this.materialSrc[2] = "./assets/materials/gabbro.jpg"
       console.log(this.materialSrc);
       console.log(this.materialSrc[0]);
       console.log(this.materialSrc[1]);
       console.log(this.materialSrc[2]);
       // console.log(this.Maters[0].lastElementChild.previousElementSibling);
    }
},
beforeDestroy() {
        console.log(this.nextTodoId)
    window.removeEventListener("scroll", this.handleScroll);
}
}