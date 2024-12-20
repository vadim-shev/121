
export default {
	props: ['name', 'concept', 'pathTo', 'value'],
	template: `
		<section class="produc" >
			<img src="./assets/bg_tombstone.png" class="produc-image" alt="" />
			<div class="produc-infoBlock">
				<h3 class="produc-name">{{ name }}</h3>
				<p class="produc-article">{{ concept }}</p>
				<router-link class="produc-routerLink"  :to="pathTo" >{{ value }}</router-link>
			</div>
		</section>
			
	`
}
