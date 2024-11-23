
export default {
	props: ['name', 'concept', 'pathTo', 'value'],
	template: `
		<section class="produc" >
			<img src="./assets/cemetry-gates.png" class="produc-image" alt="" />
			<div class="produc-infoBlock">
				<h3 class="produc-name">{{ name }}</h3>
				<p class="produc-article">{{ concept }}</p>
				<router-link  :to="pathTo" >{{ value }}</router-link>
			</div>
		</section>
			}
	`
}
