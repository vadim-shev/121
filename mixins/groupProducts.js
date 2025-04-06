// In the parent component (productList.js or wherever the parent is rendering this child):
// <product-list :groupArr="['Форма', 'Резка сердце', 'Резка крест', 'Резка розы', 'Резка ветки', 'Резка виноград']" />

// In the child component (your code for the product list):
export default {
    props: {
    },
    data() {
        return {
            Imagee: [],  // Your product images
            currentPageKey: 'some-unique-key',
            Groups: [],
            groupArr: ['Форма', 'Резка сердце', 'Резка крест', 'Резка розы', 'Резка ветки', 'Резка виноград']
        };
    },
    methods: {
        async fetchProducts(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (Array.isArray(data) && data[0] && data[0].hasOwnProperty('inStock')) {
                    return data;
                } else {
                    throw new Error('Invalid product data or missing "inStock" property');
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
                return [];
            }
        },
        groupImagesByName() {
            const groups = {};
            this.Imagee.forEach((item) => {
                const name = item.name || 'Unknown';
                if (!groups[name]) {
                    groups[name] = [];
                }
                groups[name].push({
                    ...item,
                    id: item.id,
                    name: item.name,
                    serial: item.serial
                });
            });
            return groups;
        },
         countGroupsAmount() {
            return Object.keys(this.groupedImages).length;
        },
        countChosenGroup(groupName) {
            if (this.groupedImages[groupName]) {
                return this.groupedImages[groupName].length;
            }
            return 0;
        },
        countItemsInGroup(groupName) {
            return this.countChosenGroup(groupName);
        },
        countTotalItems() {
            let total = 0;
            for (const groupName in this.groupedImages) {
                if (this.groupedImages.hasOwnProperty(groupName)) {
                    total += this.groupedImages[groupName].length;
                }
            }
            return total;
        },
       getGroupByIndex(index) {
            let currentIndex = 0;
            for (const groupName in this.groupedImages) {
                if (this.groupedImages.hasOwnProperty(groupName)) {
                    const group = this.groupedImages[groupName];
                    if (currentIndex + group.length +1 > index) {
                        return groupName;
                    }
                    currentIndex += group.length;
                }
            }
            return null;
        }
    },
    computed: {
        groupedImages() {
            const groups = {};
            if (this.Imagee && Array.isArray(this.Imagee)) {
                this.Imagee.forEach((item) => {
                    const name = item.name || 'Unknown';
                    if (!groups[name]) {
                        groups[name] = [];
                    }
                    groups[name].push({
                        ...item,
                        id: item.id,
                        name: item.name,
                        serial: item.serial
                    });
                });
            }
            return groups;
        }
    },
    async mounted() {
            
        try {
            const productParam = this.$route.params.product;
            // this.$route.params.currentGroup = this.getGroupByIndex(this.$route.params.id)
            // console.error(productParam);
            if (!productParam) {
                throw new Error('Product parameter is missing in the route');
            }
            const url = `./data/${productParam}.json`;
            const response = await this.fetchProducts(url);
            if (response && response.length > 0) {
                this.Imagee = response;
            } else {
                console.error('No products found in the fetched data');
            }
        } catch (error) {
            console.error('Error during mounted hook:', error.message);
            this.$emit('error', error.message); // Emit an error event for better handling
        }
           
          console.log(this.$route.params.currentGroup)
          //   console.log(this.countTotalItems())
          this.$route.params.currentGroup =  this.getGroupByIndex(this.$route.params.id)
          this.$route.params.currentGroup =  this.getGroupByIndex(this.$route.params.id)
          //   this.$route.params.totalGroupItems = this.countItemsInGroup(this.$route.params.currentGroup)
          //   this.$route.params.totalItems = this.countTotalItems()
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0);
        next();
    }
};
