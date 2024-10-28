
import fetchMixin from './../../mixins/fetchMixin.js'

export default {
    mixins: [fetchMixin],
	props: ['pathTo', 'childClass', 'value', 'parentClass'],
	template: `
		<div @click="updateMenu()W"  :class="parentClass">
			<router-link :to="{ path: pathTo }" :class="childClass ">{{ value }}</router-link>
		</div>
		
	`,
}