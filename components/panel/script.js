export default {
	props: {
		title: String,
		information: {
			type: [Array, String],
			default: () => []
		}
	},
	template: `
		<div>
			<h3>{{ title }}</h3>
			<p v-for='(item, index) in modifiedArray' :key="index">{{ item }}</p>
		</div>
	`,
	computed: {
		modifiedArray() {
			if (this.information && this.information.length > 0) {
	            return this.information.split(',')
	        } else {
	        	return []
	        }
		}
	        
    },
	methods: {
		breakArraysValueIntoLetters() {
			if(this.information.length === 1) {
				return [...this.information, 'Second']
			} else if (this.information.length === 2) {
				return this.information
			} else {
				return this.information
			}
		}
	}

}